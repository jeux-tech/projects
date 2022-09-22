import { useState } from "react";
import styled from "styled-components";
import NavDrawer from "../nav-drawer/NavDrawer";

const StyledLayout = styled.div`
  display: flex;
  height: 100%;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    flex-direction: column;
  }
`;
const StyledNavDrawerWrapper = styled.div`
  width: 100px;
  height: 100%;
  overflow-y: auto;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    width: 100%;
    height: 60px;
  }
`;
const StyledMainWrapper = styled.div`
  flex: 1;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
`;

type Props = {
  children: (view: string) => React.ReactNode;
};

const Layout = ({ children }: Props) => {
  const [view, setView] = useState("to-do");

  const navigate = (path: string) => {
    setView(path);
  };

  return (
    <StyledLayout>
      <StyledNavDrawerWrapper>
        <NavDrawer path={view} navigate={navigate} />
      </StyledNavDrawerWrapper>
      <StyledMainWrapper>{children(view)}</StyledMainWrapper>
    </StyledLayout>
  );
};

export default Layout;
