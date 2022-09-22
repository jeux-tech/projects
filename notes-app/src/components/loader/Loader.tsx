import { ColorsType } from 'theme/colors';
import { Ball, StyledContainer } from './Loader.style';

type Props = {
  color?: ColorsType;
};

const Loader: React.FC<Props> = ({ color = 'white_100' }) => {
  return (
    <StyledContainer>
      <Ball color={color} />
      <Ball color={color} />
      <Ball color={color} />
    </StyledContainer>
  );
};

export default Loader;
