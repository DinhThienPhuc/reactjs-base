import { Id, toast } from "react-toastify";
import { useCallback, useRef } from "react";

import { Outlet } from "react-router-dom";
import Styled from "./style";
import Tabbar from "./tabbar";
import { useInternetStatus } from "_libs/hooks";

const Layout = () => {
  const toastId = useRef<Id | null>(null);

  const showOnline = useCallback(() => {
    toastId.current && toast.dismiss(toastId.current);
    toastId.current = toast.success("App is online", {
      position: toast.POSITION.TOP_CENTER,
      icon: "🥬",
      autoClose: 10000,
    });
  }, []);

  const showOffline = useCallback(() => {
    toastId.current && toast.dismiss(toastId.current);
    toastId.current = toast.error("App is offline", {
      position: toast.POSITION.TOP_CENTER,
      icon: "🍎",
      autoClose: false,
      closeOnClick: false,
    });
  }, []);

  useInternetStatus(showOnline, showOffline);

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
