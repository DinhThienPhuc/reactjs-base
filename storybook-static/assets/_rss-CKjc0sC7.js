import "./_commonjsHelpers-BosuxZz1.js";
import "./_commonjsHelpers-BosuxZz1.js";
import { c as a } from "./clsx-B-dksMZM.js";
import { R as e } from "./index-Cs7sjTYM.js";

const m = ({
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
      className: a("phantompurr-icon", "icon", `icon--${r}`, t),
    },
    e.createElement("path", { d: "M4 11a9 9 0 0 1 9 9" }),
    e.createElement("path", { d: "M4 4a16 16 0 0 1 16 16" }),
    e.createElement("circle", { cx: "5", cy: "19", r: "1" }),
  );
m.__docgenInfo = {
  description: "",
  methods: [],
  displayName: "IconRss",
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
export { m as IconRss };
