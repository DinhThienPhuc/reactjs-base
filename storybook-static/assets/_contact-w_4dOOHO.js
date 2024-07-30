import "./_commonjsHelpers-BosuxZz1.js";
import { c as o } from "./clsx-B-dksMZM.js";
import { R as e } from "./index-Cs7sjTYM.js";

import "./_commonjsHelpers-BosuxZz1.js";
const c = ({
  className: t = "",
  name: r,
  color: n,
  width: i,
  height: s,
  htmlAttributes: a,
}) =>
  e.createElement(
    "svg",
    {
      ...a,
      xmlns: "http://www.w3.org/2000/svg",
      width: i || "24",
      height: s || "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      color: n,
      className: o("phantomthief-icon", "icon", `icon--${r}`, t),
    },
    e.createElement("path", { d: "M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2" }),
    e.createElement("rect", {
      width: "18",
      height: "18",
      x: "3",
      y: "4",
      rx: "2",
    }),
    e.createElement("circle", { cx: "12", cy: "10", r: "2" }),
    e.createElement("line", { x1: "8", x2: "8", y1: "2", y2: "4" }),
    e.createElement("line", { x1: "16", x2: "16", y1: "2", y2: "4" }),
  );
c.__docgenInfo = {
  description: "",
  methods: [],
  displayName: "IconContact",
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
export { c as IconContact };
