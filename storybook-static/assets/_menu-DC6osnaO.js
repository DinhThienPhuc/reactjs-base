import "../sb-preview/runtime.js";
import "./_commonjsHelpers-BosuxZz1.js";
import { S as o } from "./_stories-PhsChQBC.js";
import { c as i } from "./clsx-B-dksMZM.js";
import "./iframe-CMcQjm1L.js";
import "./index-BMdlDBjA.js";
import "./index-BPgfAmNW.js";
import "./index-BU_VM_pW.js";
import { R as d, r as m } from "./index-Cs7sjTYM.js";
import "./index-DJbV_2Cm.js";
import "./index-SJmvIjJq.js";
import "./index-ZNNDmq-k.js";
import "./index-jqde5cy2.js";
import "./index.esm-C-hvzvEL.js";
import "./jsx-runtime-BlAj40OV.js";
import "./styled-components.browser.esm-CMQQUr34.js";
import "./yup-BDbztMXE.js";

import { S as o } from "./_stories-PhsChQBC.js";
import "./_commonjsHelpers-BosuxZz1.js";
import "./index.esm-C-hvzvEL.js";
import "./yup-BDbztMXE.js";
import "./index-BU_VM_pW.js";
import "./iframe-CMcQjm1L.js";
import "../sb-preview/runtime.js";
import "./jsx-runtime-BlAj40OV.js";
import "./index-BPgfAmNW.js";
import "./styled-components.browser.esm-CMQQUr34.js";
import "./index-DJbV_2Cm.js";
import "./index-SJmvIjJq.js";
import "./index-BMdlDBjA.js";
import "./index-jqde5cy2.js";
import "./index-ZNNDmq-k.js";
const p = m.memo(
  ({
    value: t,
    displayedValue: e,
    label: l,
    disabled: r,
    htmlAttributes: n,
    handleSelectOption: s,
  }) =>
    d.createElement(
      o.Option,
      {
        ...n,
        $selected: t === e,
        $disabled: r,
        key: t,
        className: i(
          "select-option",
          t === e && "select-option--selected",
          r && "select-option--disabled",
        ),
        onClick: s(t),
      },
      l,
    ),
);
p.displayName = "SelectOption";
p.__docgenInfo = {
  description: "",
  methods: [],
  displayName: "SelectOption",
  props: {
    value: { required: !0, tsType: { name: "string" }, description: "" },
    label: { required: !0, tsType: { name: "ReactNode" }, description: "" },
    disabled: { required: !1, tsType: { name: "boolean" }, description: "" },
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
    displayedValue: {
      required: !1,
      tsType: { name: "string" },
      description: "",
    },
    handleSelectOption: {
      required: !0,
      tsType: {
        name: "signature",
        type: "function",
        raw: "(value: string) => MouseEventHandler<HTMLSpanElement>",
        signature: {
          arguments: [{ type: { name: "string" }, name: "value" }],
          return: {
            name: "MouseEventHandler",
            elements: [{ name: "HTMLSpanElement" }],
            raw: "MouseEventHandler<HTMLSpanElement>",
          },
        },
      },
      description: "",
    },
  },
};
const u = m.forwardRef(
  (
    {
      options: t,
      position: e,
      isShowed: l,
      currentValue: r,
      optionGroupClassName: n,
      htmlAttributes: s,
      selectOption: c,
    },
    h,
  ) => {
    const b = m.useMemo(
      () =>
        t.map((a) =>
          d.createElement(p, {
            key: a.value,
            value: a.value,
            displayedValue: r,
            label: a.label,
            disabled: !!a.disabled,
            htmlAttributes: a.htmlAttributes,
            handleSelectOption: c,
          }),
        ),
      [r, t, c],
    );
    return d.createElement(
      o.OptionGroup,
      {
        ...s,
        $position: e,
        $isShowed: l,
        ref: h,
        className: i(
          "select-options",
          !!(e != null && e.top) && `select-options--position-top-${e.top}`,
          !!(e != null && e.left) && `select-options--position-left-${e.left}`,
          !!(e != null && e.height) &&
            `select-options--position-height-${e.height}`,
          !!(e != null && e.width) &&
            `select-options--position-width-${e.width}`,
          l && "select-options--showed",
          n,
        ),
      },
      b,
    );
  },
);
u.displayName = "SelectMenu";
u.__docgenInfo = { description: "", methods: [], displayName: "SelectMenu" };
export { u as SelectMenu };
