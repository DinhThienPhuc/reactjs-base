import { IWrapperButtonProps } from "./types";
import WrapperStyled from "./style";
import cx from "classnames";

const WrapperButton = (props: IWrapperButtonProps) => {
  return (
    <WrapperStyled.Button
      {...props}
      className={cx("wrapper-button", props?.className)}
    />
  );
};

export default WrapperButton;
