import styled from "styled-components";
import { LargeText } from "mixins/Font";

export const StyledText = styled(LargeText)`
  text-align: center;
  font-family: Poppins;
`;

export const AccountStatus = styled(StyledText)`
  border-radius: 35px;
  background: var(--primary-light, #E8F4CD);
  color: var(--primary-dark, #99C82D);
  font-size: 16px;
  font-weight: 700;
  width: 200px;
  padding: 6px;
`;

export const AccountStatusText = styled(StyledText)`
  margin-top: 30px;
  width: 303px;
  color: #000;
  font-size: 16px;
  font-weight: 500;
`;

export const BalanceText = styled(StyledText)`
  color: #000;
  font-size: 20px;
  font-weight: 800;
`;

export const DoggyDollarImage = styled.img`
  display: block;
  width: 75px;
  height: 75px;
  margin: 0 auto;

`;
