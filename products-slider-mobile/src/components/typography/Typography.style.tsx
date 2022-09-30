import React from "react";
import styled from "styled-components";
import theme from "theme";
import { ColorsType, flatColors } from "theme/colors";
import { TypographyProps } from "./Typography";

const weightMap = {
  thin: "400",
  regular: "500",
  "semi-bold": "600",
  bold: "bold",
  bolder: "bolder",
};

const getFontSize = (
  variant: TypographyProps["variant"],
  size: TypographyProps["size"]
) => {
  const modifier = size === "sm" ? 0.8 : size === "lg" ? 1.2 : 1;

  return (
    theme.fontSizes[variant as keyof typeof theme.fontSizes] * modifier + "px"
  );
};

export const StyledCustomTag = styled(
  ({ variant, ...props }: TypographyProps) => {
    const CustomTag = variant as React.ElementType;
    return <CustomTag {...props} />;
  }
)`
  margin: 0;
  font-family: "Graphik", sans-serif;
  font-size: ${({ variant, size }) => getFontSize(variant, size)};
  color: ${({ color }) => flatColors[color as ColorsType]};
  font-weight: ${({ weight }) => weightMap[weight as keyof typeof weightMap]};
  text-align: ${({ align }) => align};
`;
