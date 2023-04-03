import { Outlet } from "react-router-dom";
import Styled from "./style";
import Tabbar from "./tabbar";

const Layout = () => {
  return (
    <>
      <Styled.Main>
        <Outlet />
      </Styled.Main>
      <Tabbar />
    </>
  );
};

export default Layout;
