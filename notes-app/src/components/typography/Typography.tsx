import React from "react";
import { ColorsType } from "theme/colors";
import { StyledCustomTag } from "./Typography.style";

type TypographyVariant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
type TypographyWeight = "thin" | "normal" | "semi-bold" | "bold" | "bolder";
type TypographySize = "sm" | "md" | "lg";

export type TypographyProps = {
  variant?: TypographyVariant;
  weight?: TypographyWeight;
  size?: TypographySize;
  color?: ColorsType;
  align?: "left" | "center" | "right";
  children: React.ReactNode;
};

const Typography: React.FC<TypographyProps> = ({
  variant = "p",
  weight = "normal",
  size = "md",
  color = "white_100",
  align = "left",
  children,
}) => (
  <StyledCustomTag
    variant={variant}
    weight={weight}
    size={size}
    color={color}
    align={align}
  >
    {children}
  </StyledCustomTag>
);

export default Typography;
