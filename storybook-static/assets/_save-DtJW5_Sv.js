import "./_commonjsHelpers-BosuxZz1.js";
import "./_commonjsHelpers-BosuxZz1.js";
import { c as o } from "./clsx-B-dksMZM.js";
import { R as e } from "./index-Cs7sjTYM.js";

const m = ({
  className: t = "",
  name: r,
  color: n,
  width: a,
  height: s,
  htmlAttributes: i,
}) =>
  e.createElement(
    "svg",
    {
      ...i,
      xmlns: "http://www.w3.org/2000/svg",
      width: a || "24",
      height: s || "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      color: n,
      className: o("phantompurr-icon", "icon", `icon--${r}`, t),
    },
    e.createElement("path", {
      d: "M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",
    }),
    e.createElement("path", { d: "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7" }),
    e.createElement("path", { d: "M7 3v4a1 1 0 0 0 1 1h7" }),
  );
m.__docgenInfo = {
  description: "",
  methods: [],
  displayName: "IconSave",
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
export { m as IconSave };
