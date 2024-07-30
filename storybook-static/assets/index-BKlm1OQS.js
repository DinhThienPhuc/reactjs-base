import { c as h } from "./clsx-B-dksMZM.js";
import { r as d } from "./index-Cs7sjTYM.js";
import { u as $, S as f } from "./index-DJbV_2Cm.js";
import { j as y } from "./jsx-runtime-BlAj40OV.js";
import { c as g, p as t } from "./styled-components.browser.esm-CMQQUr34.js";

import { c as h } from "./clsx-B-dksMZM.js";
import { r as d } from "./index-Cs7sjTYM.js";
import { p as t, c as g } from "./styled-components.browser.esm-CMQQUr34.js";
import { S as f, u as $ } from "./index-DJbV_2Cm.js";
const o = ({ $size: n, $color: a, $bold: i, $font: e, $align: s }) =>
    g(
      [
        "transition:inherit;font-size:",
        ";font-weight:",
        ";color:",
        ";font-family:",
        ";text-align:",
        ";",
      ],
      typeof n == "number" ? `${n}px` : n,
      i,
      a,
      e,
      s,
    ),
  z = {
    H1: t.h1.withConfig({
      displayName: "_style__H1",
      componentId: "sc-1qc7zt2-0",
    })(["", ";"], o),
    H2: t.h2.withConfig({
      displayName: "_style__H2",
      componentId: "sc-1qc7zt2-1",
    })(["", ";"], o),
    H3: t.h3.withConfig({
      displayName: "_style__H3",
      componentId: "sc-1qc7zt2-2",
    })(["", ";"], o),
    H4: t.h4.withConfig({
      displayName: "_style__H4",
      componentId: "sc-1qc7zt2-3",
    })(["", ";"], o),
    H5: t.h5.withConfig({
      displayName: "_style__H5",
      componentId: "sc-1qc7zt2-4",
    })(["", ";"], o),
    H6: t.h6.withConfig({
      displayName: "_style__H6",
      componentId: "sc-1qc7zt2-5",
    })(["", ";"], o),
    Span: t.span.withConfig({
      displayName: "_style__Span",
      componentId: "sc-1qc7zt2-6",
    })(["", ";"], o),
    Caption: t.caption.withConfig({
      displayName: "_style__Caption",
      componentId: "sc-1qc7zt2-7",
    })(["", ";"], o),
    Button: t.button.withConfig({
      displayName: "_style__Button",
      componentId: "sc-1qc7zt2-8",
    })(["", ";", ";padding:0;"], o, f),
    A: t.a.withConfig({
      displayName: "_style__A",
      componentId: "sc-1qc7zt2-9",
    })(["", ";cursor:pointer;text-decoration-line:none;"], o),
    P: t.p.withConfig({
      displayName: "_style__P",
      componentId: "sc-1qc7zt2-10",
    })(["", ";margin-block:0;"], o),
  },
  q = ({
    variant: n = "span",
    children: a,
    size: i = "inherit",
    bold: e = 400,
    color: s = "inherit",
    font: p = "inherit",
    className: r = "",
    align: c = "inherit",
    htmlAttributes: l,
  }) => {
    const _ = d.useMemo(() => {
      const m = $(n);
      return z[m];
    }, [n]);
    return y.jsx(_, {
      ...l,
      $size: i,
      $color: s,
      $bold: e,
      $font: p,
      $align: c,
      className: h(
        "typography",
        `typography__variant--${n}`,
        `typography__size--${i}`,
        `typography__bold--${e}`,
        `typography__color--${s}`,
        `typography__font--${p}`,
        `typography__align--${c}`,
        r,
      ),
      children: a,
    });
  };
export { q as u };
