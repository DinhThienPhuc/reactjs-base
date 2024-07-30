import "./_commonjsHelpers-BosuxZz1.js";
import { c as d } from "./clsx-B-dksMZM.js";
import { R as g, r as y } from "./index-Cs7sjTYM.js";
import { S as $, u as T } from "./index-DJbV_2Cm.js";
import "./index-SJmvIjJq.js";
import { p as e, c as h } from "./styled-components.browser.esm-CMQQUr34.js";

import { S as $, u as T } from "./index-DJbV_2Cm.js";
import "./_commonjsHelpers-BosuxZz1.js";
import "./index-SJmvIjJq.js";
const t = ({ $size: r, $color: s, $bold: a, $font: o, $align: n }) => h`
    transition: inherit;
    font-size: ${typeof r == "number" ? `${r}px` : r};
    font-weight: ${a};
    color: ${s};
    font-family: ${o};
    text-align: ${n};
  `,
  b = {
    H1: e.h1`
    ${t};
  `,
    H2: e.h2`
    ${t};
  `,
    H3: e.h3`
    ${t};
  `,
    H4: e.h4`
    ${t};
  `,
    H5: e.h5`
    ${t};
  `,
    H6: e.h6`
    ${t};
  `,
    Span: e.span`
    ${t};
  `,
    Caption: e.caption`
    ${t};
  `,
    Button: e.button`
    ${t};
    ${$};
    padding: 0;
  `,
    A: e.a`
    ${t};
    cursor: pointer;
    text-decoration-line: none;
  `,
    P: e.p`
    ${t};
    margin-block: 0;
  `,
  },
  p = ({
    variant: r = "span",
    children: s,
    size: a = "inherit",
    bold: o = 400,
    color: n = "inherit",
    font: i = "inherit",
    className: f = "",
    align: l = "inherit",
    htmlAttributes: c,
  }) => {
    const u = y.useMemo(() => {
      const m = T(r);
      return b[m];
    }, [r]);
    return g.createElement(
      u,
      {
        ...c,
        $size: a,
        $color: n,
        $bold: o,
        $font: i,
        $align: l,
        className: d(
          "typography",
          `typography__variant--${r}`,
          `typography__size--${a}`,
          `typography__bold--${o}`,
          `typography__color--${n}`,
          `typography__font--${i}`,
          `typography__align--${l}`,
          f,
        ),
      },
      s,
    );
  };
p.__docgenInfo = {
  description: "",
  methods: [],
  displayName: "Typography",
  props: {
    variant: {
      required: !1,
      tsType: { name: "JSX.IntrinsicElements" },
      description: "",
      defaultValue: { value: '"span"', computed: !1 },
    },
    children: { required: !1, tsType: { name: "ReactNode" }, description: "" },
    size: {
      required: !1,
      tsType: {
        name: "union",
        raw: "number | string",
        elements: [{ name: "number" }, { name: "string" }],
      },
      description: "",
      defaultValue: { value: '"inherit"', computed: !1 },
    },
    bold: {
      required: !1,
      tsType: { name: "number" },
      description: "",
      defaultValue: { value: "400", computed: !1 },
    },
    color: {
      required: !1,
      tsType: { name: "string" },
      description: "",
      defaultValue: { value: '"inherit"', computed: !1 },
    },
    font: {
      required: !1,
      tsType: { name: "string" },
      description: "",
      defaultValue: { value: '"inherit"', computed: !1 },
    },
    className: {
      required: !1,
      tsType: { name: "string" },
      description: "",
      defaultValue: { value: '""', computed: !1 },
    },
    align: {
      required: !1,
      tsType: { name: "Property.TextAlign" },
      description: "",
      defaultValue: { value: '"inherit"', computed: !1 },
    },
    htmlAttributes: {
      required: !1,
      tsType: {
        name: "intersection",
        raw: "HTMLAttributes<HTMLElement> & IExtendable",
        elements: [
          {
            name: "HTMLAttributes",
            elements: [{ name: "HTMLElement" }],
            raw: "HTMLAttributes<HTMLElement>",
          },
          { name: "IExtendable" },
        ],
      },
      description: "",
    },
  },
};
const M = {
    title: "Components/Typography",
    component: p,
    parameters: { layout: "centered" },
    tags: ["autodocs"],
    argTypes: {},
    args: { children: "Hello World", color: "#ffffff" },
  },
  C = {},
  E = { args: { color: "#c5cbce" } },
  V = { args: { color: "#ffffff", size: 24 } },
  L = { args: { color: "#ffffff", bold: 700 } },
  S = { args: { color: "#ffffff", bold: 700, variant: "p" } },
  w = { args: { color: "#ffffff", font: "Arial, Helvetica, sans-serif" } },
  I = { args: { htmlAttributes: { "data-gtm": "test" } } };
export {
  L as CustomBold,
  E as CustomColor,
  w as CustomFontText,
  V as CustomSize,
  S as CustomVariant,
  C as Default,
  I as WithHTMLAttributes,
  M as default,
};
