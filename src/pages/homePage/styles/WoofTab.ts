import { LargeText } from "mixins/Font";
import styled from "styled-components";

export const WoofText = styled(LargeText)`
  width: 299px;
  height: 46px;
  text-align: center;
  font-family: Poppins;
  font-size: 20px;
  font-weight: 800;
  margin-bottom: 60px;
`

export const StyledWoofButton = styled.button`
  padding: 15px 30px;
  border-radius: 65px;
  background: var(--neutral-dark, #0F1B2D);
  color: #fff;
  font-family: Poppins;
  font-size: 20px;
  font-weight: 800;
  margin-bottom: 90px;
`;
