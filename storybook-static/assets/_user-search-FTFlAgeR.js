import "./_commonjsHelpers-BosuxZz1.js";
import "./_commonjsHelpers-BosuxZz1.js";
import { c as o } from "./clsx-B-dksMZM.js";
import { R as e } from "./index-Cs7sjTYM.js";

const c = ({
  className: t = "",
  name: r,
  color: n,
  width: s,
  height: i,
  htmlAttributes: a,
}) =>
  e.createElement(
    "svg",
    {
      ...a,
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
      className: o("phantompurr-icon", "icon", `icon--${r}`, t),
    },
    e.createElement("circle", { cx: "10", cy: "7", r: "4" }),
    e.createElement("path", { d: "M10.3 15H7a4 4 0 0 0-4 4v2" }),
    e.createElement("circle", { cx: "17", cy: "17", r: "3" }),
    e.createElement("path", { d: "m21 21-1.9-1.9" }),
  );
c.__docgenInfo = {
  description: "",
  methods: [],
  displayName: "IconUserSearch",
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
export { c as IconUserSearch };
