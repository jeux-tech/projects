import styled from "styled-components";
import { CheckAll, Circle } from "styled-icons/bootstrap";
import { Todo } from "styled-icons/remix-line";
import theme from "theme";

type Props = {
  path: string;
  navigate: (path: string) => void;
};

const StyledNavDrawer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
  padding: ${theme.spacing(3, 2)};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: ${theme.spacing(3)};

  ${({ theme }) => theme.breakpoints.down("sm")} {
    flex-direction: row;
  }
`;

const StyledTodoLink = styled(Todo)<{ active: boolean }>`
  width: 48px;
  height: 48px;
  padding: ${theme.spacing(2)};
  border-radius: ${theme.borderRadius.md};
  color: ${({ active }) =>
    active ? theme.colors.primary._100 : theme.colors.typography._60};
  background-color: ${({ active }) =>
    active ? theme.colors.primary._20 : theme.colors.typography._20};
  transition: all 0.2s ease-in-out;
  cursor: pointer;
`;

const StyledCompletedLink = styled(CheckAll)<{ active: boolean }>`
  width: 48px;
  height: 48px;
  padding: ${theme.spacing(2)};
  border-radius: ${theme.borderRadius.md};
  color: ${({ active }) =>
    active ? theme.colors.primary._100 : theme.colors.typography._60};
  background-color: ${({ active }) =>
    active ? theme.colors.primary._20 : theme.colors.typography._20};
  transition: all 0.2s ease-in-out;
  cursor: pointer;
`;

const StyledLogoWrapper = styled.div`
  position: relative;
  &::after {
    content: "JT";
    position: absolute;
    top: 50%;
    left: 50%;
    font-size: 20px;
    color: ${theme.colors.primary._100};
    font-weight: 800;
    transform: translate(-50%, -50%);
    z-index: 10;
  }
`;

const StyledLogo = styled(Circle)`
  width: 48px;
  height: 48px;
  color: ${theme.colors.primary._100};
`;

const StyleDivider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${theme.colors.typography._20};
`;

const NavDrawer: React.FC<Props> = ({ path, navigate }) => {
  return (
    <StyledNavDrawer>
      <StyledLogoWrapper>
        <StyledLogo />
      </StyledLogoWrapper>
      <StyleDivider />
      <StyledTodoLink
        active={path === "to-do"}
        onClick={() => navigate("to-do")}
      />
      <StyledCompletedLink
        active={path === "completed"}
        onClick={() => navigate("completed")}
      />
    </StyledNavDrawer>
  );
};

export default NavDrawer;
