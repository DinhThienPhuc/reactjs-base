import { IWrapperButtonProps } from "components/wrapper-button/types";
import WrapperStyled from "components/wrapper-button/style";
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
