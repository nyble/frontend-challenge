import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { LargeHeading } from "mixins/Font";
import { optional } from 'utils/styledComponents';

export const HomePageWrapper = styled.div`
  flex: 1;
  flex-direction: column;
  height: 100%;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
`;

export const HomePageTabWrapper = styled.div<{
  someOption?: string
  // You can add options here
}>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: ${({ theme }) => theme.colours.white};
  border-radius: 10px;

  ${breakpoint('mobile')`
    width: 100%;
    max-width: 350px;
    padding: 24px 24px;
  `}

  ${breakpoint('tablet')`
    width: 100%;
    max-width: 900px;
    padding: 48px 24px;
  `}
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-self: flex-start;
  width: 100%;
  overflow-x: auto;
  flex-wrap: nowrap;
  justify-content: flex-start;
  overflow-y: auto;
  padding-bottom: 24px;
  margin-left: 10px
`;

export const LogoutButtonContainer = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  padding-bottom: 20px;
`;

export const WelcomeText = styled(LargeHeading)`
  color: #000;
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 26px;
  letter-spacing: -0.48px;
`;
