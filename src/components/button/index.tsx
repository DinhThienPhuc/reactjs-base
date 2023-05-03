import { IButtonProps } from "components/button/types";
import Styled from "components/button/style";
import cx from "classnames";

const Button = (props: IButtonProps) => {
  return (
    <Styled.Button {...props} className={cx("button", props?.className)} />
  );
};

export default Button;
