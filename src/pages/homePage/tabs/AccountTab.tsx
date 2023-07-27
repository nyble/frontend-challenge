import React from "react";
import useGetAccountQuery from "graphql/generated/queries/getAccountQuery";
import AccountBalance from "components/widget/accountBalance/AccountBalance";
import { LargeText } from "mixins/Font";
import { formatNumber } from "utils/formatNumber";
import doggyDollar from 'images/doggy_dollar.png';
import { BalanceText, DoggyDollarImage, AccountStatusText, AccountStatus } from "../styles/AccountTab";


export type AccountTabProps = {}

export const AccountTab: React.FC<AccountTabProps> = () => {

  const {data, loading, refetch} = useGetAccountQuery();

  const account = data && data.getAccount.success ? data.getAccount.data : null;

  if (loading) {
    return <>Loading...</>
  }

  return (
    <>
    {account ? (
      <>
        <BalanceText>Your current account balance is</BalanceText>
        <DoggyDollarImage src={doggyDollar} alt="paw doggy dollar icon"/>
        <AccountBalance currency={account.currency} balance={formatNumber(account.balance)} />
        <AccountStatusText>Account status</AccountStatusText>
        <AccountStatus>{account.status}</AccountStatus>

      </>
    ) : (
      <LargeText>No account data available</LargeText> //graceful fail in case the account dne
    )}
    </>
  )
}
