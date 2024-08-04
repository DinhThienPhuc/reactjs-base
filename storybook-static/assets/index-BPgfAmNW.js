import { j as t } from "./jsx-runtime-BlAj40OV.js";
import { p as l, f as r } from "./styled-components.browser.esm-CMQQUr34.js";

function f(e) {
  var n,
    s,
    i = "";
  if (typeof e == "string" || typeof e == "number") i += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var a = e.length;
      for (n = 0; n < a; n++)
        e[n] && (s = f(e[n])) && (i && (i += " "), (i += s));
    } else for (s in e) e[s] && (i && (i += " "), (i += s));
  return i;
}
function c() {
  for (var e, n, s = 0, i = "", a = arguments.length; s < a; s++)
    (e = arguments[s]) && (n = f(e)) && (i && (i += " "), (i += n));
  return i;
}
const m = r(["0%{transform:scale(0);}100%{transform:scale(1);}"]),
  o = (e) =>
    r(
      ["0%{transform:translate(0,0);}100%{transform:", ";}"],
      `translate(${(5 * e) / 3}px, 0)`,
    ),
  $ = r(["0%{transform:scale(1);}100%{transform:scale(0);}"]),
  p = {
    Container: l.span.withConfig({
      displayName: "_style__Container",
      componentId: "sc-1eapjnd-0",
    })(
      [
        "display:flex;align-items:center;justify-content:center;width:",
        ";height:",
        ";",
      ],
      ({ $fullScreen: e }) => (e ? "100vw" : "100%"),
      ({ $fullScreen: e }) => (e ? "100vh" : "100%"),
    ),
    Spinner: l.span.withConfig({
      displayName: "_style__Spinner",
      componentId: "sc-1eapjnd-1",
    })(
      [
        "display:flex;position:relative;width:",
        ";height:",
        ";span{position:absolute;width:",
        ";height:",
        ";border-radius:50%;background:",
        ";}span:nth-child(1){left:",
        ";animation:",
        " 0.6s infinite;}span:nth-child(2){left:",
        ";animation:",
        " 0.6s infinite;}span:nth-child(3){left:",
        ";animation:",
        " 0.6s infinite;}span:nth-child(4){left:",
        ";animation:",
        " 0.6s infinite;}",
      ],
      ({ $size: e }) => `${(17 * e) / 3}px`,
      ({ $size: e }) => `${e}px`,
      ({ $size: e }) => `${e}px`,
      ({ $size: e }) => `${e}px`,
      ({ $color: e }) => e,
      ({ $size: e }) => `${(2 * e) / 3}px`,
      m,
      ({ $size: e }) => `${(2 * e) / 3}px`,
      ({ $size: e }) => o(e),
      ({ $size: e }) => `${(7 * e) / 3}px`,
      ({ $size: e }) => o(e),
      ({ $size: e }) => `${4 * e}px`,
      $,
    ),
  },
  x = ({
    size: e = 12,
    color: n = "#00bfff",
    fullScreen: s = !1,
    className: i,
    htmlAttributes: a,
  }) =>
    t.jsx(p.Container, {
      ...a,
      $fullScreen: s,
      className: c(
        "loading-ellipsis",
        `loading-ellipsis--size-${e}`,
        `loading-ellipsis--color-${n}`,
        s && "loading-ellipsis--fullScreen",
        i,
      ),
      children: t.jsxs(p.Spinner, {
        $size: e,
        $color: n,
        className: "loading-ellipsis-inner",
        children: [
          t.jsx("span", {}),
          t.jsx("span", {}),
          t.jsx("span", {}),
          t.jsx("span", {}),
        ],
      }),
    });
export { x };
