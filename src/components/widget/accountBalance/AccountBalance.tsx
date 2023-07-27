import React from "react";
import styled from "styled-components";
import { CURRENCY_TICKERS, CurrencyTickersType } from "utils/constants";
import { BalanceContainer, CurrencyText } from "./styles/AccountBalance";

interface AccountBalanceProps {
  currency: string;
  balance: number | string;
}

const AccountBalance: React.FC<AccountBalanceProps> = ({ currency, balance }) =>
{
  return (
    <>
      <BalanceContainer>
      {(CURRENCY_TICKERS as CurrencyTickersType)[currency]
      && <span>{(CURRENCY_TICKERS as CurrencyTickersType)[currency]}</span>}
      <span>{balance}</span>
      </BalanceContainer>
      <CurrencyText>{currency}</CurrencyText>
    </>
  );
};

export default AccountBalance;
