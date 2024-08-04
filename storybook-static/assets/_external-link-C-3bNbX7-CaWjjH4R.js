import "./_commonjsHelpers-BosuxZz1.js";
import { c as a } from "./clsx-B-dksMZM.js";
import "./index-Cs7sjTYM.js";
import { j as o } from "./jsx-runtime-BlAj40OV.js";

import { c as a } from "./clsx-B-dksMZM.js";
import "./index-Cs7sjTYM.js";
import "./_commonjsHelpers-BosuxZz1.js";
const p = ({
  className: t = "",
  name: s,
  color: r,
  width: i,
  height: e,
  htmlAttributes: n,
}) =>
  o.jsxs("svg", {
    ...n,
    xmlns: "http://www.w3.org/2000/svg",
    width: i || "24",
    height: e || "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    color: r,
    className: a("phantomthief-icon", "icon", `icon--${s}`, t),
    children: [
      o.jsx("path", { d: "M15 3h6v6" }),
      o.jsx("path", { d: "M10 14 21 3" }),
      o.jsx("path", {
        d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
      }),
    ],
  });
export { p as IconExternalLink };
