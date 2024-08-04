import "../sb-preview/runtime.js";
import "./_commonjsHelpers-BosuxZz1.js";
import { c as f } from "./clsx-B-dksMZM.js";
import "./iframe-CMcQjm1L.js";
import "./index-BPgfAmNW.js";
import { Icon as x } from "./index-BU_VM_pW.js";
import { r as u } from "./index-Cs7sjTYM.js";
import { S as h } from "./index-DJbV_2Cm.js";
import "./index-SJmvIjJq.js";
import { j as o } from "./jsx-runtime-BlAj40OV.js";
import { c as A, p as i } from "./styled-components.browser.esm-CMQQUr34.js";

import { c as f } from "./clsx-B-dksMZM.js";
import { r as u } from "./index-Cs7sjTYM.js";
import { Icon as x } from "./index-BU_VM_pW.js";
import { p as i, c as A } from "./styled-components.browser.esm-CMQQUr34.js";
import { S as h } from "./index-DJbV_2Cm.js";
import "./_commonjsHelpers-BosuxZz1.js";
import "./iframe-CMcQjm1L.js";
import "../sb-preview/runtime.js";
import "./index-BPgfAmNW.js";
import "./index-SJmvIjJq.js";
const p = { OUTLINED: "outlined", FILLED: "filled", STANDARD: "standard" },
  m = (t) =>
    A(
      [
        "display:flex;position:absolute;transform:translateY(-50%);color:#ffffff;top:",
        ";right:",
        ";",
      ],
      t.$hasLabel ? "calc(50% + 6px)" : "50%",
      t.$adormentVariant === p.STANDARD ? "0px" : "14px",
    ),
  l = {
    Container: i.span.withConfig({
      displayName: "_style__Container",
      componentId: "sc-plueqd-0",
    })(["", ";"], m),
    ButtonContainer: i.button.withConfig({
      displayName: "_style__ButtonContainer",
      componentId: "sc-plueqd-1",
    })(["", ";", ";"], h, m),
  },
  N = u.memo(
    ({
      className: t,
      children: a = null,
      variant: n = p.STANDARD,
      clearIcon: c = null,
      hasLabel: r = !1,
      htmlAttributes: d,
      clear: s,
    }) => {
      const e = {
        ...d,
        $adormentVariant: n,
        $hasLabel: r,
        className: f(
          "post-adorment",
          `post-adorment--variant-${n}`,
          r && "post-adorment--hasLabel",
          t,
        ),
      };
      return s
        ? o.jsx(l.ButtonContainer, {
            ...e,
            onClick: s,
            children: c ?? o.jsx(x, { name: "x" }),
          })
        : a
          ? o.jsx(l.Container, { ...e, children: a })
          : null;
    },
  );
N.displayName = "PostAdorment";
export { p as POST_ADORMENT_VARIANT, N as PostAdorment };
