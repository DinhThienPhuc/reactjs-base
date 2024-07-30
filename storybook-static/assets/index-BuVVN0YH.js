import { c as a } from "./clsx-B-dksMZM.js";
import { j as e } from "./jsx-runtime-BlAj40OV.js";
import { p as l, f as r } from "./styled-components.browser.esm-CMQQUr34.js";

import { c as a } from "./clsx-B-dksMZM.js";
import { p as l, f as r } from "./styled-components.browser.esm-CMQQUr34.js";
const c = (i) =>
    r(
      [
        "0%{top:",
        "px;left:",
        "px;width:0;height:0;opacity:0;}4.9%{top:",
        "px;left:",
        "px;width:0;height:0;opacity:0;}5%{top:",
        "px;left:",
        "px;width:0;height:0;opacity:1;}100%{top:0px;left:0px;width:",
        "px;height:",
        "px;opacity:0;}",
      ],
      i * 0.5,
      i * 0.5,
      i * 0.5,
      i * 0.5,
      i * 0.5,
      i * 0.5,
      i,
      i,
    ),
  o = {
    Container: l.span.withConfig({
      displayName: "_style__Container",
      componentId: "sc-x0fd2s-0",
    })(
      [
        "display:flex;align-items:center;justify-content:center;width:",
        ";height:",
        ";",
      ],
      ({ $fullScreen: i }) => (i ? "100vw" : "100%"),
      ({ $fullScreen: i }) => (i ? "100vh" : "100%"),
    ),
    Ripple: l.span.withConfig({
      displayName: "_style__Ripple",
      componentId: "sc-x0fd2s-1",
    })(
      [
        "display:inline-block;position:relative;width:",
        ";height:",
        ";span{position:absolute;border:4px solid ",
        ";opacity:1;border-radius:50%;animation:",
        " 1s cubic-bezier(0,0.2,0.8,1) infinite;}span:nth-child(2){animation-delay:-0.5s;}",
      ],
      ({ $size: i }) => `${i + 8}px`,
      ({ $size: i }) => `${i + 8}px`,
      ({ $color: i }) => i,
      ({ $size: i }) => c(i),
    ),
  },
  x = ({
    size: i = 80,
    color: t = "#00bfff",
    fullScreen: p = !1,
    className: s,
    htmlAttributes: n,
  }) =>
    e.jsx(o.Container, {
      ...n,
      $fullScreen: p,
      className: a(
        "loading-ripple",
        `loading-ripple--size-${i}`,
        `loading-ripple--color-${t}`,
        p && "loading-ripple--fullScreen",
        s,
      ),
      children: e.jsxs(o.Ripple, {
        $size: i,
        $color: t,
        className: "loading-ripple-inner",
        children: [e.jsx("span", {}), e.jsx("span", {})],
      }),
    });
export { x as m };
