import { IInputProps } from "components/input/types";
import Styled from "components/input/style";
import cx from "classnames";
import { forwardRef } from "react";

const Input = forwardRef<HTMLInputElement, IInputProps>((props, ref) => {
  return (
    <Styled.Input
      {...props}
      ref={ref}
      variant="outlined"
      className={cx("input", props?.className)}
    />
  );
});

Input.displayName = "Input";

export default Input;
