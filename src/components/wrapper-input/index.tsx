import { IWrapperInputProps } from "components/wrapper-input/types";
import WrapperStyled from "components/wrapper-input/style";
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
