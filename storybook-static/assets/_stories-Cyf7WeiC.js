import "./_commonjsHelpers-BosuxZz1.js";
import { c as f } from "./clsx-B-dksMZM.js";
import { R as t } from "./index-Cs7sjTYM.js";
import { p as l, f as s } from "./styled-components.browser.esm-CMQQUr34.js";

import "./_commonjsHelpers-BosuxZz1.js";
const m = s`
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
`,
  i = (e) => s`
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: ${`translate(${(5 * e) / 3}px, 0)`};
  }
`,
  d = s`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`,
  o = {
    Container: l.span`
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${({ $fullScreen: e }) => (e ? "100vw" : "100%")};
    height: ${({ $fullScreen: e }) => (e ? "100vh" : "100%")};
  `,
    Spinner: l.span`
    display: flex;
    position: relative;
    width: ${({ $size: e }) => `${(17 * e) / 3}px`};
    height: ${({ $size: e }) => `${e}px`};

    span {
      position: absolute;
      width: ${({ $size: e }) => `${e}px`};
      height: ${({ $size: e }) => `${e}px`};
      border-radius: 50%;
      background: ${({ $color: e }) => e};
    }

    span:nth-child(1) {
      left: ${({ $size: e }) => `${(2 * e) / 3}px`};
      animation: ${m} 0.6s infinite;
    }

    span:nth-child(2) {
      left: ${({ $size: e }) => `${(2 * e) / 3}px`};
      animation: ${({ $size: e }) => i(e)} 0.6s infinite;
    }

    span:nth-child(3) {
      left: ${({ $size: e }) => `${(7 * e) / 3}px`};
      animation: ${({ $size: e }) => i(e)} 0.6s infinite;
    }

    span:nth-child(4) {
      left: ${({ $size: e }) => `${4 * e}px`};
      animation: ${d} 0.6s infinite;
    }
  `,
  },
  r = ({
    size: e = 12,
    color: a = "#00bfff",
    fullScreen: n = !1,
    className: p,
    htmlAttributes: c,
  }) =>
    t.createElement(
      o.Container,
      {
        ...c,
        $fullScreen: n,
        className: f(
          "loading-ellipsis",
          `loading-ellipsis--size-${e}`,
          `loading-ellipsis--color-${a}`,
          n && "loading-ellipsis--fullScreen",
          p,
        ),
      },
      t.createElement(
        o.Spinner,
        { $size: e, $color: a, className: "loading-ellipsis-inner" },
        t.createElement("span", null),
        t.createElement("span", null),
        t.createElement("span", null),
        t.createElement("span", null),
      ),
    );
r.__docgenInfo = {
  description: "",
  methods: [],
  displayName: "LoadingEllipsis",
  props: {
    size: { defaultValue: { value: "12", computed: !1 }, required: !1 },
    color: { defaultValue: { value: '"#00bfff"', computed: !1 }, required: !1 },
    fullScreen: {
      defaultValue: { value: "false", computed: !1 },
      required: !1,
    },
  },
  composes: ["ILoadingProps"],
};
const x = {
    title: "Components/Loading Ellipsis",
    component: r,
    parameters: { layout: "centered" },
    tags: ["autodocs"],
    argTypes: {},
    args: {},
  },
  E = {},
  b = { args: { fullScreen: !0 } },
  y = { args: { size: 120 } },
  S = { args: { color: "#c5cbce" } },
  v = { args: { htmlAttributes: { "data-gtm": "loading-ellipsis-gtm-id" } } };
export {
  S as CustomColor,
  y as CustomSize,
  E as Default,
  b as FullScreen,
  v as WithHTMLAttributes,
  x as default,
};
