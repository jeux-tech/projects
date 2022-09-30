import styled from 'styled-components';
import { ColorsType, flatColors } from 'theme/colors';

export const StyledContainer = styled.div``;

export const Ball = styled.div<{ color: ColorsType }>`
  display: inline-block;
  background-color: ${({ color }) => flatColors[color]};
  height: 15px;
  width: 15px;
  border-radius: 25px;
  margin: 0 4px;

  animation-name: bounce;
  animation-duration: 0.8s;
  animation-iteration-count: infinite;

  &:nth-of-type(1) {
    animation-delay: 0s;
  }
  &:nth-of-type(2) {
    animation-delay: 0.1s;
  }
  &:nth-of-type(3) {
    animation-delay: 0.2s;
  }

  @keyframes bounce {
    0% {
      transform: scale(0.8);
    }

    50% {
      transform: scale(1.2);
    }

    100% {
      transform: scale(0.8);
    }
  }
`;
