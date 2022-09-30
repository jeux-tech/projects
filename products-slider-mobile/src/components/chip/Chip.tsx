import React from "react";
import { ColorsType } from "theme/colors";
import { StyledChipWrapper, StyledTextWrapper } from "./Chip.style";

type ChipProps = {
  color: ColorsType;
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
};

const Chip: React.FC<ChipProps> = ({
  size = "md",
  color,
  children,
  className,
}) => (
  <StyledChipWrapper size={size} color={color} className={className}>
    <StyledTextWrapper size={size} color={color}>
      {children}
    </StyledTextWrapper>
  </StyledChipWrapper>
);

export default Chip;
