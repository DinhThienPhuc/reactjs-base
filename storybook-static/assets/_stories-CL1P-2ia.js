import "./_commonjsHelpers-BosuxZz1.js";
import { c as g } from "./clsx-B-dksMZM.js";
import { R as r, r as u } from "./index-Cs7sjTYM.js";
import { S as x } from "./index-DJbV_2Cm.js";
import "./index-SJmvIjJq.js";
import { V as $ } from "./index-ZNNDmq-k.js";
import { p as b, c as f } from "./styled-components.browser.esm-CMQQUr34.js";

import { c as g } from "./clsx-B-dksMZM.js";
import { V as $ } from "./index-ZNNDmq-k.js";
import { p as b, c as f } from "./styled-components.browser.esm-CMQQUr34.js";
import { S as x } from "./index-DJbV_2Cm.js";
import "./_commonjsHelpers-BosuxZz1.js";
import "./index-SJmvIjJq.js";
const i = { GAP: 5, WIDTH: 32, HEIGHT: 32, BORDER_RADIUS: 4 },
  m = {
    Container: b.button`
    ${x}
  `,
    Bar: b.span`
    display: block;
    width: ${({ $width: e }) => e}px;
    height: ${({ $height: e, $gap: t }) => (e - 4 * t) / 3}px;
    background-color: ${({ $color: e }) => e};
    margin: ${({ $gap: e }) => e}px 0px;
    transition: 0.4s;
    border-radius: ${({ $borderRadius: e }) => e}px;

    &:nth-child(1) {
      ${({ $isActivated: e, $height: t, $gap: a }) =>
        e &&
        f`
          transform: translate(0, ${(t - a) / 3}px) rotate(-45deg);
        `}
    }
    &:nth-child(2) {
      ${({ $isActivated: e }) =>
        e &&
        f`
          opacity: 0;
        `}
    }
    &:nth-child(3) {
      ${({ $isActivated: e, $height: t, $gap: a }) =>
        e &&
        f`
          transform: translate(0, -${(t - a) / 3}px) rotate(45deg);
        `}
    }
  `,
  },
  c = ({
    gap: e = i.GAP,
    width: t = i.WIDTH,
    height: a = i.HEIGHT,
    borderRadius: l = i.BORDER_RADIUS,
    color: n = "#ffffff",
    isStandalone: s = !0,
    active: h = !1,
    className: T,
    onClick: d,
    htmlAttributes: v,
  }) => {
    const { currentValue: o, setCurrentValue: y } = $(h, s),
      E = () => {
        y(!o), d == null || d(!o);
      },
      p = {
        $isActivated: o,
        $gap: e,
        $width: t,
        $height: a,
        $borderRadius: l,
        $color: n,
        className: g("hamburger-menu__bar", o && "hamburger-menu__bar--active"),
      };
    return r.createElement(
      m.Container,
      {
        ...v,
        className: g(
          "hamburger-menu",
          `hamburger-menu--gap-${e}`,
          `hamburger-menu--width-${t}`,
          `hamburger-menu--height-${a}`,
          `hamburger-menu--border-radius-${l}`,
          `hamburger-menu--color-${n}`,
          o && "hamburger-menu--active",
          T,
        ),
        onClick: E,
      },
      r.createElement(m.Bar, { ...p }),
      r.createElement(m.Bar, { ...p }),
      r.createElement(m.Bar, { ...p }),
    );
  };
c.__docgenInfo = {
  description: "",
  methods: [],
  displayName: "HamburgerMenu",
  props: {
    gap: {
      required: !1,
      tsType: { name: "number" },
      description: "",
      defaultValue: { value: "5", computed: !1 },
    },
    width: {
      required: !1,
      tsType: { name: "number" },
      description: "",
      defaultValue: { value: "32", computed: !1 },
    },
    height: {
      required: !1,
      tsType: { name: "number" },
      description: "",
      defaultValue: { value: "32", computed: !1 },
    },
    borderRadius: {
      required: !1,
      tsType: { name: "number" },
      description: "",
      defaultValue: { value: "4", computed: !1 },
    },
    onClick: {
      required: !1,
      tsType: {
        name: "signature",
        type: "function",
        raw: "(active: boolean) => void",
        signature: {
          arguments: [{ type: { name: "boolean" }, name: "active" }],
          return: { name: "void" },
        },
      },
      description: "",
    },
    color: {
      required: !1,
      tsType: { name: "string" },
      description: "",
      defaultValue: { value: '"#ffffff"', computed: !1 },
    },
    active: {
      required: !1,
      tsType: { name: "boolean" },
      description: "",
      defaultValue: { value: "false", computed: !1 },
    },
    className: { required: !1, tsType: { name: "string" }, description: "" },
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
    isStandalone: {
      defaultValue: { value: "true", computed: !1 },
      required: !1,
    },
  },
  composes: ["ISyncStateWithProps"],
};
const q = {
    title: "Components/Hamburger Menu",
    component: c,
    parameters: { layout: "centered" },
    tags: ["autodocs"],
    argTypes: {},
    args: {},
  },
  D = {},
  I = {
    render: function () {
      const [t, a] = u.useState(!1),
        l = u.useCallback((s) => {
          a(s);
        }, []),
        n = u.useCallback(
          (s) => () => {
            a(s);
          },
          [],
        );
      return (
        console.log("ParentController: ", t),
        r.createElement(
          "div",
          { style: { display: "inline-flex", flexDirection: "column" } },
          r.createElement(c, { isStandalone: !1, active: t, onClick: l }),
          r.createElement(
            "button",
            { style: { marginTop: 48 }, onClick: n(!1) },
            "Trigger hamburger inactive",
          ),
          r.createElement(
            "button",
            { style: { marginTop: 24 }, onClick: n(!0) },
            "Trigger hamburger active",
          ),
        )
      );
    },
  },
  M = {
    render: function () {
      const [t, a] = u.useState(!1),
        l = u.useCallback((n) => {
          a(n);
        }, []);
      return (
        console.log("PropsController: ", t),
        r.createElement(
          "div",
          { style: { display: "inline-flex", flexDirection: "column" } },
          r.createElement(c, { isStandalone: !1, active: t, onClick: l }),
        )
      );
    },
  },
  k = { args: { htmlAttributes: { "data-gtm": "hamburger-gtm-id" } } };
export {
  D as Default,
  I as ParentController,
  M as PropsController,
  k as WithHTMLAttributes,
  q as default,
};
