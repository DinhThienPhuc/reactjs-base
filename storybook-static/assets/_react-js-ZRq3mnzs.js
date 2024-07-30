import "./_commonjsHelpers-BosuxZz1.js";
import { c as o } from "./clsx-B-dksMZM.js";
import { R as e } from "./index-Cs7sjTYM.js";

import "./_commonjsHelpers-BosuxZz1.js";
const i = ({
  className: t = "",
  name: r,
  color: n,
  width: a,
  height: c,
  htmlAttributes: s,
}) =>
  e.createElement(
    "svg",
    {
      ...s,
      xmlns: "http://www.w3.org/2000/svg",
      width: a || "24",
      height: c || "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      color: n,
      className: o("phantomthief-icon", "icon", `icon--${r}`, t),
    },
    e.createElement("path", { stroke: "none", d: "M0 0h24v24H0z" }),
    e.createElement("path", {
      d: "M6.306 8.711c-2.602 .723 -4.306 1.926 -4.306 3.289c0 2.21 4.477 4 10 4c.773 0 1.526 -.035 2.248 -.102",
    }),
    e.createElement("path", {
      d: "M17.692 15.289c2.603 -.722 4.308 -1.926 4.308 -3.289c0 -2.21 -4.477 -4 -10 -4c-.773 0 -1.526 .035 -2.25 .102",
    }),
    e.createElement("path", {
      d: "M6.305 15.287c-.676 2.615 -.485 4.693 .695 5.373c1.913 1.105 5.703 -1.877 8.464 -6.66c.387 -.67 .733 -1.339 1.036 -2",
    }),
    e.createElement("path", {
      d: "M17.694 8.716c.677 -2.616 .487 -4.696 -.694 -5.376c-1.913 -1.105 -5.703 1.877 -8.464 6.66c-.387 .67 -.733 1.34 -1.037 2",
    }),
    e.createElement("path", {
      d: "M12 5.424c-1.925 -1.892 -3.82 -2.766 -5 -2.084c-1.913 1.104 -1.226 5.877 1.536 10.66c.386 .67 .793 1.304 1.212 1.896",
    }),
    e.createElement("path", {
      d: "M12 18.574c1.926 1.893 3.821 2.768 5 2.086c1.913 -1.104 1.226 -5.877 -1.536 -10.66c-.375 -.65 -.78 -1.283 -1.212 -1.897",
    }),
    e.createElement("path", {
      d: "M11.5 12.866a1 1 0 1 0 1 -1.732a1 1 0 0 0 -1 1.732z",
    }),
  );
i.__docgenInfo = {
  description: "",
  methods: [],
  displayName: "IconReactJs",
  props: {
    className: {
      required: !1,
      tsType: { name: "string" },
      description: "",
      defaultValue: { value: '""', computed: !1 },
    },
    name: { required: !0, tsType: { name: "string" }, description: "" },
    color: { required: !1, tsType: { name: "string" }, description: "" },
    width: { required: !1, tsType: { name: "number" }, description: "" },
    height: { required: !1, tsType: { name: "number" }, description: "" },
    htmlAttributes: {
      required: !1,
      tsType: {
        name: "intersection",
        raw: "SVGProps<SVGSVGElement> & IExtendable",
        elements: [
          {
            name: "SVGProps",
            elements: [{ name: "SVGSVGElement" }],
            raw: "SVGProps<SVGSVGElement>",
          },
          { name: "IExtendable" },
        ],
      },
      description: "",
    },
  },
};
export { i as IconReactJs };
