import { c as b } from "./clsx-B-dksMZM.js";
import { _ as E } from "./iframe-CMcQjm1L.js";
import { r as J } from "./index-BMdlDBjA.js";
import { Icon as U } from "./index-BU_VM_pW.js";
import { R as l, r as n } from "./index-Cs7sjTYM.js";
import { N as X, y as Y } from "./index-DJbV_2Cm.js";
import { t as D } from "./index-SJmvIjJq.js";
import { V as Q } from "./index-ZNNDmq-k.js";
import { c as K } from "./index-jqde5cy2.js";
import { u as B, C as M } from "./index.esm-C-hvzvEL.js";
import { c as R, p as m } from "./styled-components.browser.esm-CMQQUr34.js";
import { o as G, c as W, a as j } from "./yup-BDbztMXE.js";

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
      "./index-BU_VM_pW.js",
      "./iframe-CMcQjm1L.js",
      "./index-BPgfAmNW.js",
      "./index-DJbV_2Cm.js",
      "./index-CShRuexg.js",
      "./index-DnAsfXX-.js",
      "./_menu-DC6osnaO.js",
      "./index.esm-C-hvzvEL.js",
      "./yup-BDbztMXE.js",
      "./index-BMdlDBjA.js",
      "./index-jqde5cy2.js",
      "./index-ZNNDmq-k.js",
    ]),
) => i.map((i) => d[i]);
import { Icon as U } from "./index-BU_VM_pW.js";
import { _ as E } from "./iframe-CMcQjm1L.js";
import { c as b } from "./clsx-B-dksMZM.js";
import { r as J } from "./index-BMdlDBjA.js";
import { c as K } from "./index-jqde5cy2.js";
import { V as Q } from "./index-ZNNDmq-k.js";
import { p as m, c as R } from "./styled-components.browser.esm-CMQQUr34.js";
import { N as X, y as Y } from "./index-DJbV_2Cm.js";
import { t as D } from "./index-SJmvIjJq.js";
const Z = typeof window < "u" ? n.useLayoutEffect : n.useEffect,
  ee = Z;
