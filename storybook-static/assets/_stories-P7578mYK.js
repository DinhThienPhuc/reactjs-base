import { c as x } from "./clsx-B-dksMZM.js";
import { _ as A } from "./iframe-CMcQjm1L.js";
import { v as S } from "./index-BeZz0cvy.js";
import { r, R as t } from "./index-Cs7sjTYM.js";
import { g as M } from "./index-DJbV_2Cm.js";
import { t as E } from "./index-SJmvIjJq.js";
import { V as w } from "./index-ZNNDmq-k.js";
import { C as R, u as T } from "./index.esm-C-hvzvEL.js";
import { p } from "./styled-components.browser.esm-CMQQUr34.js";
import { c as O, o as _, a as k } from "./yup-BDbztMXE.js";

const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./_label-CrpIazCf.js",
      "./clsx-B-dksMZM.js",
      "./index-Cs7sjTYM.js",
      "./_commonjsHelpers-BosuxZz1.js",
      "./index.esm-C-hvzvEL.js",
      "./yup-BDbztMXE.js",
      "./iframe-CMcQjm1L.js",
      "./index-BeZz0cvy.js",
      "./jsx-runtime-BlAj40OV.js",
      "./styled-components.browser.esm-CMQQUr34.js",
      "./index-DJbV_2Cm.js",
      "./index-SJmvIjJq.js",
      "./index-ZNNDmq-k.js",
    ]),
) => i.map((i) => d[i]);
import { _ as A } from "./iframe-CMcQjm1L.js";
import { c as x } from "./clsx-B-dksMZM.js";
import { v as S } from "./index-BeZz0cvy.js";
import { V as w } from "./index-ZNNDmq-k.js";
import { p } from "./styled-components.browser.esm-CMQQUr34.js";
import { t as E } from "./index-SJmvIjJq.js";
import { g as M } from "./index-DJbV_2Cm.js";
const L = { COLUMN: "column", ROW: "row" },
  f = {
    Container: p.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
  `,
    Label: p.span`
    transition: color 200ms ease-in-out;
    color: ${({ $hasValue: a }) => (a ? "#90caf9" : "#ffffffb3")};
    font-size: 16px;
    font-family: ${E.VERNADA};
  `,
    OptionLabel: p.label`
    display: flex;
    align-items: center;
    gap: 12px;
    cursor: pointer;
  `,
    OptionInput: p.input`
    appearance: none;
    width: 16px;
    height: 16px;
    border: 2px solid #90caf9;
    border-radius: 50%;

    &::before {
      transition: transform 200ms ease-in-out;
      content: "";
      display: block;
      margin-top: 2px;
      margin-left: 2px;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: #90caf9;
      transform: scale(0);
    }

    &:checked::before {
      transform: scale(1);
    }

    &[type="radio" i] {
      margin: 0;
    }
  `,
    OptionLabelText: p.span`
    font-family: ${E.VERNADA};
    font-size: 16px;
    color: #ffffff;
  `,
  },
  y = r.memo(
    ({
      label: a,
      value: e,
      name: n,
      htmlAttributes: l,
      isStandalone: i,
      currentValue: s,
      setCurrentValue: o,
      onChange: u,
    }) => {
      const d = i ? void 0 : s === e,
        b = r.useCallback(
          (v) => {
            u == null || u(v), o == null || o(e);
          },
          [u, o, e],
        ),
        g = r.useMemo(
          () =>
            t.createElement(
              f.OptionLabelText,
              { className: "radio-group-option-label" },
              a,
            ),
          [a],
        );
      return t.createElement(
        f.OptionLabel,
        { ...l, className: "radio-group-option" },
        t.createElement(f.OptionInput, {
          className: x(
            "radio-group-option-input",
            d ? "radio-group-option-input--checked" : "",
          ),
          name: n,
          type: "radio",
          value: e,
          checked: d,
          onChange: b,
        }),
        g,
      );
    },
    M(["currentValue"], (a, e, n) => {
      switch (a) {
        case "currentValue":
          return (n.currentValue === n.value) == (e.currentValue === e.value);
        default:
          return;
      }
    }),
  );
y.displayName = "RadioGroupOption";
y.__docgenInfo = {
  description: "",
  methods: [],
  displayName: "RadioGroupOption",
  props: {
    key: { required: !0, tsType: { name: "string" }, description: "" },
    value: { required: !0, tsType: { name: "string" }, description: "" },
    label: { required: !1, tsType: { name: "string" }, description: "" },
    htmlAttributes: {
      required: !1,
      tsType: {
        name: "intersection",
        raw: "LabelHTMLAttributes<HTMLLabelElement> & IExtendable",
        elements: [
          {
            name: "LabelHTMLAttributes",
            elements: [{ name: "HTMLLabelElement" }],
            raw: "LabelHTMLAttributes<HTMLLabelElement>",
          },
          { name: "IExtendable" },
        ],
      },
      description: "",
    },
    name: { required: !0, tsType: { name: "string" }, description: "" },
    currentValue: { required: !1, tsType: { name: "string" }, description: "" },
    setCurrentValue: {
      required: !1,
      tsType: {
        name: "signature",
        type: "function",
        raw: "(value: string) => void",
        signature: {
          arguments: [{ type: { name: "string" }, name: "value" }],
          return: { name: "void" },
        },
      },
      description: "",
    },
    onChange: {
      required: !1,
      tsType: {
        name: "signature",
        type: "function",
        raw: "(e: ChangeEvent<HTMLInputElement>) => void",
        signature: {
          arguments: [
            {
              type: {
                name: "ChangeEvent",
                elements: [{ name: "HTMLInputElement" }],
                raw: "ChangeEvent<HTMLInputElement>",
              },
              name: "e",
            },
          ],
          return: { name: "void" },
        },
      },
      description: "",
    },
  },
  composes: ["ISyncStateWithProps"],
};
const N = r.lazy(() =>
    A(
      () => import("./_label-CrpIazCf.js"),
      __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
      import.meta.url,
    ).then((a) => ({ default: a.RadioGroupLabel })),
  ),
  c = r.forwardRef(
    (
      {
        options: a,
        className: e,
        name: n,
        value: l = "",
        label: i = "",
        onChange: s,
        isStandalone: o = !1,
        direction: u = L.COLUMN,
        htmlAttributes: d,
        labelHtmlAttributes: b,
        optionHtmlAttributes: g,
      },
      v,
    ) => {
      const { currentValue: h, setCurrentValue: C } = w(l, o);
      return t.createElement(
        f.Container,
        { ...d, className: x("radio-group", e), "data-testid": "radio-group" },
        t.createElement(
          r.Suspense,
          null,
          !!i &&
            t.createElement(N, { hasValue: !!h, label: i, htmlAttributes: b }),
        ),
        t.createElement(
          S,
          {
            gap: "16px",
            flexDirection: u,
            alignItems: u === L.COLUMN ? "flex-start" : void 0,
          },
          a == null
            ? void 0
            : a.map((m) =>
                t.createElement(y, {
                  key: m.key,
                  label: m.label,
                  value: m.value,
                  name: n,
                  htmlAttributes: g ?? m.htmlAttributes,
                  isStandalone: o,
                  currentValue: h,
                  setCurrentValue: C,
                  onChange: s,
                }),
              ),
        ),
      );
    },
  );
c.displayName = "RadioGroup";
c.__docgenInfo = {
  description: "",
  methods: [],
  displayName: "RadioGroup",
  props: {
    value: { defaultValue: { value: '""', computed: !1 }, required: !1 },
    label: { defaultValue: { value: '""', computed: !1 }, required: !1 },
    isStandalone: {
      defaultValue: { value: "false", computed: !1 },
      required: !1,
    },
    direction: {
      defaultValue: { value: '"column"', computed: !1 },
      required: !1,
    },
  },
};
const V = {
    title: "Components/Radio Group",
    component: c,
    decorators: [
      (a) =>
        t.createElement(
          "div",
          { style: { color: "#ffffff" } },
          t.createElement(a, null),
        ),
    ],
    parameters: { layout: "centered" },
    tags: ["autodocs"],
    argTypes: {},
    args: {
      name: "test-storybook-radio-group",
      options: [
        { key: "option-1", value: "option-1", label: "Option 1" },
        { key: "option-2", value: "option-2", label: "Option 2" },
        {
          key: "option-3",
          value: "option-3",
          label: "Option Long text will be this one",
        },
        { key: "option-4", value: "option-4", label: "Option 4" },
      ],
      label: "Label of radio group",
      onChange: (a) => {
        console.log("e", a.target.value);
      },
    },
  },
  q = { args: { isStandalone: !0, label: "" } },
  H = { args: { isStandalone: !0, label: "", direction: "row" } },
  I = {
    args: { direction: "row" },
    render: function (e) {
      const [n, l] = r.useState(e.options[1].value),
        i = r.useCallback((o) => {
          l(o.target.value);
        }, []),
        s = r.useCallback(
          (o) => () => {
            l(o);
          },
          [],
        );
      return (
        console.log("ParentController: ", n),
        t.createElement(
          "div",
          { style: { display: "inline-flex", flexDirection: "column" } },
          t.createElement(c, { ...e, value: n, onChange: i }),
          t.createElement(
            "button",
            { style: { marginTop: 48 }, onClick: s(e.options[0].value) },
            "Change to first option",
          ),
          t.createElement(
            "button",
            { style: { marginTop: 24 }, onClick: s(e.options[3].value) },
            "Change to fourth option",
          ),
        )
      );
    },
  },
  D = {
    render: function (e) {
      const [n, l] = r.useState(e.options[2].value),
        i = r.useCallback((s) => {
          l(s.target.value);
        }, []);
      return (
        console.log("PropsController: ", n),
        t.createElement(
          "div",
          { style: { display: "inline-flex", flexDirection: "column" } },
          t.createElement(c, { ...e, value: n, onChange: i }),
        )
      );
    },
  },
  G = {
    render: function (e) {
      const n = r.useMemo(
          () =>
            O({
              option: k()
                .required("This field is required!")
                .max(10, "Text must be less than 10 characters"),
            }).required(),
          [],
        ),
        { handleSubmit: l, control: i } = T({
          resolver: _(n),
          defaultValues: { option: e.options[1].value },
        }),
        s = (o) => {
          console.log("RHFController form data: ", o);
        };
      return t.createElement(
        "form",
        {
          style: { display: "inline-flex", flexDirection: "column" },
          onSubmit: l(s),
        },
        t.createElement(R, {
          control: i,
          name: "option",
          render: ({ field: o }) => t.createElement(c, { ...e, ...o }),
        }),
        t.createElement("input", { type: "submit", style: { marginTop: 48 } }),
      );
    },
  },
  P = {
    render: function (e) {
      const [n, l] = r.useState(e.options[2].value),
        [i, s] = r.useState(""),
        o = r.useCallback((u) => {
          l(u.target.value);
        }, []);
      return t.createElement(
        "div",
        { style: { display: "inline-flex", flexDirection: "column" } },
        t.createElement(c, { ...e, label: i, value: n, onChange: o }),
        t.createElement(
          "button",
          {
            style: { marginTop: 48 },
            onClick: () => s((u) => (u ? "" : "Label lazy load")),
          },
          "Toggle show label",
        ),
      );
    },
  },
  z = {
    args: {
      label: "Label for radio group",
      isStandalone: !0,
      htmlAttributes: { "data-testid": "radio-group" },
      labelHtmlAttributes: { "data-testid": "radio-group-label" },
      optionHtmlAttributes: { "data-testid": "radio-group-option" },
    },
  },
  Y = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        Default: q,
        HorizontalAlign: H,
        LazyLoad: P,
        ParentController: I,
        PropsController: D,
        RHFController: G,
        WithHTMLAttributes: z,
        default: V,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  );
export { f as S, Y as _ };
