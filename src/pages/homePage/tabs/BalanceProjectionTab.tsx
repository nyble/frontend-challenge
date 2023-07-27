import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { CURRENCY_TICKERS } from "utils/constants";
import useGetAccountQuery from "graphql/generated/queries/getAccountQuery";
import { bankersRound } from "utils/formatNumber";
import Spacer from "components/position/Spacer";
import { ChartContainer, Container, FormContainer, InputField, Label } from "../styles/BalanceProjectionTab";

const BalanceProjectionTab = () => {
  const [income, setIncome] = React.useState(null);
  const [expenses, setExpenses] = React.useState(null);
  const currency = "DoggyDollars";
  const {data, loading} = useGetAccountQuery();

  if (loading) return <>Loading...</>

  const account = data && data.getAccount.success ? data.getAccount.data : null;
  const accountBalance = account ? account.balance / 100 : 0;

  const calculateProjectedBalance = () => accountBalance + (!isNaN(income) ? income : 0) - (!isNaN(expenses) ? expenses : 0);
  const projectedCashFlow = calculateProjectedBalance();

  const chartData = [
    {
      name: 'Projections',
      Income: income || 0,
      Expenses: expenses || 0,
      'Projected Cash Flow': projectedCashFlow,
    },
  ];

  return (
    <Container>
      <FormContainer>
        <Label>Projected Account Balance</Label>
        <Label style={{ color: projectedCashFlow < 0 ? 'red' : 'green' }}>
          {(CURRENCY_TICKERS[currency] || '') + bankersRound(projectedCashFlow)}
        </Label>
        <Spacer height={24} />
        <InputField
          type="number"
          value={income || ''}
          onChange={e => setIncome(parseFloat(e.target.value))}
          placeholder="Enter your income"
        />
        <Spacer height={24} />
        <InputField
            type="number"
            value={expenses || ''}
            onChange={e => setExpenses(parseFloat(e.target.value))}
            placeholder="Enter your expenses"
        />
      </FormContainer>

      <ChartContainer>
        <ResponsiveContainer minHeight={300}>
            <BarChart
                data={chartData}
                margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Income" fill="#82ca9d" />
                <Bar dataKey="Expenses" fill="#f54242" />
                <Bar dataKey="Projected Cash Flow" fill="#8884d8" />
            </BarChart>
        </ResponsiveContainer>
      </ChartContainer>
    </Container>
  );
};

export default BalanceProjectionTab;
