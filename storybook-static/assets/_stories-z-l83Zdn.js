import { c as L } from "./clsx-B-dksMZM.js";
import { _ as C } from "./iframe-CMcQjm1L.js";
import { r as a, R as t } from "./index-Cs7sjTYM.js";
import { t as k } from "./index-SJmvIjJq.js";
import { V as T } from "./index-ZNNDmq-k.js";
import { C as O, u as R } from "./index.esm-C-hvzvEL.js";
import { c as b, p } from "./styled-components.browser.esm-CMQQUr34.js";

const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./_left-label-B1YzAbsd.js",
      "./clsx-B-dksMZM.js",
      "./index-Cs7sjTYM.js",
      "./_commonjsHelpers-BosuxZz1.js",
      "./index.esm-C-hvzvEL.js",
      "./iframe-CMcQjm1L.js",
      "./index-ZNNDmq-k.js",
      "./styled-components.browser.esm-CMQQUr34.js",
      "./index-SJmvIjJq.js",
      "./_right-label-hQaXSIeu.js",
    ]),
) => i.map((i) => d[i]);
import { _ as C } from "./iframe-CMcQjm1L.js";
import { c as L } from "./clsx-B-dksMZM.js";
import { V as T } from "./index-ZNNDmq-k.js";
import { p, c as b } from "./styled-components.browser.esm-CMQQUr34.js";
import { t as k } from "./index-SJmvIjJq.js";
const S = ({ $disabled: e }) =>
    e
      ? b`
      opacity: 0.5;
      cursor: not-allowed;
    `
      : b`
    opacity: 1;
  `,
  y = ({ $disabled: e }) => b`
    color: ${e ? "#ffffff80" : "#ffffff"};
    font-size: 16px;
    font-family: ${k.VERNADA};
  `,
  w = {
    Container: p.div`
    display: inline-flex;
    align-items: center;
  `,
    Pad: p.div`
    position: relative;
    transition: all 200ms ease-in-out;
    width: 34px;
    height: 14px;
    border-radius: 7px;
    background-color: ${({ $isOn: e, $disabled: l }) => (l ? (e ? "rgb(144, 202, 249, 0.2)" : "rgb(255, 255, 255, 0.2)") : e ? "rgb(144, 202, 249, 0.5)" : "rgb(255, 255, 255, 0.5)")};

    &::after {
      position: absolute;
      pointer-events: none;
      transition: all 200ms ease-in-out;
      content: "";
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: ${({ $isOn: e, $disabled: l }) => (l ? (e ? "rgb(64, 90, 112)" : "rgb(117, 117, 117)") : e ? "rgb(144, 202, 249)" : "rgb(224, 224, 224)")};
      transform: ${({ $isOn: e }) => (e ? "translate(17px, -3px)" : "translate(-3px, -3px)")};
    }

    & > input {
      position: absolute;
      height: 20px;
      width: 34px;
      top: -3px;
      opacity: 0;
      cursor: ${({ $disabled: e }) => (e ? "not-allowed" : "pointer")};
    }
  `,
    LeftLabel: p.span`
    margin-right: 8px;
    ${y};
    ${S};
  `,
    RightLabel: p.span`
    margin-left: 8px;
    ${y};
    ${S};
  `,
  },
  V = a.lazy(() =>
    C(
      () => import("./_left-label-B1YzAbsd.js"),
      __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8]),
      import.meta.url,
    ).then((e) => ({ default: e.SwitchLabelLeft })),
  ),
  A = a.lazy(() =>
    C(
      () => import("./_right-label-hQaXSIeu.js"),
      __vite__mapDeps([9, 1, 2, 3, 4, 5, 6, 7, 8]),
      import.meta.url,
    ).then((e) => ({ default: e.SwitchLabelRight })),
  ),
  f = a.forwardRef(
    (
      {
        value: e = !1,
        leftLabel: l = "",
        rightLabel: n = "",
        htmlAttributes: s,
        inputHtmlAttributes: i,
        leftHtmlAttributes: o,
        rightHtmlAttributes: m,
        onChange: u,
        className: d = "",
        disabled: r = !1,
        required: c = !1,
        isStandalone: E = !1,
      },
      x,
    ) => {
      const { currentValue: g, setCurrentValue: v } = T(e, E),
        _ = (h) => {
          v(h.target.checked), u == null || u(h.target.checked, h);
        };
      return t.createElement(
        w.Container,
        { ...s, className: L("switch", d) },
        t.createElement(
          a.Suspense,
          null,
          !!l &&
            t.createElement(V, {
              htmlAttributes: o,
              leftLabel: l,
              disabled: r,
            }),
        ),
        t.createElement(
          w.Pad,
          {
            $isOn: g,
            $disabled: r,
            className: L(
              "switch-pad",
              g && "switch-pad--on",
              r && "switch-pad--disabled",
            ),
          },
          t.createElement("input", {
            ...i,
            ref: x,
            checked: g,
            onChange: _,
            disabled: r,
            type: "checkbox",
            required: c,
          }),
        ),
        t.createElement(
          a.Suspense,
          null,
          !!n &&
            t.createElement(A, {
              htmlAttributes: m,
              rightLabel: n,
              disabled: r,
            }),
        ),
      );
    },
  );
