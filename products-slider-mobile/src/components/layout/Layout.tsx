import { Outlet } from "react-router-dom";
import styled from "styled-components";

const StyledLayout = styled.div`
  width: 100%;
  height: 100%;
`;

type Props = {
  children?: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <StyledLayout>
      {children}
      <Outlet />
    </StyledLayout>
  );
};

export default Layout;
