import "../sb-preview/runtime.js";
import "./_commonjsHelpers-BosuxZz1.js";
import { c as L } from "./clsx-B-dksMZM.js";
import "./iframe-CMcQjm1L.js";
import { u as l } from "./index-BKlm1OQS.js";
import "./index-BPgfAmNW.js";
import { Icon as i } from "./index-BU_VM_pW.js";
import { v as R } from "./index-BeZz0cvy.js";
import { R as e, r as y } from "./index-Cs7sjTYM.js";
import { S as _ } from "./index-DJbV_2Cm.js";
import { t as d } from "./index-SJmvIjJq.js";
import "./jsx-runtime-BlAj40OV.js";
import { c as I, p as s } from "./styled-components.browser.esm-CMQQUr34.js";

import { c as L } from "./clsx-B-dksMZM.js";
import { p as s, c as I } from "./styled-components.browser.esm-CMQQUr34.js";
import { S as _ } from "./index-DJbV_2Cm.js";
import { t as d } from "./index-SJmvIjJq.js";
import { Icon as i } from "./index-BU_VM_pW.js";
import { u as l } from "./index-BKlm1OQS.js";
import { v as R } from "./index-BeZz0cvy.js";
import "./_commonjsHelpers-BosuxZz1.js";
import "./iframe-CMcQjm1L.js";
import "../sb-preview/runtime.js";
import "./jsx-runtime-BlAj40OV.js";
import "./index-BPgfAmNW.js";
const m = {
    Container: s.div`
    color: #ffffff;
  `,
    ItemContainer: s.div`
    transition: margin 150ms ease-in-out;
    background-color: #121212;
    width: 100%;
    box-shadow:
      #00000033 0px 2px 1px -1px,
      #00000024 0px 1px 1px 0px,
      #0000001f 0px 1px 3px 0px;
    background-image: ease-in-out-gradient(#ffffff0d, #ffffff0d);
    will-change: margin;
    margin: ${({ $isExpanded: n }) => (n ? "16px 0px" : "0px")};

    &:not(:first-of-type) {
      border-top: 1px solid #ffffff1f;
    }

    &:first-of-type {
      margin-top: 0px;
    }

    &:last-of-type {
      margin-bottom: 0px;
    }
  `,
    ItemHeader: s.button`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    color: ${({ $disabled: n }) => (n ? "#ffffff80" : "#ffffff")};
    padding: 0px 16px;
    width: 100%;
    height: 48px;
    ${_}
    ${({ $disabled: n }) =>
      n
        ? I`
            background-color: #ffffff1f;
            pointer-events: none;
            cursor: default;
          `
        : I`
            background-color: transparent;
            cursor: pointer;
          `};
  `,
    ItemHeaderSection: s.span`
    display: flex;
    gap: 16px;
  `,
    ItemHeaderSectionGroup: s.span`
    display: flex;
    justify-content: space-between;
    flex-grow: 1;
  `,
    ItemHeaderLabel: s.span`
    font-family: ${d.VERNADA};
  `,
    ItemHeaderExpandIcon: s.span`
    display: flex;
    transition: all 250ms ease-in-out;
    width: 20px;
    height: 20px;
    transform: ${({ $isExpanded: n }) => (n ? "rotate(180deg)" : "none")};
  `,
    ItemContent: s.div`
    transition:
      max-height 150ms ease-in-out,
      opacity 150ms ease-in-out,
      padding-top 150ms ease-in-out,
      padding-bottom 150ms ease-in-out;
    padding-left: 16px;
    padding-right: 16px;
    overflow: hidden;
    will-change: max-height, opacity, padding-top, padding-bottom;

    ${({ $isExpanded: n }) =>
      n
        ? I`
            max-height: 200vh;
            padding-top: 16px;
            padding-bottom: 16px;
            opacity: 1;
          `
        : I`
            max-height: 0px;
            padding-top: 0px;
            padding-bottom: 0px;
            opacity: 0;
          `};
  `,
  },
  h = y.memo(({ expandIcon: n, isExpanded: r, htmlAttributes: o }) =>
    e.createElement(
      m.ItemHeaderExpandIcon,
      {
        ...o,
        $isExpanded: r,
        className: "accordion-item__header__right__expand-icon",
      },
      n ?? e.createElement(i, { name: "chevron-down" }),
    ),
  );
