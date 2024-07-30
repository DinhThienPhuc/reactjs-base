import "./_commonjsHelpers-BosuxZz1.js";
import { c as x } from "./clsx-B-dksMZM.js";
import { R as g, r as y } from "./index-Cs7sjTYM.js";
import { u as $ } from "./index-DJbV_2Cm.js";
import "./index-SJmvIjJq.js";
import { c as T, p as l } from "./styled-components.browser.esm-CMQQUr34.js";

import { u as $ } from "./index-DJbV_2Cm.js";
import "./_commonjsHelpers-BosuxZz1.js";
import "./index-SJmvIjJq.js";
const p = ({
    $alignItems: r,
    $justifyContent: o,
    $flexDirection: t,
    $gap: n,
    $wrap: s,
    $fullWidth: e,
  }) => T`
    display: flex;
    justify-content: ${o};
    align-items: ${r};
    flex-direction: ${t};
    gap: ${n};
    flex-wrap: ${s};
    width: ${e ? "100%" : "auto"};
  `,
  b = {
    Div: l.div`
    ${p};
  `,
    Span: l.span`
    ${p};
  `,
  },
  d = ({
    children: r,
    className: o,
    flexDirection: t = "row",
    alignItems: n = "center",
    justifyContent: s = "center",
    variant: e = "div",
    gap: i = "0px",
    wrap: a = "nowrap",
    fullWidth: c = !1,
    htmlAttributes: f,
  }) => {
    const m = y.useMemo(() => {
      const u = $(e);
      return b[u];
    }, [e]);
    return g.createElement(
      m,
      {
        ...f,
        $flexDirection: t,
        $alignItems: n,
        $justifyContent: s,
        $gap: i,
        $wrap: a,
        $fullWidth: c,
        className: x(
          "flex-box",
          `flex-box--direction-${t}`,
          `flex-box--alignItems-${n}`,
          `flex-box--justifyContent-${s}`,
          `flex-box--gap-${i}`,
          `flex-box--wrap-${a}`,
          `flex-box--variant-${e}`,
          o,
        ),
      },
      r,
    );
  };
d.__docgenInfo = {
  description: "",
  methods: [],
  displayName: "FlexBox",
  props: {
    alignItems: {
      required: !1,
      tsType: { name: "Property.AlignItems" },
      description: "",
      defaultValue: { value: '"center"', computed: !1 },
    },
    justifyContent: {
      required: !1,
      tsType: { name: "Property.JustifyContent" },
      description: "",
      defaultValue: { value: '"center"', computed: !1 },
    },
    flexDirection: {
      required: !1,
      tsType: { name: "Property.FlexDirection" },
      description: "",
      defaultValue: { value: '"row"', computed: !1 },
    },
    variant: {
      required: !1,
      tsType: { name: "JSX.IntrinsicElements" },
      description: "",
      defaultValue: { value: '"div"', computed: !1 },
    },
    gap: {
      required: !1,
      tsType: { name: "Property.Gap" },
      description: "",
      defaultValue: { value: '"0px"', computed: !1 },
    },
    wrap: {
      required: !1,
      tsType: { name: "Property.FlexWrap" },
      description: "",
      defaultValue: { value: '"nowrap"', computed: !1 },
    },
    fullWidth: {
      required: !1,
      tsType: { name: "boolean" },
      description: "",
      defaultValue: { value: "false", computed: !1 },
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
    children: { required: !1, tsType: { name: "ReactNode" }, description: "" },
    className: { required: !1, tsType: { name: "string" }, description: "" },
  },
};
const C = {
    title: "Components/Flex Box",
    component: d,
    parameters: { layout: "centered" },
    tags: ["autodocs"],
    argTypes: {
      alignItems: {
        control: {
          type: "select",
          options: ["flex-start", "center", "flex-end"],
        },
        description: "Align items in the cross-axis",
      },
      justifyContent: {
        control: {
          type: "select",
          options: ["flex-start", "center", "flex-end"],
        },
        description: "Align items in the main-axis",
      },
      flexDirection: {
        control: { type: "select", options: ["row", "column"] },
        description: "Direction of the flex items",
      },
      variant: {
        control: { type: "select", options: ["div", "span"] },
        description: "HTML tag to render",
      },
      children: { description: "Content to render" },
    },
    args: {
      children: "Content",
      htmlAttributes: {
        style: {
          width: 600,
          height: 360,
          border: "1px solid green",
          color: "#ffffff",
          padding: 24,
        },
      },
    },
  },
  E = {},
  M = { args: { justifyContent: "flex-start" } },
  H = { args: { justifyContent: "flex-end" } },
  L = { args: { alignItems: "flex-start" } },
  V = { args: { alignItems: "flex-end" } },
  j = { args: { htmlAttributes: { "data-gtm": "flex-box-id-gtm" } } };
export {
  V as BottomAlign,
  E as Default,
  H as EndAlign,
  M as StartAlign,
  L as TopAlign,
  j as WithHTMLAttributes,
  C as default,
};