f.displayName = "Switch";
f.__docgenInfo = {
  description: "",
  methods: [],
  displayName: "Switch",
  props: {
    value: { defaultValue: { value: "false", computed: !1 }, required: !1 },
    leftLabel: { defaultValue: { value: '""', computed: !1 }, required: !1 },
    rightLabel: { defaultValue: { value: '""', computed: !1 }, required: !1 },
    className: { defaultValue: { value: '""', computed: !1 }, required: !1 },
    disabled: { defaultValue: { value: "false", computed: !1 }, required: !1 },
    required: { defaultValue: { value: "false", computed: !1 }, required: !1 },
    isStandalone: {
      defaultValue: { value: "false", computed: !1 },
      required: !1,
    },
  },
};
const P = {
    title: "Components/Switch",
    component: f,
    parameters: { layout: "centered" },
    tags: ["autodocs"],
    argTypes: {},
    args: {},
  },
  $ = { args: { isStandalone: !0 } },
  q = { args: { leftLabel: "Off", rightLabel: "On", isStandalone: !0 } },
  D = { args: { disabled: !0, isStandalone: !0 } },
  H = {
    args: { leftLabel: "", rightLabel: "" },
    render: function (l) {
      const [n, s] = a.useState(!0),
        [i, o] = a.useState(""),
        [m, u] = a.useState(""),
        d = a.useCallback((c) => {
          s(c);
        }, []),
        r = a.useCallback(() => {
          s((c) => !c);
        }, []);
      return (
        console.log("ParentController: ", n),
        t.createElement(
          "div",
          { style: { display: "inline-flex", flexDirection: "column" } },
          t.createElement(f, {
            ...l,
            leftLabel: i,
            rightLabel: m,
            value: n,
            onChange: d,
          }),
          t.createElement(
            "button",
            { style: { marginTop: 48 }, onClick: r },
            "Toggle switch",
          ),
          t.createElement(
            "button",
            {
              style: { marginTop: 48 },
              onClick: () => o((c) => (c ? "" : "Off")),
            },
            "Toggle left label",
          ),
          t.createElement(
            "button",
            {
              style: { marginTop: 48 },
              onClick: () => u((c) => (c ? "" : "On")),
            },
            "Toggle right label",
          ),
        )
      );
    },
  },
  N = {
    args: { leftLabel: "Off", rightLabel: "On" },
    render: function (l) {
      const [n, s] = a.useState(!1),
        i = a.useCallback((o) => {
          s(o);
        }, []);
      return (
        console.log("PropsController", n),
        t.createElement(f, { ...l, value: n, onChange: i })
      );
    },
  },
  z = {
    args: { leftLabel: "Off", rightLabel: "On" },
    render: function (l) {
      const { handleSubmit: n, control: s } = R({
          defaultValues: { switch: !1 },
        }),
        i = (o) => {
          console.log("RHFController form data: ", o);
        };
      return t.createElement(
        "form",
        {
          style: { display: "inline-flex", flexDirection: "column" },
          onSubmit: n(i),
        },
        t.createElement(O, {
          control: s,
          name: "switch",
          render: ({ field: o }) => t.createElement(f, { ...l, ...o }),
        }),
        t.createElement("input", { type: "submit", style: { marginTop: 24 } }),
      );
    },
  },
  F = {
    render: function (l) {
      const [n, s] = a.useState(""),
        [i, o] = a.useState(""),
        [m, u] = a.useState(!1),
        d = a.useCallback((r) => {
          u(r);
        }, []);
      return t.createElement(
        "div",
        { style: { display: "inline-flex", flexDirection: "column" } },
        t.createElement(f, {
          ...l,
          value: m,
          onChange: d,
          rightLabel: i,
          leftLabel: n,
        }),
        t.createElement(
          "button",
          {
            style: { marginTop: 48 },
            onClick: () => s((r) => (r ? "" : "Left label")),
          },
          "Toggle show left label",
        ),
        t.createElement(
          "button",
          {
            style: { marginTop: 48 },
            onClick: () => o((r) => (r ? "" : "Right label")),
          },
          "Toggle show right label",
        ),
      );
    },
  },
  I = {
    args: {
      htmlAttributes: { "data-gtm": "switch-container-gtm" },
      inputHtmlAttributes: { "data-gtm": "switch-input-gtm" },
      leftHtmlAttributes: { "data-gtm": "switch-left-gtm" },
      rightHtmlAttributes: { "data-gtm": "switch-right-gtm" },
      leftLabel: "Off",
      rightLabel: "On",
      isStandalone: !0,
    },
  },
  Q = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        CustomLabel: q,
        Default: $,
        Disabled: D,
        LazyLoad: F,
        ParentController: H,
        PropsController: N,
        RHFController: z,
        WithHTMLAttributes: I,
        default: P,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  );
export { w as S, Q as _ };
