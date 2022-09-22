import styled from "styled-components";
import theme from "theme";

type ButtonVariant = "primary" | "secondary" | "outlined";

type ButtonSize = "sm" | "md" | "lg";

export type StyledButtonProps = {
  size: ButtonSize;
  variant: ButtonVariant;
  fullWidth: boolean;
};

const getButtonRadius = (variant: ButtonVariant) => {
  switch (variant) {
    case "primary":
      return theme.borderRadius.sm;
    case "secondary":
      return theme.borderRadius.lg;
    case "outlined":
      return theme.borderRadius.lg;
    default:
      return theme.borderRadius.lg;
  }
};

const getButtonPadding = (size: ButtonSize) => {
  switch (size) {
    case "sm":
      return theme.spacing(2);
    case "md":
      return theme.spacing(2.5);
    case "lg":
      return theme.spacing(4);
    default:
      return theme.spacing(1);
  }
};

export const StyledButton = styled.button<StyledButtonProps>`
  ${({ fullWidth }) => fullWidth && "width: 100%;"}
  background-color: ${({ variant }) =>
    variant === "outlined" ? "transparent" : theme.colors.primary._100};
  color: ${({ variant }) =>
    variant === "outlined"
      ? theme.colors.primary._100
      : theme.colors.white._100};
  border: ${({ variant }) =>
    variant === "outlined" ? `1px solid ${theme.colors.primary._100}` : "none"};
  border-radius: ${({ variant }) => getButtonRadius(variant)};
  padding: ${({ size }) => getButtonPadding(size)};
  cursor: pointer;
  transition: 0.2s all;
  outline: none;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;
