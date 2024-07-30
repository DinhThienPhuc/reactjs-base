import "../sb-preview/runtime.js";
import "./_commonjsHelpers-BosuxZz1.js";
import { c as _ } from "./clsx-B-dksMZM.js";
import { _ as E } from "./iframe-CMcQjm1L.js";
import "./index-BPgfAmNW.js";
import { Icon as y } from "./index-BU_VM_pW.js";
import { r as a, R as l } from "./index-Cs7sjTYM.js";
import { N as U } from "./index-DJbV_2Cm.js";
import "./index-SJmvIjJq.js";
import { V as z } from "./index-ZNNDmq-k.js";
import { u as I, C as O } from "./index.esm-C-hvzvEL.js";
import "./jsx-runtime-BlAj40OV.js";
import { p as A, c as B } from "./styled-components.browser.esm-CMQQUr34.js";
import { a as H, c as N, o as w } from "./yup-BDbztMXE.js";

const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./index-D6xeodyY.js",
      "./jsx-runtime-BlAj40OV.js",
      "./index-Cs7sjTYM.js",
      "./_commonjsHelpers-BosuxZz1.js",
      "./clsx-B-dksMZM.js",
      "./styled-components.browser.esm-CMQQUr34.js",
      "./index-SJmvIjJq.js",
      "./index-CShRuexg.js",
      "./index-DnAsfXX-.js",
      "./index-BU_VM_pW.js",
      "./iframe-CMcQjm1L.js",
      "./index-BPgfAmNW.js",
      "./index-DJbV_2Cm.js",
      "./index-BYLch-sZ.js",
    ]),
) => i.map((i) => d[i]);
import { Icon as y } from "./index-BU_VM_pW.js";
import { _ as E } from "./iframe-CMcQjm1L.js";
import { c as _ } from "./clsx-B-dksMZM.js";
import { V as z } from "./index-ZNNDmq-k.js";
import { p as A, c as B } from "./styled-components.browser.esm-CMQQUr34.js";
import { N as U } from "./index-DJbV_2Cm.js";
import "./_commonjsHelpers-BosuxZz1.js";
import "./jsx-runtime-BlAj40OV.js";
import "./index-BPgfAmNW.js";
import "../sb-preview/runtime.js";
import "./index-SJmvIjJq.js";
const W = ({ onFocus: e, onBlur: t, focused: o = !1, disabled: n = !1 }) => {
    const [c, i] = a.useState(o),
      d = a.useCallback(
        (r) => {
          n || (e == null || e(r), i(!0));
        },
        [n, e],
      ),
      p = a.useCallback(
        (r) => {
          n || (t == null || t(r), i(!1));
        },
        [n, t],
      );
    return { captureOnFocus: d, captureOnBlur: p, isFocused: c };
  },
  M = W,
  $ = { OUTLINED: "outlined", FILLED: "filled", STANDARD: "standard" },
  X = (e) => {
    let t = 0,
      o = 0;
    const n = (e == null ? void 0 : e.$variant) === $.STANDARD ? 0 : 14;
    return (
      e != null && e.$hasPreAdorment ? (t = 32 + n) : (t = n),
      e != null && e.$hasPostAdorment ? (o = 32 + n) : (o = n),
      B`
    padding: 0px ${o}px 0px ${t}px;
  `
    );
  },
  F = {
    Container: A.div`
    transition: all 200ms ease-in-out;
    position: relative;
    width: ${({ $fullWidth: e }) => (e ? "100%" : "210px")};
    height: 56px;
    border-radius: 4px;
    ${U};
  `,
    Input: A.input`
    box-sizing: border-box;
    transition: all 200ms ease-in-out;
    width: 100%;
    margin-top: ${({ $hasLabel: e }) => (e ? "12px" : "0px")};
    height: ${({ $hasLabel: e }) => (e ? "44px" : "56px")};
    line-height: ${({ $hasLabel: e }) => (e ? "44px" : "56px")};
    background-color: transparent;
    color: #ffffff;
    border-radius: 4px;
    border: none;
    font-size: 16px;
    ${X};

    &:focus-visible {
      outline: none;
    }

    &:disabled {
      color: #ffffff80;
    }
  `,
  },
  j = a.lazy(() =>
    E(
      () => import("./index-D6xeodyY.js"),
      __vite__mapDeps([0, 1, 2, 3, 4, 5, 6]),
      import.meta.url,
    ).then((e) => ({ default: e.HelperText })),
  ),
  G = a.lazy(() =>
    E(
      () => import("./index-CShRuexg.js"),
      __vite__mapDeps([7, 1, 2, 3, 4, 5, 6]),
      import.meta.url,
    ).then((e) => ({ default: e.Label })),
  ),
  J = a.lazy(() =>
    E(
      () => import("./index-DnAsfXX-.js"),
      __vite__mapDeps([8, 1, 2, 3, 4, 9, 10, 11, 5, 12, 6]),
      import.meta.url,
    ).then((e) => ({ default: e.PostAdorment })),
  ),
  K = a.lazy(() =>
    E(
      () => import("./index-BYLch-sZ.js"),
      __vite__mapDeps([13, 1, 2, 3, 4, 5]),
      import.meta.url,
    ).then((e) => ({ default: e.PreAdorment })),
  ),
  v = a.forwardRef(
    (
      {
        value: e = "",
        variant: t = $.STANDARD,
        onChange: o,
        onFocus: n,
        onBlur: c,
        clear: i,
        htmlAttributes: d,
        inputHtmlAttributes: p,
        labelProps: r,
        preAdormentProps: s,
        postAdormentProps: m,
        helperTextProps: f,
        className: T = "",
        fullWidth: u = !1,
        disabled: x = !1,
        required: g = !1,
        error: h = null,
        isStandalone: L = !1,
      },
      P,
    ) => {
      const { currentValue: S, setCurrentValue: V } = z(e, L),
        {
          captureOnFocus: D,
          captureOnBlur: R,
          isFocused: b,
        } = M({ onFocus: n, onBlur: c }),
        k = !!(b || (s != null && s.children) || S),
        q = (C) => {
          o == null || o(C), V(C.target.value);
        };
      return l.createElement(
        F.Container,
        {
          ...d,
          $fullWidth: u,
          $variant: t,
          $disabled: x,
          className: _(
            "text-field",
            u && "text-field--fullwidth",
            g && "text-field--required",
            x && "text-field--disabled",
            h && "text-field--error",
            `text-field--variant-${t}`,
            T,
          ),
        },
        l.createElement(
          a.Suspense,
          null,
          !!(r != null && r.children) &&
            l.createElement(G, {
              ...r,
              variant: t,
              disabled: x,
              required: g,
              isLabelCollapsed: k,
              isFocused: b,
              isError: !!h,
            }),
        ),
        l.createElement(
          a.Suspense,
          null,
          !!(s != null && s.children) &&
            l.createElement(K, {
              ...s,
              hasLabel: !!(r != null && r.children),
              variant: t,
            }),
        ),
        l.createElement(F.Input, {
          ...p,
          $variant: t,
          $hasPreAdorment: !!(s != null && s.children),
          $hasPostAdorment: !!i || !!(m != null && m.children),
          $hasLabel: !!(r != null && r.children),
          ref: P,
          value: S,
          disabled: x,
          required: g,
          onChange: q,
          onFocus: D,
          onBlur: R,
          className: _(
            "text-field-input",
            `text-field-input--variant-${t}`,
            x && "text-field-input--disabled",
            g && "text-field-input--required",
          ),
        }),
        l.createElement(
          a.Suspense,
          null,
          !!(m != null && m.children) &&
            l.createElement(J, { ...m, clear: i, variant: t }),
        ),
        l.createElement(
          a.Suspense,
          null,
          (f == null ? void 0 : f.children) &&
            l.createElement(
              j,
              { ...f, isError: !!h, variant: t },
              (h == null ? void 0 : h.message) ??
                (f == null ? void 0 : f.children) ??
                "",
            ),
        ),
      );
    },
  );
