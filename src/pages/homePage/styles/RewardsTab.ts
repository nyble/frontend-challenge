import styled from "styled-components";
import { LargeText } from "mixins/Font";

export const StyledText = styled(LargeText)`
  text-align: center;
  font-family: Poppins;
`;

export const RewardsText = styled(StyledText)`
  width: 299px;
  color: #000;
  font-size: 20px;
  font-weight: 800;
`

export const BonesText = styled(StyledText)`
  width: 317px;
  color: var(--secondary-dark, #A13D63);
  font-size: 45px;
  font-weight: 900;
  line-height: 50px;
  letter-spacing: -0.9px;
`

export const BoneImage = styled.img`
  display: flex;
  width: 100px;
  height: 100px;
  justify-content: center;
  align-items: center;
`;

export const DescriptionText = styled(StyledText)`
  width: 303px;
  color: #000;
  font-size: 16px;
  font-weight: 500;
  margin-top: 20px;
`
