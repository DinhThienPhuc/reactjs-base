import "./_commonjsHelpers-BosuxZz1.js";
import { c as a } from "./clsx-B-dksMZM.js";
import { R as e } from "./index-Cs7sjTYM.js";

import "./_commonjsHelpers-BosuxZz1.js";
const m = ({
  className: t = "",
  name: n,
  color: r,
  width: o,
  height: s,
  htmlAttributes: i,
}) =>
  e.createElement(
    "svg",
    {
      ...i,
      xmlns: "http://www.w3.org/2000/svg",
      width: o || "24",
      height: s || "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      color: r,
      className: a("phantomthief-icon", "icon", `icon--${n}`, t),
    },
    e.createElement("path", { d: "m6 9 6 6 6-6" }),
  );
m.__docgenInfo = {
  description: "",
  methods: [],
  displayName: "IconChevronDown",
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
export { m as IconChevronDown };
