import { Outlet } from "react-router-dom";
import Styled from "./style";

const Layout = () => {
  return (
    <>
      <Styled.Main>
        <Outlet />
      </Styled.Main>
    </>
  );
};

export default Layout;
