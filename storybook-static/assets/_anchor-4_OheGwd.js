import "./_commonjsHelpers-BosuxZz1.js";
import { c as a } from "./clsx-B-dksMZM.js";
import { R as e } from "./index-Cs7sjTYM.js";

import "./_commonjsHelpers-BosuxZz1.js";
const c = ({
  className: t = "",
  name: r,
  color: n,
  width: s,
  height: i,
  htmlAttributes: o,
}) =>
  e.createElement(
    "svg",
    {
      ...o,
      xmlns: "http://www.w3.org/2000/svg",
      width: s || "24",
      height: i || "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      color: n,
      className: a("phantomthief-icon", "icon", `icon--${r}`, t),
    },
    e.createElement("path", { d: "M12 22V8" }),
    e.createElement("path", { d: "M5 12H2a10 10 0 0 0 20 0h-3" }),
    e.createElement("circle", { cx: "12", cy: "5", r: "3" }),
  );
c.__docgenInfo = {
  description: "",
  methods: [],
  displayName: "IconAnchor",
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
export { c as IconAnchor };
