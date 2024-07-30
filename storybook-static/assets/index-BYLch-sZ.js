import "./_commonjsHelpers-BosuxZz1.js";
import { c as i } from "./clsx-B-dksMZM.js";
import { r as l } from "./index-Cs7sjTYM.js";
import { j as o } from "./jsx-runtime-BlAj40OV.js";
import { p as m } from "./styled-components.browser.esm-CMQQUr34.js";

import { c as i } from "./clsx-B-dksMZM.js";
import { r as l } from "./index-Cs7sjTYM.js";
import { p as m } from "./styled-components.browser.esm-CMQQUr34.js";
import "./_commonjsHelpers-BosuxZz1.js";
const n = { OUTLINED: "outlined", FILLED: "filled", STANDARD: "standard" },
  p = {
    Container: m.span.withConfig({
      displayName: "_style__Container",
      componentId: "sc-1fn5six-0",
    })(
      [
        "display:flex;position:absolute;top:",
        ";transform:translateY(-50%);left:",
        ";",
      ],
      ({ $hasLabel: a }) => (a ? "calc(50% + 6px)" : "50%"),
      ({ $adormentVariant: a }) => (a === n.STANDARD ? "0px" : "14px"),
    ),
  },
  d = l.memo(
    ({
      className: a,
      children: t = null,
      variant: r = n.STANDARD,
      hasLabel: e = !1,
      htmlAttributes: s,
    }) =>
      t
        ? o.jsx(p.Container, {
            ...s,
            $adormentVariant: r,
            $hasLabel: e,
            className: i(
              "pre-adorment",
              `pre-adorment--variant-${r}`,
              e && "pre-adorment--hasLabel",
              a,
            ),
            children: t,
          })
        : null,
  );
d.displayName = "PreAdorment";
export { n as PRE_ADORMENT_VARIANT, d as PreAdorment };
