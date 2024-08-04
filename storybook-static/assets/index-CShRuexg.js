import "./_commonjsHelpers-BosuxZz1.js";
import { c } from "./clsx-B-dksMZM.js";
import { r as b } from "./index-Cs7sjTYM.js";
import { t as x } from "./index-SJmvIjJq.js";
import { j as m } from "./jsx-runtime-BlAj40OV.js";
import { c as a, p as u } from "./styled-components.browser.esm-CMQQUr34.js";

import { c } from "./clsx-B-dksMZM.js";
import { r as b } from "./index-Cs7sjTYM.js";
import { p as u, c as a } from "./styled-components.browser.esm-CMQQUr34.js";
import { t as x } from "./index-SJmvIjJq.js";
import "./_commonjsHelpers-BosuxZz1.js";
const d = { OUTLINED: "outlined", FILLED: "filled", STANDARD: "standard" },
  A = (l) =>
    (l == null ? void 0 : l.$variant) === d.STANDARD
      ? l != null && l.$isLabelCollapsed
        ? a(["top:12px;left:0px;font-size:12px;"])
        : a(["left:0px;font-size:16px;"])
      : l != null && l.$isLabelCollapsed
        ? a(["top:12px;left:14px;font-size:12px;"])
        : a(["left:14px;font-size:16px;"]),
  L = (l) =>
    l != null && l.$disabled
      ? a(["color:#ffffff80;"])
      : l != null && l.$isError
        ? a(["color:#f44336;"])
        : l != null && l.$isFocused
          ? a(["color:#90caf9;"])
          : a(["color:#ffffff;"]),
  $ = {
    Container: u.span.withConfig({
      displayName: "_style__Container",
      componentId: "sc-16om4vg-0",
    })(
      [
        "transition:all 200ms ease-in-out 100ms;position:absolute;top:50%;transform:translateY(-50%);pointer-events:none;font-family:",
        ";",
        ";",
        ";",
      ],
      x.VERNADA,
      L,
      A,
    ),
  },
  N = b.memo(
    ({
      className: l,
      children: s = "",
      required: o = !1,
      disabled: e = !1,
      hiddenLabel: i = !1,
      isFocused: t = !1,
      isError: r = !1,
      variant: n = d.STANDARD,
      isLabelCollapsed: p = !1,
      htmlAttributes: f,
    }) =>
      i || !s
        ? null
        : m.jsxs($.Container, {
            ...f,
            $variant: n,
            $isLabelCollapsed: p,
            $disabled: e,
            $isError: r,
            $isFocused: t,
            className: c(
              "label",
              `label--variant-${n}`,
              p && "label--collapsed",
              e && "label--disabled",
              o && "label--required",
              t && "label--focused",
              r && "label--error",
              i && "label--hidden",
              l,
            ),
            children: [s, " ", o ? "*" : ""],
          }),
  );
N.displayName = "Label";
export { d as LABEL_VARIANT, N as Label };
