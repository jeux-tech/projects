import React, { InputHTMLAttributes } from "react";
import Typography from "../typography/Typography";
import {
  HelperText,
  Label,
  StyledErrorIcon,
  StyledInput,
  StyledInputWrapper,
} from "./Input.style";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  helperText?: string;
  label?: string;
  required?: boolean;
  error?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  ref?: React.Ref<HTMLInputElement>;
}

const Input: React.FC<Props> = React.forwardRef(
  (
    { name, helperText, label, required, error, disabled, fullWidth, ...props },
    ref
  ) => {
    const textStateColor = error ? "states_error" : "typography_80";
    return (
      <StyledInputWrapper disabled={disabled} fullWidth={fullWidth}>
        {label && (
          <Label color={textStateColor} htmlFor={name}>
            {label}
          </Label>
        )}

        <StyledInput
          ref={ref}
          id={name}
          error={error}
          name={name}
          required={required}
          disabled={disabled}
          {...props}
        />
        {helperText && (
          <HelperText
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            exit={{ scaleY: 0 }}
          >
            <StyledErrorIcon color={textStateColor} />
            <Typography variant="span" weight="thin" color={textStateColor}>
              {helperText}
            </Typography>
          </HelperText>
        )}
      </StyledInputWrapper>
    );
  }
);

export default Input;
