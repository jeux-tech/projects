import React, { ButtonHTMLAttributes } from "react";
import Loader from "../loader/Loader";
import { StyledButton, StyledButtonProps } from "./Button.style";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    Partial<StyledButtonProps> {
  fullWidth?: boolean;
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  isLoading,
  fullWidth,
  children,
  size = "md",
  variant = "primary",
  color = "primary",
  ...props
}) => {
  return (
    <StyledButton
      variant={variant}
      size={size}
      fullWidth={!!fullWidth}
      {...props}
    >
      {isLoading ? <Loader /> : children}
    </StyledButton>
  );
};

export default Button;
