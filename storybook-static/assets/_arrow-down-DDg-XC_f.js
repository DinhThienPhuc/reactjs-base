import "./_commonjsHelpers-BosuxZz1.js";
import "./_commonjsHelpers-BosuxZz1.js";
import { c as a } from "./clsx-B-dksMZM.js";
import { R as e } from "./index-Cs7sjTYM.js";

const m = ({
  className: t = "",
  name: r,
  color: n,
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
      color: n,
      className: a("phantompurr-icon", "icon", `icon--${r}`, t),
    },
    e.createElement("path", { d: "M12 5v14" }),
    e.createElement("path", { d: "m19 12-7 7-7-7" }),
  );
m.__docgenInfo = {
  description: "",
  methods: [],
  displayName: "IconArrowDown",
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
export { m as IconArrowDown };