function te(e, r, s, o) {
  const a = n.useRef(r);
  ee(() => {
    a.current = r;
  }, [r]),
    n.useEffect(() => {
      const t = window;
      if (!(t && t.addEventListener)) return;
      const i = (d) => a.current(d);
      return (
        t.addEventListener(e, i, o),
        () => {
          t.removeEventListener(e, i, o);
        }
      );
    }, [e, s, o]);
}
const ne = (e, r) => {
    te("click", (s) => {
      for (let o = 0; o < e.length; o++) {
        const a = e[o];
        if (
          !(a != null && a.current) ||
          (a != null && a.current.contains(s.target))
        )
          return;
      }
      r == null || r();
    });
  },
  oe = ne,
  le = ({ children: e, className: r = "", ...s }) => {
    const o = l.useRef(null),
      a = n.useCallback(
        (t) => {
          t == null || t.setAttribute("data-testid", "portal"),
            t == null || t.setAttribute("class", `portal ${r}`),
            Object.entries(s).forEach(([i, d]) => {
              t == null || t.setAttribute(i, String(d));
            });
        },
        [r, s],
      );
    return (
      n.useEffect(() => {
        let t = document.getElementById("portal-root");
        return (
          t ||
            ((t = document.createElement("div")),
            t.setAttribute("id", "portal-root")),
          o.current ||
            ((o.current = document.createElement("div")), a(o.current)),
          document.body.appendChild(t),
          t.appendChild(o.current),
          () => {
            o.current && t.removeChild(o.current);
          }
        );
      }, [a]),
      o.current ? J.createPortal(e, o.current) : null
    );
  },
  V = { OUTLINED: "outlined", FILLED: "filled", STANDARD: "standard" },
  re = (e) =>
    e.$variant === V.STANDARD
      ? R`
      padding: 0px 35px 0px 0px;
    `
      : R`
    padding: 0px 35px 0px 14px;
  `,
  g = {
    Container: m.div`
    position: relative;
    width: ${({ $fullWidth: e }) => (e ? "100%" : "fit-content")};
    min-width: 210px;
  `,
    Option: m.span`
    display: block;
    transition: all 200ms ease-in-out;
    cursor: pointer;
    padding: 0px 14px;
    height: 36px;
    line-height: 36px;
    background-color: ${({ $selected: e, $disabled: r }) => (r ? "#121212" : e ? "#90caf929" : "transparent")};
    color: ${({ $disabled: e }) => (e ? "#ffffff80" : "#ffffff")};
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-family: ${D.VERNADA};
    font-size: 16px;

    &:hover {
      background-color: #ffffff14;
    }
  `,
    OptionGroup: m.div`
    position: absolute;
    display: ${({ $isShowed: e }) => (e ? "block" : "none")};
    top: ${({ $position: e }) => (e == null ? void 0 : e.top) || 0}px;
    left: ${({ $position: e }) => (e == null ? void 0 : e.left) || 0}px;
    width: ${({ $position: e }) => (e == null ? void 0 : e.width) || 0}px;
    padding: 6px 0px;
    z-index: 999;
    background-color: rgb(18, 18, 18);
    min-width: 120px;
    border-radius: 4px;
    box-shadow:
      rgb(0 0 0 / 20%) 0px 5px 5px -3px,
      rgb(0 0 0 / 14%) 0px 8px 10px 1px,
      rgb(0 0 0 / 12%) 0px 3px 14px 2px;
    background-image: linear-gradient(#ffffff1f, #ffffff1f);
  `,
    Box: m.div`
    transition: all 200ms ease-in-out;
    position: relative;
    width: ${({ $fullWidth: e }) => (e ? "100%" : "210px")};
    height: 56px;
    border-radius: 4px;
    cursor: ${({ $disabled: e }) => (e ? "not-allowed" : "pointer")};
    ${X};
  `,
    InnerBox: m.span`
    position: absolute;
    transition: all 200ms ease-in-out;
    box-sizing: border-box;
    width: 100%;
    height: ${({ $hasLabel: e }) => (e ? "44px" : "56px")};
    line-height: ${({ $hasLabel: e }) => (e ? "44px" : "56px")};
    top: ${({ $hasLabel: e }) => (e ? "12px" : "0px")};
    left: 0px;
    background-color: transparent;
    border: none;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: ${({ $disabled: e }) => (e ? "#ffffff80" : "#ffffff")};
    font-family: ${D.VERNADA};
    font-size: 16px;
    ${re};

    &:focus-visible {
      outline: none;
    }
  `,
    FakeSelect: m.select`
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
  `,
    PostAdormentContentWrapper: m.div`
    display: flex;
    transition: all 350ms ease-in-out;
    width: 20px;
    height: 20px;
    color: ${({ $disabled: e }) => (e ? "#ffffff80" : "#ffffff")};
    transform: ${({ $isShowed: e }) => (e ? "rotate(180deg)" : "none")};
  `,
  },
  ae = n.lazy(() =>
    E(
      () => import("./index-D6xeodyY.js"),
      __vite__mapDeps([0, 1, 2, 3, 4, 5, 6]),
      import.meta.url,
    ).then((e) => ({ default: e.HelperText })),
  ),
  ie = n.lazy(() =>
    E(
      () => import("./index-BU_VM_pW.js"),
      __vite__mapDeps([7, 8, 1, 2, 3, 9, 5, 10, 6]),
      import.meta.url,
    ).then((e) => ({ default: e.Icon })),
  ),
  se = n.lazy(() =>
    E(
      () => import("./index-CShRuexg.js"),
      __vite__mapDeps([11, 1, 2, 3, 4, 5, 6]),
      import.meta.url,
    ).then((e) => ({ default: e.Label })),
  ),
  ce = n.lazy(() =>
    E(
      () => import("./index-DnAsfXX-.js"),
      __vite__mapDeps([12, 1, 2, 3, 4, 7, 8, 9, 5, 10, 6]),
      import.meta.url,
    ).then((e) => ({ default: e.PostAdorment })),
  ),
  ue = n.lazy(() =>
    E(
      () => import("./_menu-DC6osnaO.js"),
      __vite__mapDeps([13, 4, 2, 3, 14, 15, 7, 8, 1, 9, 5, 10, 6, 16, 17, 18]),
      import.meta.url,
    ).then((e) => ({ default: e.SelectMenu })),
  ),
  v = n.forwardRef(
    (
      {
        optionGroupClassName: e,
        options: r,
        value: s,
        variant: o = V.STANDARD,
        labelProps: a,
        postAdormentProps: t,
        helperTextProps: i,
        className: d,
        fullWidth: x = !1,
        disabled: u = !1,
        required: S = !1,
        error: c = null,
        isStandalone: k = !1,
        tabIndex: $ = -1,
        menuHtmlAttributes: O,
        htmlAttributes: P,
        onChange: y,
      },
      Ve,
    ) => {
      const _ = n.useRef(null),
        A = n.useRef(null),
        [f, C] = n.useState(!1),
        [I, N] = n.useState(null),
        { currentValue: w, setCurrentValue: L } = Q(s, k);
      oe([_, A], () => {
        f && C(!1);
      });
      const q = (h) => {
          if ((h.preventDefault(), !u)) {
            if (!f) {
              const p = Y(_);
              N({ ...p, top: p.top + p.height });
            }
            C((p) => !p);
          }
        },
        z = K(() => !!(u || f || w)),
        T = r.find((h) => h.value === w),
        F = n.useMemo(
          () =>
            l.createElement(
              g.PostAdormentContentWrapper,
              {
                $isShowed: f,
                $disabled: u,
                className: b(
                  "select-post-adorment-content",
                  f && "select-post-adorment-content--showed",
                  u && "select-post-adorment-content--disabled",
                ),
              },
              (t == null ? void 0 : t.children) ??
                l.createElement(
                  n.Suspense,
                  null,
                  l.createElement(ie, { name: "chevron-down" }),
                ),
            ),
          [u, f, t == null ? void 0 : t.children],
        ),
        H = n.useCallback(
          (h) => (p) => {
            y == null || y(h, p), C(!1), L(h);
          },
          [y, L, C],
        );
      return l.createElement(
        g.Container,
        {
          ...P,
          $fullWidth: x,
          className: b("select", x && "select--fullWidth", d),
        },
        l.createElement(
          g.Box,
          {
            $variant: o,
            $disabled: u,
            $fullWidth: x,
            $isError: !!c,
            ref: _,
            onClick: q,
            tabIndex: $,
            className: b(
              "select-box",
              x && "select-box--fullwidth",
              u && "select-box--disabled",
              !!c && "select-box--error",
              `select-box--variant-${o}`,
            ),
          },
          l.createElement(
            n.Suspense,
            null,
            !!(a != null && a.children) &&
              l.createElement(se, {
                ...a,
                required: S,
                disabled: u,
                variant: o,
                isLabelCollapsed: z,
                isFocused: f,
                isError: !!c,
              }),
          ),
          l.createElement(g.FakeSelect, { required: S, disabled: u }),
          l.createElement(
            g.InnerBox,
            {
              $hasLabel: !!(a != null && a.children),
              $variant: o,
              $disabled: u,
              className: b(
                "select-inner-box",
                `select-inner-box--variant-${o}`,
                !!(a != null && a.children) && "select-inner-box--hasLabel",
                u && "select-inner-box--disabled",
              ),
            },
            T == null ? void 0 : T.label,
          ),
          l.createElement(
            n.Suspense,
            null,
            !!(t != null && t.children) &&
              l.createElement(ce, { ...t, variant: o }, F),
          ),
          l.createElement(
            n.Suspense,
            null,
            !!(i != null && i.children) &&
              l.createElement(
                ae,
                { ...i, isError: !!c, variant: o },
                (c == null ? void 0 : c.message) ??
                  (i == null ? void 0 : i.children) ??
                  "",
              ),
          ),
        ),
        l.createElement(
          le,
          { className: b("portal-select", e) },
          l.createElement(
            n.Suspense,
            null,
            f &&
              l.createElement(ue, {
                ref: A,
                options: r,
                position: I,
                isShowed: f,
                optionGroupClassName: e,
                currentValue: w,
                htmlAttributes: O,
                selectOption: H,
              }),
          ),
        ),
      );
    },
  );