h.displayName = "AccordionItemExpandIcon";
h.__docgenInfo = {
  description: "",
  methods: [],
  displayName: "AccordionItemExpandIcon",
  props: {
    expandIcon: {
      required: !1,
      tsType: { name: "ReactNode" },
      description: "",
    },
    isExpanded: { required: !0, tsType: { name: "boolean" }, description: "" },
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
const M = y.memo(
  ({
    label: n,
    preIcon: r,
    postIcon: o,
    expandIcon: c,
    disabled: b,
    isExpanded: f,
    isOnlyOneExpand: a,
    id: x,
    expandIconHtmlAttributes: E,
    itemHeaderHtmlAttributes: T,
    itemHeaderLabelHtmlAttributes: p,
    setItemDictionary: t,
  }) => {
    const A = (u) => () => {
        t(
          a
            ? (H) => ({
                ...Object.keys(H).reduce((S, D) => ((S[D] = !1), S), {}),
                [u]: !H[u],
              })
            : (H) => ({ ...H, [u]: !H[u] }),
        );
      },
      g = y.useMemo(
        () =>
          e.createElement(
            m.ItemHeaderSectionGroup,
            null,
            e.createElement(
              m.ItemHeaderSection,
              { className: "accordion-item__header__left" },
              r,
              e.createElement(
                l,
                {
                  ...p,
                  font: d.VERNADA,
                  className: "accordion-item__header-label",
                },
                n,
              ),
            ),
            e.createElement(
              m.ItemHeaderSection,
              { className: "accordion-item__header__right" },
              o,
            ),
          ),
        [p, n, o, r],
      );
    return e.createElement(
      m.ItemHeader,
      {
        ...T,
        $disabled: b,
        className: "accordion-item__header",
        onClick: A(x),
      },
      g,
      e.createElement(h, { htmlAttributes: E, expandIcon: c, isExpanded: f }),
    );
  },
);
M.displayName = "AccordionItemHeader";
M.__docgenInfo = {
  description: "",
  methods: [],
  displayName: "AccordionItemHeader",
  props: {
    label: { required: !0, tsType: { name: "string" }, description: "" },
    preIcon: { required: !1, tsType: { name: "ReactNode" }, description: "" },
    postIcon: { required: !1, tsType: { name: "ReactNode" }, description: "" },
    expandIcon: {
      required: !1,
      tsType: { name: "ReactNode" },
      description: "",
    },
    disabled: { required: !1, tsType: { name: "boolean" }, description: "" },
    isExpanded: { required: !0, tsType: { name: "boolean" }, description: "" },
    isOnlyOneExpand: {
      required: !0,
      tsType: { name: "boolean" },
      description: "",
    },
    id: { required: !0, tsType: { name: "string" }, description: "" },
    expandIconHtmlAttributes: {
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
    itemHeaderHtmlAttributes: {
      required: !1,
      tsType: {
        name: "intersection",
        raw: "HTMLAttributes<HTMLButtonElement> & IExtendable",
        elements: [
          {
            name: "HTMLAttributes",
            elements: [{ name: "HTMLButtonElement" }],
            raw: "HTMLAttributes<HTMLButtonElement>",
          },
          { name: "IExtendable" },
        ],
      },
      description: "",
    },
    itemHeaderLabelHtmlAttributes: {
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
    setItemDictionary: {
      required: !0,
      tsType: {
        name: "Dispatch",
        elements: [
          {
            name: "SetStateAction",
            elements: [
              {
                name: "Record",
                elements: [{ name: "string" }, { name: "boolean" }],
                raw: "Record<string, boolean>",
              },
            ],
            raw: "SetStateAction<TItemDictionary>",
          },
        ],
        raw: "Dispatch<SetStateAction<TItemDictionary>>",
      },
      description: "",
    },
  },
};
const w = y.memo(
  ({
    label: n,
    body: r,
    preIcon: o,
    postIcon: c,
    expandIcon: b,
    disabled: f,
    isExpanded: a,
    isOnlyOneExpand: x,
    id: E,
    bodyHtmlAttributes: T,
    expandIconHtmlAttributes: p,
    itemHeaderHtmlAttributes: t,
    itemHeaderLabelHtmlAttributes: A,
    htmlAttributes: g,
    setItemDictionary: u,
  }) =>
    e.createElement(
      m.ItemContainer,
      {
        ...g,
        $isExpanded: a,
        className: L("accordion-item", a && "accordion-item--isExpanded"),
      },
      e.createElement(M, {
        label: n,
        preIcon: o,
        postIcon: c,
        expandIcon: b,
        disabled: f,
        isExpanded: a,
        id: E,
        isOnlyOneExpand: x,
        itemHeaderHtmlAttributes: t,
        expandIconHtmlAttributes: p,
        itemHeaderLabelHtmlAttributes: A,
        setItemDictionary: u,
      }),
      e.createElement(
        m.ItemContent,
        {
          ...T,
          $isExpanded: a,
          className: L(
            "accordion-item__content",
            a && "accordion-item__content--isExpanded",
          ),
        },
        r,
      ),
    ),
);
w.displayName = "AccordionItem";
w.__docgenInfo = {
  description: "",
  methods: [],
  displayName: "AccordionItem",
  props: {
    id: { required: !0, tsType: { name: "string" }, description: "" },
    label: { required: !0, tsType: { name: "string" }, description: "" },
    body: { required: !0, tsType: { name: "ReactNode" }, description: "" },
    preIcon: { required: !1, tsType: { name: "ReactNode" }, description: "" },
    postIcon: { required: !1, tsType: { name: "ReactNode" }, description: "" },
    expandIcon: {
      required: !1,
      tsType: { name: "ReactNode" },
      description: "",
    },
    disabled: { required: !1, tsType: { name: "boolean" }, description: "" },
    bodyHtmlAttributes: {
      required: !1,
      tsType: {
        name: "intersection",
        raw: "HTMLAttributes<HTMLDivElement> & IExtendable",
        elements: [
          {
            name: "HTMLAttributes",
            elements: [{ name: "HTMLDivElement" }],
            raw: "HTMLAttributes<HTMLDivElement>",
          },
          { name: "IExtendable" },
        ],
      },
      description: "",
    },
    htmlAttributes: {
      required: !1,
      tsType: {
        name: "intersection",
        raw: "HTMLAttributes<HTMLDivElement> & IExtendable",
        elements: [
          {
            name: "HTMLAttributes",
            elements: [{ name: "HTMLDivElement" }],
            raw: "HTMLAttributes<HTMLDivElement>",
          },
          { name: "IExtendable" },
        ],
      },
      description: "",
    },
    expandIconHtmlAttributes: {
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
    itemHeaderHtmlAttributes: {
      required: !1,
      tsType: {
        name: "intersection",
        raw: `ButtonHTMLAttributes<HTMLButtonElement> &
IExtendable`,
        elements: [
          {
            name: "ButtonHTMLAttributes",
            elements: [{ name: "HTMLButtonElement" }],
            raw: "ButtonHTMLAttributes<HTMLButtonElement>",
          },
          { name: "IExtendable" },
        ],
      },
      description: "",
    },
    itemHeaderLabelHtmlAttributes: {
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
    isExpanded: { required: !0, tsType: { name: "boolean" }, description: "" },
    isOnlyOneExpand: {
      required: !0,
      tsType: { name: "boolean" },
      description: "",
    },
    setItemDictionary: {
      required: !0,
      tsType: {
        name: "Dispatch",
        elements: [
          {
            name: "SetStateAction",
            elements: [
              {
                name: "Record",
                elements: [{ name: "string" }, { name: "boolean" }],
                raw: "Record<string, boolean>",
              },
            ],
            raw: "SetStateAction<TItemDictionary>",
          },
        ],
        raw: "Dispatch<SetStateAction<TItemDictionary>>",
      },
      description: "",
    },
  },
};
const q = ({
  items: n,
  className: r,
  isOnlyOneExpand: o = !1,
  expandIds: c,
  preIcon: b = null,
  postIcon: f = null,
  expandIcon: a = null,
  disabled: x = !1,
  htmlAttributes: E,
}) => {
  const [T, p] = y.useState(() =>
    c ? c.reduce((t, A) => ((t[A] = !0), t), {}) : {},
  );
  return e.createElement(
    m.Container,
    { ...E, className: L("accordion", r) },
    n == null
      ? void 0
      : n.map((t) =>
          e.createElement(w, {
            key: t.id,
            label: t.label,
            body: t.body,
            preIcon: b ?? t.preIcon,
            postIcon: f ?? t.postIcon,
            expandIcon: a ?? t.expandIcon,
            disabled: x || t.disabled,
            isExpanded: t.id ? !!T[t.id] : !1,
            isOnlyOneExpand: o,
            id: t.id,
            bodyHtmlAttributes: t.bodyHtmlAttributes,
            expandIconHtmlAttributes: t.expandIconHtmlAttributes,
            itemHeaderHtmlAttributes: t.itemHeaderHtmlAttributes,
            itemHeaderLabelHtmlAttributes: t.itemHeaderLabelHtmlAttributes,
            htmlAttributes: t.htmlAttributes,
            setItemDictionary: p,
          }),
        ),
  );
};
q.__docgenInfo = {
  description: "",
  methods: [],
  displayName: "Accordion",
  props: {
    items: {
      required: !1,
      tsType: {
        name: "Array",
        elements: [{ name: "IAccordionItem" }],
        raw: "IAccordionItem[]",
      },
      description: "",
    },
    className: { required: !1, tsType: { name: "string" }, description: "" },
    disabled: {
      required: !1,
      tsType: { name: "boolean" },
      description: "",
      defaultValue: { value: "false", computed: !1 },
    },
    preIcon: {
      required: !1,
      tsType: { name: "ReactNode" },
      description: "",
      defaultValue: { value: "null", computed: !1 },
    },
    postIcon: {
      required: !1,
      tsType: { name: "ReactNode" },
      description: "",
      defaultValue: { value: "null", computed: !1 },
    },
    expandIcon: {
      required: !1,
      tsType: { name: "ReactNode" },
      description: "",
      defaultValue: { value: "null", computed: !1 },
    },
    expandIds: {
      required: !1,
      tsType: {
        name: "Array",
        elements: [{ name: "string" }],
        raw: "string[]",
      },
      description: "",
    },
    isOnlyOneExpand: {
      required: !1,
      tsType: { name: "boolean" },
      description: "",
      defaultValue: { value: "false", computed: !1 },
    },
    htmlAttributes: {
      required: !1,
      tsType: {
        name: "intersection",
        raw: "HTMLAttributes<HTMLDivElement> & IExtendable",
        elements: [
          {
            name: "HTMLAttributes",
            elements: [{ name: "HTMLDivElement" }],
            raw: "HTMLAttributes<HTMLDivElement>",
          },
          { name: "IExtendable" },
        ],
      },
      description: "",
    },
  },
};
const N = e.createElement(
    R,
    { variant: "span", gap: "16px" },
    e.createElement(i, { name: "copy", width: 16, height: 16 }),
    e.createElement(i, { name: "save", width: 16, height: 16 }),
  ),
  F = {
    title: "Modules/Accordion",
    component: q,
    decorators: [
      (n) =>
        e.createElement(
          "div",
          {
            style: {
              color: "#ffffff",
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
            },
          },
          e.createElement(n, null),
        ),
    ],
    parameters: { layout: "centered" },
    tags: ["autodocs"],
    argTypes: {},
    args: {
      items: [
        {
          id: "accordion-item-1",
          label: "Accordion 1",
          body: e.createElement(
            l,
            { font: d.VERNADA },
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
          ),
        },
        {
          id: "accordion-item-2",
          label: "Accordion 2",
          preIcon: e.createElement(i, {
            name: "settings",
            width: 16,
            height: 16,
          }),
          body: e.createElement(
            l,
            { font: d.VERNADA },
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
          ),
        },
        {
          id: "accordion-item-3",
          label: "Accordion disabled",
          disabled: !0,
          body: e.createElement(
            l,
            { font: d.VERNADA },
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
          ),
        },
        {
          id: "accordion-item-4",
          label: "Accordion 4",
          body: e.createElement(
            l,
            { font: d.VERNADA },
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
          ),
        },
      ],
    },
  },
  J = {},
  Q = {
    args: {
      disabled: !0,
      expandIds: ["accordion-item-1", "accordion-item-3", "accordion-item-4"],
    },
  },
  U = { args: { isOnlyOneExpand: !0 } },
  X = {
    args: {
      expandIds: ["accordion-item-1", "accordion-item-3", "accordion-item-4"],
    },
  },
  Y = {
    args: {
      isOnlyOneExpand: !0,
      expandIds: ["accordion-item-1", "accordion-item-2"],
    },
  },
  Z = {
    args: {
      expandIcon: e.createElement(i, {
        name: "arrow-down",
        width: 16,
        height: 16,
      }),
    },
  },
  ee = {
    args: {
      expandIds: ["accordion-item-2"],
      preIcon: e.createElement(i, { name: "bookmark", width: 16, height: 16 }),
    },
  },
  te = {
    args: {
      preIcon: e.createElement(i, { name: "bookmark", width: 16, height: 16 }),
      postIcon: N,
    },
  },
  ne = {
    args: {
      preIcon: e.createElement(i, { name: "bookmark", width: 16, height: 16 }),
      postIcon: N,
      items: [
        {
          id: "accordion-item-1",
          label: "Accordion 1",
          body: e.createElement(
            l,
            { font: d.VERNADA },
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
          ),
          htmlAttributes: { "aria-expanded": "true" },
          bodyHtmlAttributes: { "data-webid": "accordion-item-1-body" },
          expandIconHtmlAttributes: {
            "aria-controls": "accordion-item-1-controls-expand-icon",
          },
          itemHeaderHtmlAttributes: { "data-testid": "test-accordion-item-1" },
        },
        {
          id: "accordion-item-2",
          label: "Accordion 2",
          preIcon: e.createElement(i, {
            name: "settings",
            width: 16,
            height: 16,
          }),
          body: e.createElement(
            l,
            { font: d.VERNADA },
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
          ),
        },
      ],
    },
  };
export {
  Z as CustomExpandIcon,
  te as CustomPostIcon,
  ee as CustomPreIcon,
  J as Default,
  Q as DisableAll,
  X as ExpandDefaultKeys,
  Y as ExpandDefaultKeysInOnlyOneMode,
  U as ExpandOne,
  ne as WithHTMLAttributes,
  F as default,
};
