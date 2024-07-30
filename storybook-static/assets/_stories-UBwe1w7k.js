import "./_commonjsHelpers-BosuxZz1.js";
import { c as r } from "./clsx-B-dksMZM.js";
import { R as t } from "./index-Cs7sjTYM.js";
import { f as c, p as i } from "./styled-components.browser.esm-CMQQUr34.js";

import "./_commonjsHelpers-BosuxZz1.js";
const d = (e) => c`
  0% {
    top: ${e * 0.5}px;
    left: ${e * 0.5}px;
    width: 0;
    height: 0;
    opacity: 0;
  }
  4.9% {
    top: ${e * 0.5}px;
    left: ${e * 0.5}px;
    width: 0;
    height: 0;
    opacity: 0;
  }
  5% {
    top: ${e * 0.5}px;
    left: ${e * 0.5}px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: ${e}px;
    height: ${e}px;
    opacity: 0;
  }
`,
  o = {
    Container: i.span`
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${({ $fullScreen: e }) => (e ? "100vw" : "100%")};
    height: ${({ $fullScreen: e }) => (e ? "100vh" : "100%")};
  `,
    Ripple: i.span`
    display: inline-block;
    position: relative;
    width: ${({ $size: e }) => `${e + 8}px`};
    height: ${({ $size: e }) => `${e + 8}px`};

    span {
      position: absolute;
      border: 4px solid ${({ $color: e }) => e};
      opacity: 1;
      border-radius: 50%;
      animation: ${({ $size: e }) => d(e)} 1s cubic-bezier(0, 0.2, 0.8, 1)
        infinite;
    }

    span:nth-child(2) {
      animation-delay: -0.5s;
    }
  `,
  },
  p = ({
    size: e = 80,
    color: a = "#00bfff",
    fullScreen: l = !1,
    className: n,
    htmlAttributes: s,
  }) =>
    t.createElement(
      o.Container,
      {
        ...s,
        $fullScreen: l,
        className: r(
          "loading-ripple",
          `loading-ripple--size-${e}`,
          `loading-ripple--color-${a}`,
          l && "loading-ripple--fullScreen",
          n,
        ),
      },
      t.createElement(
        o.Ripple,
        { $size: e, $color: a, className: "loading-ripple-inner" },
        t.createElement("span", null),
        t.createElement("span", null),
      ),
    );
p.__docgenInfo = {
  description: "",
  methods: [],
  displayName: "LoadingRipple",
  props: {
    size: { defaultValue: { value: "80", computed: !1 }, required: !1 },
    color: { defaultValue: { value: '"#00bfff"', computed: !1 }, required: !1 },
    fullScreen: {
      defaultValue: { value: "false", computed: !1 },
      required: !1,
    },
  },
  composes: ["ILoadingProps"],
};
const h = {
    title: "Components/Loading Ripple",
    component: p,
    parameters: { layout: "centered" },
    tags: ["autodocs"],
    argTypes: {},
    args: {},
  },
  $ = {},
  x = { args: { fullScreen: !0 } },
  y = { args: { size: 120 } },
  b = { args: { color: "#c5cbce" } },
  w = { args: { htmlAttributes: { "data-gtm": "loading-ripple-gtm-id" } } };
export {
  b as CustomColor,
  y as CustomSize,
  $ as Default,
  x as FullScreen,
  w as WithHTMLAttributes,
  h as default,
};
