import { o as e } from "./index-SJmvIjJq.js";
import { c as r } from "./styled-components.browser.esm-CMQQUr34.js";

import { o as e } from "./index-SJmvIjJq.js";
const b = (o) => o.charAt(0).toUpperCase() + o.slice(1).toLowerCase(),
  c = (o, i = /-/) => o.split(i).map(b).join(""),
  p = (o, i) => (d, f) => {
    const t = o.every((l) => i(l, d, f) ?? !0),
      s = Object.keys(d).every((l) => (o.includes(l) ? !0 : d[l] === f[l]));
    return t && s;
  },
  a = (o, i = !0) => {
    var d;
    const f = (d = o.current) == null ? void 0 : d.getBoundingClientRect();
    return {
      left: (f == null ? void 0 : f.x) || 0,
      top:
        ((f == null ? void 0 : f.y) || 0) +
        ((i && (window == null ? void 0 : window.scrollY)) || 0),
      width: (f == null ? void 0 : f.width) || 0,
      height: (f == null ? void 0 : f.height) || 0,
    };
  },
  x = (o) =>
    (o == null ? void 0 : o.$variant) === e.OUTLINED
      ? o != null && o.$disabled
        ? r(["border:1px solid #ffffff80;"])
        : r([
            "border:1px solid #ffffff3b;&:hover{border:1px solid #ffffff;}&:focus,&:focus-visible,&:focus-within{border:1px solid #90caf9;}",
          ])
      : (o == null ? void 0 : o.$variant) === e.FILLED
        ? o != null && o.$disabled
          ? r([
              "border-bottom:1px solid #ffffff80;background-color:#ffffff17;border-radius:4px 4px 0px 0px;",
            ])
          : r([
              "border-bottom:1px solid #ffffffb3;background-color:#ffffff17;border-radius:4px 4px 0px 0px;&:hover{border-bottom:1px solid #ffffff;background-color:#ffffff21;}&:focus,&:focus-visible,&:focus-within{border-bottom:1px solid #90caf9;}",
            ])
        : o != null && o.$disabled
          ? r(["border-bottom:1px solid #ffffff80;border-radius:0px;"])
          : r([
              "border-bottom:1px solid #ffffffb3;border-radius:0px;&:hover{border-bottom:1px solid #ffffff;}&:focus,&:focus-visible,&:focus-within{border-bottom:1px solid #90caf9;}",
            ]),
  v = () =>
    r(["cursor:pointer;border:none;background-color:transparent;outline:0;"]);
export { x as N, v as S, p as g, c as h, b as u, a as y };
