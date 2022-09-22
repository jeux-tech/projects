import styled from 'styled-components';
import theme from 'theme';
import { ColorsType, flatColors } from 'theme/colors';

type ChipSize = 'sm' | 'md' | 'lg';

interface CommonProps {
  size: ChipSize;
  color: ColorsType;
}

const getChipPadding = (size: ChipSize) => {
  if (size === 'sm') {
    return theme.spacing(1, 1.5);
  }
  if (size === 'md') {
    return theme.spacing(2, 3);
  }
  if (size === 'lg') {
    return theme.spacing(3, 4);
  }
};
const getChipFontSize = (size: ChipSize) => {
  if (size === 'sm') {
    return '13px';
  }
  if (size === 'md') {
    return '14px';
  }
  if (size === 'lg') {
    return '16px';
  }
};

export const StyledChipWrapper = styled.div<CommonProps>`
  position: relative;
  display: inline-block;
  border-radius: ${theme.borderRadius.md};
  padding: ${({ size }) => getChipPadding(size)};
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;

    background-color: ${({ color }) => flatColors[color]};
    opacity: 0.17;
  }
`;

export const StyledTextWrapper = styled.span<CommonProps>`
  font-weight: 500;
  font-family: 'Graphik', sans-serif;
  font-size: ${({ size }) => getChipFontSize(size)};
  line-height: 15px;
  color: ${({ color }) => flatColors[color]};
`;
