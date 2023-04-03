import { IWrapperInputProps } from "./types";
import WrapperStyled from "./style";
import cx from "classnames";
import { forwardRef } from "react";

const WrapperInput = forwardRef<HTMLInputElement, IWrapperInputProps>(
  (props, ref) => {
    return (
      <WrapperStyled.Input
        {...props}
        ref={ref}
        variant="outlined"
        className={cx("wrapper-input", props?.className)}
      />
    );
  },
);

WrapperInput.displayName = "WrapperInput";

export default WrapperInput;
