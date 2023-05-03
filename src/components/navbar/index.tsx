import { Menu as IconMenu, User as IconUser } from "react-feather";

import { INavbarProps } from "components/navbar/types";
import Styled from "components/navbar/style";
import cx from "classnames";
import { useMemo } from "react";

const Navbar = ({
  leftIcon,
  rightIcon,
  onLeftClick,
  onRightClick,
  className,
  ...props
}: INavbarProps) => {
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
    <Styled.Navbar
      {...props}
      className={cx("navbar", className)}
      leftButton={leftButton}
      rightButton={rightButton}
    />
  );
};

export default Navbar;
