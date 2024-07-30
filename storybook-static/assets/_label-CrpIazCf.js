import "../sb-preview/runtime.js";
import "./_commonjsHelpers-BosuxZz1.js";
import { S as m } from "./_stories-P7578mYK.js";
import { c as o } from "./clsx-B-dksMZM.js";
import "./iframe-CMcQjm1L.js";
import "./index-BeZz0cvy.js";
import { R as i, r as l } from "./index-Cs7sjTYM.js";
import "./index-DJbV_2Cm.js";
import "./index-SJmvIjJq.js";
import "./index-ZNNDmq-k.js";
import "./index.esm-C-hvzvEL.js";
import "./jsx-runtime-BlAj40OV.js";
import "./styled-components.browser.esm-CMQQUr34.js";
import "./yup-BDbztMXE.js";

import { S as m } from "./_stories-P7578mYK.js";
import "./_commonjsHelpers-BosuxZz1.js";
import "./index.esm-C-hvzvEL.js";
import "./yup-BDbztMXE.js";
import "./iframe-CMcQjm1L.js";
import "../sb-preview/runtime.js";
import "./index-BeZz0cvy.js";
import "./jsx-runtime-BlAj40OV.js";
import "./styled-components.browser.esm-CMQQUr34.js";
import "./index-DJbV_2Cm.js";
import "./index-SJmvIjJq.js";
import "./index-ZNNDmq-k.js";
const t = l.memo(({ label: a = "", hasValue: e, htmlAttributes: r }) =>
  i.createElement(
    m.Label,
    {
      ...r,
      $hasValue: e,
      className: o("radio-group-label", e && "radio-group-label--hasValue"),
    },
    a,
  ),
);
t.displayName = "RadioGroupLabel";
t.__docgenInfo = {
  description: "",
  methods: [],
  displayName: "RadioGroupLabel",
  props: {
    label: {
      required: !1,
      tsType: { name: "string" },
      description: "",
      defaultValue: { value: '""', computed: !1 },
    },
    hasValue: { required: !1, tsType: { name: "boolean" }, description: "" },
    htmlAttributes: {
      required: !1,
      tsType: {
        name: "intersection",
        raw: "LabelHTMLAttributes<HTMLLabelElement> & IExtendable",
        elements: [
          {
            name: "LabelHTMLAttributes",
            elements: [{ name: "HTMLLabelElement" }],
            raw: "LabelHTMLAttributes<HTMLLabelElement>",
          },
          { name: "IExtendable" },
        ],
      },
      description: "",
    },
  },
};
export { t as RadioGroupLabel };
