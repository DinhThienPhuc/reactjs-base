import { c as d } from "./clsx-B-dksMZM.js";
import { r as u } from "./index-Cs7sjTYM.js";
import { u as w } from "./index-DJbV_2Cm.js";
import { j as $ } from "./jsx-runtime-BlAj40OV.js";
import { c as g, p as l } from "./styled-components.browser.esm-CMQQUr34.js";

import { c as d } from "./clsx-B-dksMZM.js";
import { r as u } from "./index-Cs7sjTYM.js";
import { p as l, c as g } from "./styled-components.browser.esm-CMQQUr34.js";
import { u as w } from "./index-DJbV_2Cm.js";
const f = ({
    $alignItems: o,
    $justifyContent: a,
    $flexDirection: e,
    $gap: i,
    $wrap: n,
    $fullWidth: t,
  }) =>
    g(
      [
        "display:flex;justify-content:",
        ";align-items:",
        ";flex-direction:",
        ";gap:",
        ";flex-wrap:",
        ";width:",
        ";",
      ],
      a,
      o,
      e,
      i,
      n,
      t ? "100%" : "auto",
    ),
  y = {
    Div: l.div.withConfig({
      displayName: "_style__Div",
      componentId: "sc-ff53i6-0",
    })(["", ";"], f),
    Span: l.span.withConfig({
      displayName: "_style__Span",
      componentId: "sc-ff53i6-1",
    })(["", ";"], f),
  },
  I = ({
    children: o,
    className: a,
    flexDirection: e = "row",
    alignItems: i = "center",
    justifyContent: n = "center",
    variant: t = "div",
    gap: r = "0px",
    wrap: s = "nowrap",
    fullWidth: p = !1,
    htmlAttributes: x,
  }) => {
    const c = u.useMemo(() => {
      const m = w(t);
      return y[m];
    }, [t]);
    return $.jsx(c, {
      ...x,
      $flexDirection: e,
      $alignItems: i,
      $justifyContent: n,
      $gap: r,
      $wrap: s,
      $fullWidth: p,
      className: d(
        "flex-box",
        `flex-box--direction-${e}`,
        `flex-box--alignItems-${i}`,
        `flex-box--justifyContent-${n}`,
        `flex-box--gap-${r}`,
        `flex-box--wrap-${s}`,
        `flex-box--variant-${t}`,
        a,
      ),
      children: o,
    });
  };
export { I as v };
