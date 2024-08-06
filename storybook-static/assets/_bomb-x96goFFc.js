import "./_commonjsHelpers-BosuxZz1.js";
import "./_commonjsHelpers-BosuxZz1.js";
import { c as i } from "./clsx-B-dksMZM.js";
import { R as e } from "./index-Cs7sjTYM.js";

const m = ({
  className: t = "",
  name: r,
  color: n,
  width: a,
  height: s,
  htmlAttributes: o,
}) =>
  e.createElement(
    "svg",
    {
      ...o,
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
      className: i("phantompurr-icon", "icon", `icon--${r}`, t),
    },
    e.createElement("path", { stroke: "none", d: "M0 0h24v24H0z" }),
    e.createElement("path", {
      d: "M15.349 5.349l3.301 3.301a1.2 1.2 0 0 1 0 1.698l-.972 .972a7.5 7.5 0 1 1 -5 -5l.972 -.972a1.2 1.2 0 0 1 1.698 0z",
    }),
    e.createElement("path", {
      d: "M17 7l1.293 -1.293a2.414 2.414 0 0 0 .707 -1.707a1 1 0 0 1 1 -1h1",
    }),
    e.createElement("path", { d: "M7 13a3 3 0 0 1 3 -3" }),
  );
m.__docgenInfo = {
  description: "",
  methods: [],
  displayName: "IconBomb",
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
export { m as IconBomb };