v.displayName = "TextField";
v.__docgenInfo = {
  description: "",
  methods: [],
  displayName: "TextField",
  props: {
    value: { defaultValue: { value: '""', computed: !1 }, required: !1 },
    variant: {
      defaultValue: { value: '"standard"', computed: !1 },
      required: !1,
    },
    className: { defaultValue: { value: '""', computed: !1 }, required: !1 },
    fullWidth: { defaultValue: { value: "false", computed: !1 }, required: !1 },
    disabled: { defaultValue: { value: "false", computed: !1 }, required: !1 },
    required: { defaultValue: { value: "false", computed: !1 }, required: !1 },
    error: { defaultValue: { value: "null", computed: !1 }, required: !1 },
    isStandalone: {
      defaultValue: { value: "false", computed: !1 },
      required: !1,
    },
  },
};
const ce = {
    title: "Components/Text Field",
    component: v,
    parameters: { layout: "centered" },
    tags: ["autodocs"],
    argTypes: {},
    args: {
      labelProps: { children: "Username" },
      preAdormentProps: {
        children: l.createElement(y, { name: "anchor", color: "#ffffff" }),
      },
      postAdormentProps: {
        children: l.createElement(y, { name: "info", color: "#ffffff" }),
      },
      helperTextProps: { children: "This is a text field" },
    },
  },
  me = {
    args: {
      isStandalone: !0,
      labelProps: void 0,
      preAdormentProps: void 0,
      postAdormentProps: void 0,
      helperTextProps: void 0,
    },
  },
  fe = {
    args: {
      isStandalone: !0,
      variant: "outlined",
      labelProps: void 0,
      preAdormentProps: void 0,
      postAdormentProps: void 0,
      helperTextProps: void 0,
    },
  },
  pe = {
    args: {
      isStandalone: !0,
      variant: "filled",
      labelProps: void 0,
      preAdormentProps: void 0,
      postAdormentProps: void 0,
      helperTextProps: void 0,
    },
  },
  ve = {
    args: {
      variant: "outlined",
      fullWidth: !0,
      labelProps: void 0,
      preAdormentProps: void 0,
      postAdormentProps: void 0,
      helperTextProps: void 0,
      isStandalone: !0,
    },
  },
  he = {
    args: {
      variant: "filled",
      required: !0,
      labelProps: void 0,
      preAdormentProps: void 0,
      postAdormentProps: void 0,
      helperTextProps: void 0,
      isStandalone: !0,
    },
  },
  xe = {
    args: {
      preAdormentProps: void 0,
      postAdormentProps: void 0,
      helperTextProps: void 0,
      isStandalone: !0,
    },
  },
  ge = {
    args: {
      variant: "outlined",
      preAdormentProps: void 0,
      postAdormentProps: void 0,
      helperTextProps: void 0,
      isStandalone: !0,
    },
  },
  Ee = {
    args: {
      variant: "filled",
      preAdormentProps: void 0,
      postAdormentProps: void 0,
      helperTextProps: void 0,
      isStandalone: !0,
    },
  },
  Te = {
    args: {
      variant: "outlined",
      postAdormentProps: void 0,
      helperTextProps: void 0,
      isStandalone: !0,
    },
  },
  Se = {
    args: {
      variant: "outlined",
      preAdormentProps: void 0,
      helperTextProps: void 0,
      isStandalone: !0,
    },
  },
  be = { args: { isStandalone: !0 } },
  Ce = { args: { variant: "outlined", isStandalone: !0 } },
  ye = { args: { variant: "filled", isStandalone: !0 } },
  _e = {
    args: {},
    render: function (t) {
      const [o, n] = a.useState(""),
        c = a.useCallback((d) => {
          n(d.target.value);
        }, []),
        i = a.useCallback(
          (d) => () => {
            n(d);
          },
          [],
        );
      return l.createElement(
        "div",
        { style: { display: "inline-flex", flexDirection: "column" } },
        l.createElement(v, { ...t, value: o, onChange: c }),
        l.createElement(
          "button",
          { style: { marginTop: 48 }, onClick: i("Text first or init") },
          "Update text 1",
        ),
        l.createElement(
          "button",
          { style: { marginTop: 48 }, onClick: i("Text 2") },
          "Update text 2",
        ),
      );
    },
  },
  Ae = {
    args: {},
    render: function (t) {
      const [o, n] = a.useState(""),
        c = a.useCallback((i) => {
          n(i.target.value);
        }, []);
      return l.createElement(v, { ...t, value: o, onChange: c });
    },
  },
  Fe = {
    args: { clear: () => "" },
    render: function (t) {
      const o = a.useMemo(
          () =>
            N({
              textField: H()
                .required("This field is required!")
                .min(10, "Text must be greater than 10 characters"),
            }).required(),
          [],
        ),
        { handleSubmit: n, control: c } = I({
          resolver: w(o),
          defaultValues: { textField: "" },
        }),
        i = (d) => {
          console.log("RHFController form data: ", d);
        };
      return l.createElement(
        "form",
        {
          style: { display: "inline-flex", flexDirection: "column" },
          onSubmit: n(i),
        },
        l.createElement(O, {
          control: c,
          name: "textField",
          render: ({ field: d, formState: { errors: p } }) =>
            l.createElement(v, { ...t, ...d, error: p.textField }),
        }),
        l.createElement("input", { type: "submit", style: { marginTop: 48 } }),
      );
    },
  },
  $e = {
    render: function (t) {
      const [o, n] = a.useState(void 0),
        [c, i] = a.useState(void 0),
        [d, p] = a.useState(void 0),
        [r, s] = a.useState(void 0),
        [m, f] = a.useState(""),
        T = a.useCallback((u) => {
          f(u.target.value);
        }, []);
      return l.createElement(
        "div",
        { style: { display: "inline-flex", flexDirection: "column" } },
        l.createElement(v, {
          ...t,
          labelProps: o,
          preAdormentProps: c,
          postAdormentProps: d,
          helperTextProps: r,
          value: m,
          onChange: T,
        }),
        l.createElement(
          "button",
          {
            style: { marginTop: 48 },
            onClick: () => n((u) => (u ? void 0 : t.labelProps)),
          },
          "Toggle show label",
        ),
        l.createElement(
          "button",
          {
            style: { marginTop: 48 },
            onClick: () => i((u) => (u ? void 0 : t.preAdormentProps)),
          },
          "Toggle show pre adorment",
        ),
        l.createElement(
          "button",
          {
            style: { marginTop: 48 },
            onClick: () => p((u) => (u ? void 0 : t.postAdormentProps)),
          },
          "Toggle show post adorment",
        ),
        l.createElement(
          "button",
          {
            style: { marginTop: 48 },
            onClick: () => s((u) => (u ? void 0 : t.helperTextProps)),
          },
          "Toggle show helper text",
        ),
      );
    },
  },
  Le = {
    args: {
      htmlAttributes: { "data-gtm": "text-field-gtm-id" },
      inputHtmlAttributes: { "data-gtm": "text-field-input-gtm-id" },
    },
  };
export {
  Se as CustomPostAdorment,
  Te as CustomPreAdorment,
  me as Default,
  pe as Filled,
  ve as FullWidth,
  be as HelperTextDefault,
  ye as HelperTextFilled,
  Ce as HelperTextOutlined,
  xe as LabeledDefault,
  Ee as LabeledFilled,
  ge as LabeledOutlined,
  $e as LazyLoad,
  fe as Outlined,
  _e as ParentController,
  Ae as PropsController,
  Fe as RHFController,
  he as Required,
  Le as WithHTMLAttributes,
  ce as default,
};
