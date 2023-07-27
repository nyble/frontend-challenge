import React from "react";
import styled from "styled-components";
import { SquareTabButton, Circle, TabLabel } from "./styles/TabButton";

interface ColoredTabButtonProps {
  color: string;
  label: string;
  onClick: () => void;
  svgPath: string;
  selected: boolean;
  outlineColor: string | null;
}

interface SvgIconProps {
  path: string;
  stroke?: string;
  selected: boolean;
}

const StyledSvg = styled.svg`
  fill: none;
  stroke: ${({stroke}) => stroke};
  stroke-width: 2;
  width: 24px;
  height: 24px;
`;
const SvgIcon: React.FC<SvgIconProps> = ({ path, stroke = "black", selected }) => (
  <StyledSvg
    stroke={stroke}
    viewBox="3 3 24 24"
  >
    <path d={path} />
  </StyledSvg>
);

const getLabelColor = (selected: boolean, color: string, label: string): string => {
  if (label === 'Woof') {
    return "#FFFFFF"; // woof button always has white label
  }
  if (label === 'Rewards' && selected) {
    return "black";
  }

  if (!selected) {
    return "#FFFFFF"; // default label color when not selected
  }

  const colorMapping: Record<string, string> = {
    "#0F1B2D": "black",
    "#99C82D": "green",
    "#CD7A9A": "pink",
  };

  return colorMapping[color] || "black"; // default to black if color not found in mapping
};

const ColoredTabButton: React.FC<ColoredTabButtonProps> =
  ({ color, label, onClick, selected, svgPath }) => {
  const isRewardsButton = label === "Rewards";
  const isAccountButton = label === "Account";
  const isForecastButton = label === "Forecast";

  let svgColor = "black";
  if (isRewardsButton) {
    svgColor = selected ? "black" : "#CD7A9A";
  } else if (isAccountButton) {
    svgColor = selected ? "black" :  "#99C82D";
  } else if (isForecastButton) {
    svgColor = selected ? "black" :  "#A9D0F5";
  }

  return (
    <SquareTabButton color={color} onClick={onClick} selected={selected}>
      <Circle>
        <SvgIcon
          path={svgPath}
          stroke={svgColor}
          selected={selected}
        />
      </Circle>
      <TabLabel color={getLabelColor(selected, color, label)}>{label}</TabLabel>
    </SquareTabButton>
  );
};



export default ColoredTabButton;
