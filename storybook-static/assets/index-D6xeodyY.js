import "./_commonjsHelpers-BosuxZz1.js";
import { c as p } from "./clsx-B-dksMZM.js";
import { r as n } from "./index-Cs7sjTYM.js";
import { t as f } from "./index-SJmvIjJq.js";
import { j as l } from "./jsx-runtime-BlAj40OV.js";
import { p as m } from "./styled-components.browser.esm-CMQQUr34.js";

import { c as p } from "./clsx-B-dksMZM.js";
import { r as n } from "./index-Cs7sjTYM.js";
import { p as m } from "./styled-components.browser.esm-CMQQUr34.js";
import { t as f } from "./index-SJmvIjJq.js";
import "./_commonjsHelpers-BosuxZz1.js";
const o = { OUTLINED: "outlined", FILLED: "filled", STANDARD: "standard" },
  x = {
    Container: m.span.withConfig({
      displayName: "_style__Container",
      componentId: "sc-i2f9bl-0",
    })(
      [
        "display:inline-block;position:absolute;font-size:12px;font-family:",
        ";top:",
        "px;left:",
        ";color:",
        ";",
      ],
      f.VERNADA,
      ({ $hasLabel: e }) => 4 + (e ? 44 : 56),
      ({ $variant: e }) => (e === o.STANDARD ? "0px" : "14px"),
      ({ $isError: e }) => (e ? "#f44336" : "#ffffffb3"),
    ),
  },
  c = n.memo(
    ({
      className: e,
      children: r = "",
      variant: t = o.STANDARD,
      isError: a = !1,
      hasLabel: i = !1,
      htmlAttributes: s,
    }) =>
      r
        ? l.jsx(x.Container, {
            ...s,
            $variant: t,
            $hasLabel: i,
            $isError: a,
            className: p(
              "helper-text",
              `helper-text--variant-${t}`,
              i && "helper-text--hasLabel",
              a && "helper-text--error",
              e,
            ),
            children: r,
          })
        : null,
  );
c.displayName = "HelperText";
export { o as HELPER_TEXT_VARIANT, c as HelperText };
