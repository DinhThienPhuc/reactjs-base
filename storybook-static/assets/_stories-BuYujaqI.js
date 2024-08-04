import "./_commonjsHelpers-BosuxZz1.js";
import { c as g } from "./clsx-B-dksMZM.js";
import { u as N } from "./index-BKlm1OQS.js";
import { m as T } from "./index-BuVVN0YH.js";
import { r as E, R as e } from "./index-Cs7sjTYM.js";
import "./index-DJbV_2Cm.js";
import { t as y } from "./index-SJmvIjJq.js";
import { j as u } from "./jsx-runtime-BlAj40OV.js";
import { c as n, p as r } from "./styled-components.browser.esm-CMQQUr34.js";

import { c as g } from "./clsx-B-dksMZM.js";
import { m as T } from "./index-BuVVN0YH.js";
import { p as r, c as n } from "./styled-components.browser.esm-CMQQUr34.js";
import { u as N } from "./index-BKlm1OQS.js";
import { t as y } from "./index-SJmvIjJq.js";
import "./_commonjsHelpers-BosuxZz1.js";
import "./index-DJbV_2Cm.js";
const d = { SMALL: "small", MEDIUM: "medium", LARGE: "large" },
  p = { OUTLINED: "outlined", CONTAINED: "contained", TEXT: "text" },
  M = (t) =>
    (t == null ? void 0 : t.$size) === d.SMALL
      ? n(["height:24px;padding:0 16px;"])
      : (t == null ? void 0 : t.$size) === d.MEDIUM
        ? n(["height:36px;padding:0 20px;"])
        : n(["height:48px;padding:0 24px;"]),
  L = (t) =>
    (t == null ? void 0 : t.$variant) === p.CONTAINED
      ? n([
          "color:rgba(0,0,0,0.87);background-color:rgb(144,202,249);border:1px solid rgb(144,202,249);&:hover{background-color:rgb(66,165,245);}",
        ])
      : (t == null ? void 0 : t.$variant) === p.OUTLINED
        ? n([
            "color:rgb(144,202,249);background-color:transparent;border:1px solid rgba(144,202,249,0.5);&:hover{background-color:rgba(144,202,249,0.08);border:1px solid rgb(144,202,249);}",
          ])
        : n([
            "color:rgb(144,202,249);background-color:transparent;border:1px solid transparent;&:hover{background-color:rgba(144,202,249,0.08);}",
          ]),
  _ = {
    Container: r.button.withConfig({
      displayName: "_style__Container",
      componentId: "sc-1hpzkbc-0",
    })(
      [
        "display:flex;align-items:center;justify-content:center;transition:all 0.2s ease;background-color:transparent;box-shadow:none;outline:none;overflow:hidden;border-radius:4px;min-width:64px;padding:6px 12px;font-weight:500;cursor:pointer;",
        ";",
        ";&:hover,&:focus{outline:0;text-decoration:none;}",
      ],
      M,
      L,
    ),
  },
  b = ({
    variant: t = p.TEXT,
    size: a = d.MEDIUM,
    loading: o = !1,
    loadingComponent: i,
    className: l,
    htmlAttributes: h,
    children: m,
    onClick: x,
  }) => {
    const v = E.useMemo(
      () => (o ? (i ?? u.jsx(T, { size: 16, fullScreen: !1 })) : m),
      [m, o, i],
    );
    return u.jsx(_.Container, {
      ...h,
      $variant: t,
      $size: a,
      onClick: x,
      className: g(
        "button",
        `button--size-${a}`,
        `button--variant-${t}`,
        o && "button--loading",
        l,
      ),
      children: v,
    });
  },
  c = () => n`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    height: 100%;
  `,
  s = {
    Container: r.nav`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 56px;
    background-color: #121212;
  `,
    Title: r.span`
    ${c};
  `,
    LeftButton: r.span`
    ${c};
  `,
    RightButton: r.span`
    ${c};
  `,
  },
  f = ({
    title: t,
    leftButton: a,
    rightButton: o,
    className: i,
    htmlAttributes: l,
  }) =>
    e.createElement(
      s.Container,
      { ...l, className: g("navbar", i) },
      e.createElement(
        s.LeftButton,
        { className: "navbar__button navbar__button--left" },
        a,
      ),
      e.createElement(s.Title, { className: "navbar__title" }, t),
      e.createElement(
        s.RightButton,
        { className: "navbar__button navbar__button--right" },
        o,
      ),
    );
f.__docgenInfo = {
  description: "",
  methods: [],
  displayName: "Navbar",
  props: {
    className: { required: !1, tsType: { name: "string" }, description: "" },
    leftButton: {
      required: !1,
      tsType: { name: "ReactNode" },
      description: "",
    },
    rightButton: {
      required: !1,
      tsType: { name: "ReactNode" },
      description: "",
    },
    title: { required: !1, tsType: { name: "ReactNode" }, description: "" },
    htmlAttributes: {
      required: !1,
      tsType: {
        name: "intersection",
        raw: "HTMLAttributes<HTMLDivElement> & IExtendable",
        elements: [
          {
            name: "HTMLAttributes",
            elements: [{ name: "HTMLDivElement" }],
            raw: "HTMLAttributes<HTMLDivElement>",
          },
          { name: "IExtendable" },
        ],
      },
      description: "",
    },
  },
};
const j = {
    title: "Components/Navbar",
    component: f,
    parameters: { layout: "centered" },
    tags: ["autodocs"],
    argTypes: {},
    args: {
      title: e.createElement(
        N,
        { font: y.VERNADA, color: "#94f2f4" },
        "Home Page",
      ),
      leftButton: e.createElement(b, null, "$"),
      rightButton: e.createElement(b, null, "&"),
    },
  },
  w = {},
  z = { args: { htmlAttributes: { "data-gtm": "navbar-gtm-id" } } };
export { w as Default, z as WithHTMLAttributes, j as default };
