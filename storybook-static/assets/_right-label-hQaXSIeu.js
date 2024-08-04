import "../sb-preview/runtime.js";
import "./_commonjsHelpers-BosuxZz1.js";
import { S as m } from "./_stories-z-l83Zdn.js";
import { c as r } from "./clsx-B-dksMZM.js";
import "./iframe-CMcQjm1L.js";
import { r as l, R as s } from "./index-Cs7sjTYM.js";
import "./index-SJmvIjJq.js";
import "./index-ZNNDmq-k.js";
import "./index.esm-C-hvzvEL.js";
import "./styled-components.browser.esm-CMQQUr34.js";

import { S as m } from "./_stories-z-l83Zdn.js";
import "./_commonjsHelpers-BosuxZz1.js";
import "./index.esm-C-hvzvEL.js";
import "./iframe-CMcQjm1L.js";
import "../sb-preview/runtime.js";
import "./index-ZNNDmq-k.js";
import "./styled-components.browser.esm-CMQQUr34.js";
import "./index-SJmvIjJq.js";
const a = l.memo(
  ({ rightLabel: e = "", disabled: t = !1, htmlAttributes: i }) =>
    e
      ? s.createElement(
          m.RightLabel,
          {
            ...i,
            $disabled: t,
            className: r(
              "switch-label",
              "switch-label__right",
              t && "switch-label__right--disabled",
            ),
          },
          e,
        )
      : null,
);
a.displayName = "SwitchLabelRight";
a.__docgenInfo = {
  description: "",
  methods: [],
  displayName: "SwitchLabelRight",
  props: {
    rightLabel: {
      required: !1,
      tsType: { name: "string" },
      description: "",
      defaultValue: { value: '""', computed: !1 },
    },
    disabled: {
      required: !1,
      tsType: { name: "boolean" },
      description: "",
      defaultValue: { value: "false", computed: !1 },
    },
    htmlAttributes: {
      required: !1,
      tsType: {
        name: "intersection",
        raw: "HTMLAttributes<HTMLSpanElement> & IExtendable",
        elements: [
          {
            name: "HTMLAttributes",
            elements: [{ name: "HTMLSpanElement" }],
            raw: "HTMLAttributes<HTMLSpanElement>",
          },
          { name: "IExtendable" },
        ],
      },
      description: "",
    },
  },
};
export { a as SwitchLabelRight };
