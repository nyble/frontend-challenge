import styled from "styled-components";

interface ButtonProps {
  color: string;
  selected: boolean;
}

export const SquareTabButton = styled.button<ButtonProps>`
  min-width: 90px;
  min-height: 90px;
  border: 3px solid ${props => (props.selected ? (props.color === "#0F1B2D"
    ? "#CD7A9A" : "black") : "transparent")};
  border-radius: 10px;
  color: ${props => (props.selected ? "black" : "#FFFFFF")};
  margin-right: 17px;
  background-color: ${props => props.color};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: Poppins;
  font-size: 16px;
  font-weight: 700;
`;

export const TabLabel = styled.div`
  text-align: center;
  color: ${props => props.color};
`;

export const Circle = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-top: 10px;
  background-color: #FFFFFF;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledSvg = styled.svg`
  fill: none;
  stroke: ${({stroke}) => stroke};
  stroke-width: 2;
  width: 24px;
  height: 24px;
`;
