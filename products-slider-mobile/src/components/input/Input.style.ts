import { motion } from "framer-motion";
import styled from "styled-components";
import { ErrorAlt } from "styled-icons/boxicons-regular";
import theme from "theme";
import { ColorsType, flatColors } from "theme/colors";

export const StyledInputWrapper = styled.div<{
  fullWidth?: boolean;
  disabled?: boolean;
}>`
  ${({ disabled }) =>
    disabled &&
    `
  opacity: .7;
  cursor: not-allowed;
  `}
  ${({ fullWidth }) => fullWidth && "width: 100%;"}
  transition: .2s all;
`;

export const StyledErrorIcon = styled(ErrorAlt)<{ color: ColorsType }>`
  width: ${theme.spacing(4)};
  height: ${theme.spacing(4)};
  color: ${({ color }) => flatColors[color]};
`;

export const Label = styled.label<{ color: ColorsType }>`
  display: block;
  color: ${({ color }) => flatColors[color]};
  font-size: ${theme.fontSizes.span}px;
  font-weight: 600;
  margin-bottom: ${theme.spacing(2)};
`;

export const HelperText = styled(motion.div)`
  margin-top: ${theme.spacing(1)};
  display: block;
  margin-top: ${theme.spacing(2)};
  display: flex;
  align-items: center;
  gap: ${theme.spacing(1)};
  font-size: ${theme.fontSizes.span};
`;

type StyledInputProps = {
  error?: boolean;
};

export const StyledInput = styled.input<StyledInputProps>`
  width: 100%;
  color: ${theme.colors.typography._60};
  border: 1px solid ${theme.colors.border.light};
  border-radius: ${theme.borderRadius.lg};
  padding: 1rem 1.5rem;
  background-color: transparent;
  outline: none;
  transition: all 0.2s;
  ${({ disabled }) => disabled && `pointer-events: none;`}
  ${({ error }) => error && `border-color: ${theme.colors.states.error};`}

  &::placeholder {
    ${({ error }) => error && `color: ${theme.colors.states.error};`}
  }

  &:focus::placeholder {
    color: ${theme.colors.primary._100};
  }

  &:focus {
    color: ${theme.colors.primary._100};
    border-color: ${theme.colors.primary._100};
  }
`;
