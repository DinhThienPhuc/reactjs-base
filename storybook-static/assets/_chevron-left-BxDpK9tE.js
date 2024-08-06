import "./_commonjsHelpers-BosuxZz1.js";
import "./_commonjsHelpers-BosuxZz1.js";
import { c as a } from "./clsx-B-dksMZM.js";
import { R as e } from "./index-Cs7sjTYM.js";

const m = ({
  className: t = "",
  name: r,
  color: n,
  width: s,
  height: o,
  htmlAttributes: i,
}) =>
  e.createElement(
    "svg",
    {
      ...i,
      xmlns: "http://www.w3.org/2000/svg",
      width: s || "24",
      height: o || "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      color: n,
      className: a("phantompurr-icon", "icon", `icon--${r}`, t),
    },
    e.createElement("path", { d: "m15 18-6-6 6-6" }),
  );
m.__docgenInfo = {
  description: "",
  methods: [],
  displayName: "IconChevronLeft",
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
export { m as IconChevronLeft };