v.displayName = "Select";
v.__docgenInfo = {
  description: "",
  methods: [],
  displayName: "Select",
  props: {
    variant: {
      defaultValue: { value: '"standard"', computed: !1 },
      required: !1,
    },
    fullWidth: { defaultValue: { value: "false", computed: !1 }, required: !1 },
    disabled: { defaultValue: { value: "false", computed: !1 }, required: !1 },
    required: { defaultValue: { value: "false", computed: !1 }, required: !1 },
    error: { defaultValue: { value: "null", computed: !1 }, required: !1 },
    isStandalone: {
      defaultValue: { value: "false", computed: !1 },
      required: !1,
    },
    tabIndex: { defaultValue: { value: "-1", computed: !1 }, required: !1 },
  },
};
const de = {
    title: "Components/Select",
    component: v,
    parameters: { layout: "centered" },
    tags: ["autodocs"],
    argTypes: {},
    args: {
      options: [
        {
          label: "Option 1 1 opiep oasi poeop aspoi posi",
          value: "option-1-1-2-3-4--5--6-67",
          htmlAttributes: { "data-gtm": "option-1-1-2-3-4--5--6-67" },
        },
        { label: "Option 2", value: "option-2" },
        { label: "Option 3", value: "option-3" },
        { label: "Option 4", value: "option-4" },
      ],
      labelProps: { children: "Label" },
      postAdormentProps: {
        children: l.createElement(U, { name: "arrow-down" }),
      },
      helperTextProps: { children: "helper text" },
    },
  },
  fe = { args: { isStandalone: !0, postAdormentProps: void 0 } },
  pe = {
    args: { isStandalone: !0, value: "option-4", postAdormentProps: void 0 },
  },
  me = {
    args: {
      variant: "outlined",
      labelProps: void 0,
      postAdormentProps: void 0,
      helperTextProps: void 0,
      isStandalone: !0,
    },
  },
  ve = {
    args: {
      variant: "filled",
      labelProps: void 0,
      postAdormentProps: void 0,
      helperTextProps: void 0,
      isStandalone: !0,
    },
  },
  xe = {
    args: {
      disabled: !0,
      labelProps: void 0,
      postAdormentProps: void 0,
      helperTextProps: void 0,
      isStandalone: !0,
    },
  },
  he = {
    args: {
      variant: "outlined",
      fullWidth: !0,
      labelProps: void 0,
      postAdormentProps: void 0,
      helperTextProps: void 0,
      isStandalone: !0,
    },
  },
  be = {
    args: {
      variant: "filled",
      required: !0,
      labelProps: void 0,
      postAdormentProps: void 0,
      helperTextProps: void 0,
      isStandalone: !0,
    },
  },
  ge = {
    args: {
      postAdormentProps: void 0,
      helperTextProps: void 0,
      isStandalone: !0,
    },
  },
  Ee = {
    args: {
      variant: "outlined",
      postAdormentProps: void 0,
      helperTextProps: void 0,
      isStandalone: !0,
    },
  },
  Se = {
    args: {
      variant: "filled",
      postAdormentProps: void 0,
      helperTextProps: void 0,
      isStandalone: !0,
    },
  },
  ye = {
    args: { variant: "outlined", helperTextProps: void 0, isStandalone: !0 },
  },
  Ce = { args: { isStandalone: !0 } },
  _e = { args: { variant: "outlined", isStandalone: !0 } },
  we = { args: { variant: "filled", isStandalone: !0 } },
  Te = {
    render: function (r) {
      const [s, o] = n.useState(r.options[1].value),
        a = n.useCallback((i) => {
          o(i);
        }, []),
        t = n.useCallback(
          (i) => () => {
            o(i);
          },
          [],
        );
      return (
        console.log("ParentController: ", s),
        l.createElement(
          "div",
          { style: { display: "inline-flex", flexDirection: "column" } },
          l.createElement(v, {
            ...r,
            variant: "filled",
            value: s,
            onChange: a,
          }),
          l.createElement(
            "button",
            { style: { marginTop: 48 }, onClick: t(r.options[0].value) },
            "Change to first option",
          ),
          l.createElement(
            "button",
            { style: { marginTop: 24 }, onClick: t(r.options[3].value) },
            "Change to fourth option",
          ),
        )
      );
    },
  },
  Ae = {
    render: function (r) {
      const [s, o] = n.useState(r.options[2].value),
        a = n.useCallback((t) => {
          o(t);
        }, []);
      return (
        console.log("PropsController: ", s),
        l.createElement(
          "div",
          { style: { display: "inline-flex", flexDirection: "column" } },
          l.createElement(v, {
            ...r,
            variant: "outlined",
            value: s,
            onChange: a,
          }),
        )
      );
    },
  },
  Le = {
    render: function (r) {
      const s = n.useMemo(
          () =>
            W({
              select: j()
                .required("This field is required!")
                .max(10, "Text must be less than 10 characters"),
            }).required(),
          [],
        ),
        { handleSubmit: o, control: a } = B({
          resolver: G(s),
          defaultValues: { select: "" },
        }),
        t = (i) => {
          console.log("RHFController form data: ", i);
        };
      return l.createElement(
        "form",
        {
          style: { display: "inline-flex", flexDirection: "column" },
          onSubmit: o(t),
        },
        l.createElement(M, {
          control: a,
          name: "select",
          render: ({ field: i, formState: { errors: d } }) =>
            l.createElement(v, {
              ...r,
              ...i,
              error: d.select,
              variant: "outlined",
            }),
        }),
        l.createElement("input", { type: "submit", style: { marginTop: 48 } }),
      );
    },
  },
  Re = {
    render: function (r) {
      const [s, o] = n.useState(r.options[2].value),
        [a, t] = n.useState(void 0),
        [i, d] = n.useState(void 0),
        [x, u] = n.useState(void 0),
        S = n.useCallback((c) => {
          o(c);
        }, []);
      return l.createElement(
        "div",
        { style: { display: "inline-flex", flexDirection: "column" } },
        l.createElement(v, {
          ...r,
          helperTextProps: a,
          labelProps: i,
          postAdormentProps: x,
          variant: "outlined",
          value: s,
          onChange: S,
        }),
        l.createElement(
          "button",
          {
            style: { marginTop: 48 },
            onClick: () => t((c) => (c ? void 0 : r.helperTextProps)),
          },
          "Toggle show helper text",
        ),
        l.createElement(
          "button",
          {
            style: { marginTop: 48 },
            onClick: () => d((c) => (c ? void 0 : r.labelProps)),
          },
          "Toggle show label",
        ),
        l.createElement(
          "button",
          {
            style: { marginTop: 48 },
            onClick: () => u((c) => (c ? void 0 : r.postAdormentProps)),
          },
          "Toggle show postAdorment",
        ),
      );
    },
  },
  De = {
    args: {
      htmlAttributes: { "data-gtm": "select-gtm-id" },
      menuHtmlAttributes: { "data-gtm": "menu-gtm-id" },
    },
  },
  We = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        CustomDefaultValue: pe,
        CustomPostAdorment: ye,
        Default: fe,
        Disabled: xe,
        Filled: ve,
        FullWidth: he,
        HelperTextDefault: Ce,
        HelperTextFilled: we,
        HelperTextOutlined: _e,
        LabeledDefault: ge,
        LabeledFilled: Se,
        LabeledOutlined: Ee,
        LazyLoad: Re,
        Outlined: me,
        ParentController: Te,
        PropsController: Ae,
        RHFController: Le,
        Required: be,
        WithHTMLAttributes: De,
        default: de,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  );
export { g as S, We as _ };
