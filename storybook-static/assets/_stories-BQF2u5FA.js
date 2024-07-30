import "./_commonjsHelpers-BosuxZz1.js";
import { c as p } from "./clsx-B-dksMZM.js";
import { m } from "./index-BuVVN0YH.js";
import { r as c, R as t } from "./index-Cs7sjTYM.js";
import "./jsx-runtime-BlAj40OV.js";
import { p as b, c as o } from "./styled-components.browser.esm-CMQQUr34.js";

import { m } from "./index-BuVVN0YH.js";
import { c as p } from "./clsx-B-dksMZM.js";
import { p as b, c as o } from "./styled-components.browser.esm-CMQQUr34.js";
import "./_commonjsHelpers-BosuxZz1.js";
import "./jsx-runtime-BlAj40OV.js";
const l = { SMALL: "small", MEDIUM: "medium", LARGE: "large" },
  s = { OUTLINED: "outlined", CONTAINED: "contained", TEXT: "text" },
  E = (e) =>
    (e == null ? void 0 : e.$size) === l.SMALL
      ? o`
      height: 24px;
      padding: 0 16px;
    `
      : (e == null ? void 0 : e.$size) === l.MEDIUM
        ? o`
      height: 36px;
      padding: 0 20px;
    `
        : o`
    height: 48px;
    padding: 0 24px;
  `,
  y = (e) =>
    (e == null ? void 0 : e.$variant) === s.CONTAINED
      ? o`
      color: rgba(0, 0, 0, 0.87);
      background-color: rgb(144, 202, 249);
      border: 1px solid rgb(144, 202, 249);

      &:hover {
        background-color: rgb(66, 165, 245);
      }
    `
      : (e == null ? void 0 : e.$variant) === s.OUTLINED
        ? o`
      color: rgb(144, 202, 249);
      background-color: transparent;
      border: 1px solid rgba(144, 202, 249, 0.5);

      &:hover {
        background-color: rgba(144, 202, 249, 0.08);
        border: 1px solid rgb(144, 202, 249);
      }
    `
        : o`
    color: rgb(144, 202, 249);
    background-color: transparent;
    border: 1px solid transparent;

    &:hover {
      background-color: rgba(144, 202, 249, 0.08);
    }
  `,
  h = {
    Container: b.button`
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
    background-color: transparent;
    box-shadow: none;
    outline: none;
    overflow: hidden;
    border-radius: 4px;
    min-width: 64px;
    padding: 6px 12px;
    font-weight: 500;
    cursor: pointer;
    ${E};
    ${y};

    &:hover,
    &:focus {
      outline: 0;
      text-decoration: none;
    }
  `,
  },
  d = ({
    variant: e = s.TEXT,
    size: n = l.MEDIUM,
    loading: a = !1,
    loadingComponent: r,
    className: i,
    htmlAttributes: g,
    children: u,
    onClick: f,
  }) => {
    const T = c.useMemo(
      () => (a ? (r ?? t.createElement(m, { size: 16, fullScreen: !1 })) : u),
      [u, a, r],
    );
    return t.createElement(
      h.Container,
      {
        ...g,
        $variant: e,
        $size: n,
        onClick: f,
        className: p(
          "button",
          `button--size-${n}`,
          `button--variant-${e}`,
          a && "button--loading",
          i,
        ),
      },
      T,
    );
  };
d.__docgenInfo = {
  description: "",
  methods: [],
  displayName: "Button",
  props: {
    size: {
      required: !1,
      tsType: {
        name: "unknown[union]",
        raw: "(typeof BUTTON_SIZE)[keyof typeof BUTTON_SIZE]",
      },
      description: "",
      defaultValue: { value: '"medium"', computed: !1 },
    },
    variant: {
      required: !1,
      tsType: {
        name: "unknown[union]",
        raw: "(typeof BUTTON_VARIANT)[keyof typeof BUTTON_VARIANT]",
      },
      description: "",
      defaultValue: { value: '"text"', computed: !1 },
    },
    onClick: {
      required: !1,
      tsType: {
        name: "MouseEventHandler",
        elements: [{ name: "HTMLButtonElement" }],
        raw: "MouseEventHandler<HTMLButtonElement>",
      },
      description: "",
    },
    loading: {
      required: !1,
      tsType: { name: "boolean" },
      description: "",
      defaultValue: { value: "false", computed: !1 },
    },
    loadingComponent: {
      required: !1,
      tsType: { name: "ReactNode" },
      description: "",
    },
    className: { required: !1, tsType: { name: "string" }, description: "" },
    children: { required: !1, tsType: { name: "ReactNode" }, description: "" },
    htmlAttributes: {
      required: !1,
      tsType: {
        name: "intersection",
        raw: "ButtonHTMLAttributes<HTMLButtonElement> & IExtendable",
        elements: [
          {
            name: "ButtonHTMLAttributes",
            elements: [{ name: "HTMLButtonElement" }],
            raw: "ButtonHTMLAttributes<HTMLButtonElement>",
          },
          { name: "IExtendable" },
        ],
      },
      description: "",
    },
  },
};
const A = {
    title: "Components/Button",
    component: d,
    parameters: { layout: "centered" },
    tags: ["autodocs"],
    argTypes: {},
    args: {
      onClick: () => console.log("Click the button to perform action!"),
      children: "Click me!",
    },
  },
  B = {},
  k = { args: { variant: "contained" } },
  I = { args: { variant: "outlined" } },
  w = { args: { variant: "contained", size: "small" } },
  z = { args: { variant: "outlined", size: "medium" } },
  O = { args: { variant: "contained", size: "large" } },
  H = { args: { variant: "outlined", loading: !0 } },
  S = {
    args: {
      variant: "outlined",
      loading: !0,
      loadingComponent: t.createElement(m, { size: 6, fullScreen: !1 }),
    },
  },
  U = {
    args: {
      variant: "outlined",
      loading: !0,
      loadingComponent: t.createElement(t.Fragment, null, "..."),
    },
    render: function (n) {
      const [a, r] = c.useState(n.loadingComponent);
      return t.createElement(
        "div",
        { style: { display: "inline-flex", flexDirection: "column" } },
        t.createElement(d, { ...n, loadingComponent: a }),
        t.createElement(
          "button",
          {
            style: { marginTop: 48 },
            onClick: () => r((i) => (i ? null : n.loadingComponent)),
          },
          "Toggle show custom loading component",
        ),
        t.createElement(
          "p",
          { style: { color: "#ffffff" } },
          "Please note: To replicate this lazy behavior, comment out the CustomLoading story. Otherwise, the LoadingRipple will still load due to the definition of the CustomLoading story.",
        ),
      );
    },
  },
  R = { args: { htmlAttributes: { "data-gtm": "button-gtm-id" } } };
export {
  k as Contained,
  S as CustomLoading,
  B as Default,
  O as Large,
  U as LazyLoad,
  H as Loading,
  z as Medium,
  I as Outlined,
  w as Small,
  R as WithHTMLAttributes,
  A as default,
};
