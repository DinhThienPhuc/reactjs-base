import "./_commonjsHelpers-BosuxZz1.js";
import { c as $ } from "./clsx-B-dksMZM.js";
import { u as g } from "./index-BKlm1OQS.js";
import { r as I, R as a } from "./index-Cs7sjTYM.js";
import { S as M } from "./index-DJbV_2Cm.js";
import { t as h, A as w } from "./index-SJmvIjJq.js";
import { V as _ } from "./index-ZNNDmq-k.js";
import { c as T } from "./index-jqde5cy2.js";
import { j as v } from "./jsx-runtime-BlAj40OV.js";
import { c as b, p as d } from "./styled-components.browser.esm-CMQQUr34.js";

import { c as $ } from "./clsx-B-dksMZM.js";
import { c as T } from "./index-jqde5cy2.js";
import { p as d, c as b } from "./styled-components.browser.esm-CMQQUr34.js";
import { A as w, t as h } from "./index-SJmvIjJq.js";
import { S as M } from "./index-DJbV_2Cm.js";
import { j as v } from "./jsx-runtime-BlAj40OV.js";
import { V as _ } from "./index-ZNNDmq-k.js";
import { u as g } from "./index-BKlm1OQS.js";
import "./_commonjsHelpers-BosuxZz1.js";
const y = { GAP: 5, WIDTH: 32, HEIGHT: 32, BORDER_RADIUS: 4 },
  E = {
    Container: d.button.withConfig({
      displayName: "_style__Container",
      componentId: "sc-1j0gpmx-0",
    })(["", ""], M),
    Bar: d.span.withConfig({
      displayName: "_style__Bar",
      componentId: "sc-1j0gpmx-1",
    })(
      [
        "display:block;width:",
        "px;height:",
        "px;background-color:",
        ";margin:",
        "px 0px;transition:0.4s;border-radius:",
        "px;&:nth-child(1){",
        "}&:nth-child(2){",
        "}&:nth-child(3){",
        "}",
      ],
      ({ $width: e }) => e,
      ({ $height: e, $gap: n }) => (e - 4 * n) / 3,
      ({ $color: e }) => e,
      ({ $gap: e }) => e,
      ({ $borderRadius: e }) => e,
      ({ $isActivated: e, $height: n, $gap: o }) =>
        e && b(["transform:translate(0,", "px) rotate(-45deg);"], (n - o) / 3),
      ({ $isActivated: e }) => e && b(["opacity:0;"]),
      ({ $isActivated: e, $height: n, $gap: o }) =>
        e && b(["transform:translate(0,-", "px) rotate(45deg);"], (n - o) / 3),
    ),
  },
  k = ({
    gap: e = y.GAP,
    width: n = y.WIDTH,
    height: o = y.HEIGHT,
    borderRadius: p = y.BORDER_RADIUS,
    color: c = "#ffffff",
    isStandalone: t = !0,
    active: i = !1,
    className: u,
    onClick: r,
    htmlAttributes: x,
  }) => {
    const { currentValue: l, setCurrentValue: s } = _(i, t),
      m = () => {
        s(!l), r == null || r(!l);
      },
      f = {
        $isActivated: l,
        $gap: e,
        $width: n,
        $height: o,
        $borderRadius: p,
        $color: c,
        className: $("hamburger-menu__bar", l && "hamburger-menu__bar--active"),
      };
    return v.jsxs(E.Container, {
      ...x,
      className: $(
        "hamburger-menu",
        `hamburger-menu--gap-${e}`,
        `hamburger-menu--width-${n}`,
        `hamburger-menu--height-${o}`,
        `hamburger-menu--border-radius-${p}`,
        `hamburger-menu--color-${c}`,
        l && "hamburger-menu--active",
        u,
      ),
      onClick: m,
      children: [
        v.jsx(E.Bar, { ...f }),
        v.jsx(E.Bar, { ...f }),
        v.jsx(E.Bar, { ...f }),
      ],
    });
  },
  R = {
    Container: d.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #121212;
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    box-shadow:
      #00000033 0px 2px 4px -1px,
      #00000024 0px 4px 5px 0px,
      #0000001f 0px 1px 10px 0px;
    background-image: linear-gradient(#ffffff17, #ffffff17);
    width: 100%;
    height: ${({ $isMobileMenuExpanded: e }) => (e ? "100vh" : "auto")};

    @media (min-width: ${w.SEVEN}px) {
      flex-direction: row;
    }
  `,
    Item: d.button`
    position: relative;
    transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
    box-sizing: border-box;
    display: flex;
    align-items: center;
    padding: 0px 16px;
    width: 100%;
    height: 56px;
    overflow: hidden;
    color: ${({ $isActivated: e }) => (e ? "#90caf9" : "#ffffff")};
    ${M};

    &:not(:first-child) {
      border-top: ${({ $isMobileMenuExpanded: e }) => (e ? "1px solid #ffffff1f" : "0px")};
      height: ${({ $isMobileMenuExpanded: e }) => (e ? "56px" : "0px")};
      opacity: ${({ $isMobileMenuExpanded: e }) => (e ? 1 : 0)};
    }

    &:hover {
      cursor: pointer;
    }

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      height: 3px;
      border-radius: 4px;
      background-color: #90caf9;
      transition: width 300ms cubic-bezier(0.4, 0, 0.2, 1);
      width: ${({ $isActivated: e }) => (e ? "100%" : 0)};
    }

    @media (min-width: ${w.SEVEN}px) {
      height: 64px;
      padding-left: 24px;
      padding-right: 24px;
      width: auto;

      &:not(:first-child) {
        opacity: 1;
        height: 64px;
      }
    }
  `,
    Left: d.div``,
    Center: d.div``,
    Right: d.div``,
    MenuIconWrapper: d.div`
    display: flex;
    position: absolute;
    top: 28px;
    right: 28px;
    transform: translate(50%, -50%);

    @media (min-width: ${w.SEVEN}px) {
      display: none;
    }
  `,
  },
  A = ({
    items: e,
    activeKey: n = e[0].key,
    firstItemSelectable: o = !1,
    collapseAfterSelectItem: p = !0,
    mobileMenuExpanded: c = !1,
    hamburgerProps: t,
    onClick: i,
    className: u,
  }) => {
    const [r, x] = I.useState(c),
      l = T(() =>
        e.map((s, m) =>
          a.createElement(
            R.Item,
            {
              key: s.key,
              $isMobileMenuExpanded: r,
              $isActivated: n === s.key,
              onClick: (f) => {
                if ((p && x(!1), o || m !== 0))
                  return i == null ? void 0 : i(f, s.key);
                i == null || i(f);
              },
              className: $(
                "responsive-topnav-item",
                r && "responsive-topnav-item--mobile-expanded",
                n === s.key && "responsive-topnav-item--active",
                u,
              ),
            },
            s.content,
          ),
        ),
      );
    return a.createElement(
      R.Container,
      {
        $isMobileMenuExpanded: r,
        className: $(
          "responsive-topnav",
          r && "responsive-topnav--mobile-expanded",
          u,
        ),
      },
      l,
      a.createElement(
        R.MenuIconWrapper,
        null,
        a.createElement(k, {
          ...t,
          isStandalone: !1,
          width: (t == null ? void 0 : t.width) ?? 24,
          height: (t == null ? void 0 : t.height) ?? 24,
          gap: (t == null ? void 0 : t.gap) ?? 4,
          active: r,
          onClick: (s) => {
            var m;
            x(s), (m = t == null ? void 0 : t.onClick) == null || m.call(t, s);
          },
        }),
      ),
    );
  };
A.__docgenInfo = {
  description: "",
  methods: [],
  displayName: "ResponsiveTopnav",
  props: {
    items: {
      required: !0,
      tsType: {
        name: "Array",
        elements: [{ name: "IResponsiveTopnavItem" }],
        raw: "IResponsiveTopnavItem[]",
      },
      description: "",
    },
    activeKey: {
      required: !1,
      tsType: { name: "string" },
      description: "",
      defaultValue: { value: "items[0].key", computed: !0 },
    },
    onClick: {
      required: !1,
      tsType: {
        name: "signature",
        type: "function",
        raw: "(e: MouseEvent<HTMLButtonElement>, key?: string) => void",
        signature: {
          arguments: [
            {
              type: {
                name: "MouseEvent",
                elements: [{ name: "HTMLButtonElement" }],
                raw: "MouseEvent<HTMLButtonElement>",
              },
              name: "e",
            },
            { type: { name: "string" }, name: "key" },
          ],
          return: { name: "void" },
        },
      },
      description: "",
    },
    firstItemSelectable: {
      required: !1,
      tsType: { name: "boolean" },
      description: "",
      defaultValue: { value: "false", computed: !1 },
    },
    mobileMenuExpanded: {
      required: !1,
      tsType: { name: "boolean" },
      description: "",
      defaultValue: { value: "false", computed: !1 },
    },
    hamburgerProps: {
      required: !1,
      tsType: { name: "IHamburgerMenuProps" },
      description: "",
    },
    collapseAfterSelectItem: {
      defaultValue: { value: "true", computed: !1 },
      required: !1,
    },
  },
  composes: ["Omit", "IExtendable"],
};
const z = {
    title: "Modules/Responsive Topnav",
    component: A,
    decorators: [
      (e) =>
        a.createElement(
          "div",
          { style: { marginLeft: "-50vw", marginRight: "-50vw" } },
          a.createElement(e, null),
        ),
    ],
    parameters: { layout: "centered" },
    tags: ["autodocs"],
    argTypes: {},
    args: {
      items: [
        {
          key: "home",
          content: a.createElement(g, { font: h.VERNADA }, "Home"),
        },
        {
          key: "about-us",
          content: a.createElement(g, { font: h.VERNADA }, "About Us"),
        },
        {
          key: "categories",
          content: a.createElement(g, { font: h.VERNADA }, "Categories"),
        },
        {
          key: "products",
          content: a.createElement(g, { font: h.VERNADA }, "Products"),
        },
      ],
    },
  },
  G = {
    render: function (n) {
      const [o, p] = I.useState(""),
        c = (t, i) => {
          i && p(i);
        };
      return a.createElement(A, { ...n, activeKey: o, onClick: c });
    },
  };
export { G as Default, z as default };
