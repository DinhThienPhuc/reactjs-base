import { Menu as IconMenu, User as IconUser } from "react-feather";

import { IWrapperNavbarProps } from "./types";
import Styled from "./style";
import WrapperStyled from "./style";
import cx from "classnames";
import { useMemo } from "react";

const WrapperNavbar = ({
  leftIcon,
  rightIcon,
  onLeftClick,
  onRightClick,
  className,
  ...props
}: IWrapperNavbarProps) => {
  const leftButton = useMemo(() => {
    return (
      <Styled.Button onClick={onLeftClick}>
        {leftIcon ? leftIcon : <IconMenu />}
      </Styled.Button>
    );
  }, [leftIcon, onLeftClick]);

  const rightButton = useMemo(() => {
    return (
      <Styled.Button onClick={onRightClick}>
        {rightIcon ? rightIcon : <IconUser color="#ffffff" />}
      </Styled.Button>
    );
  }, [onRightClick, rightIcon]);

  return (
    <WrapperStyled.Navbar
      {...props}
      className={cx("wrapper-navbar", className)}
      leftButton={leftButton}
      rightButton={rightButton}
    />
  );
};

export default WrapperNavbar;
