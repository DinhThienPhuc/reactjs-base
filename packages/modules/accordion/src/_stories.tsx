import React from "react";

import { FlexBox } from "@phantompurr-react/components.flex-box";
import { Icon } from "@phantompurr-react/components.icon";
import { Typography } from "@phantompurr-react/components.typography";
import { FONT } from "@phantompurr-react/utils";
import type { Meta, StoryObj } from "@storybook/react";

import { Accordion } from "./_components";

const postIcon = (
  <FlexBox variant="span" gap="16px">
    <Icon name="copy" width={16} height={16} />
    <Icon name="save" width={16} height={16} />
  </FlexBox>
);

const meta = {
  title: "Modules/Accordion",
  component: Accordion,
  decorators: [
    (StoryComponent) => (
      <div
        style={{
          color: "#ffffff",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
        }}
      >
        <StoryComponent />
      </div>
    ),
  ],
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {
    items: [
      {
        id: "accordion-item-1",
        label: "Accordion 1",
        body: (
          <Typography font={FONT.VERNADA}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        ),
      },
      {
        id: "accordion-item-2",
        label: "Accordion 2",
        preIcon: <Icon name="settings" width={16} height={16} />,
        body: (
          <Typography font={FONT.VERNADA}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        ),
      },
      {
        id: "accordion-item-3",
        label: "Accordion disabled",
        disabled: true,
        body: (
          <Typography font={FONT.VERNADA}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        ),
      },
      {
        id: "accordion-item-4",
        label: "Accordion 4",
        body: (
          <Typography font={FONT.VERNADA}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        ),
      },
    ],
  },
} satisfies Meta<typeof Accordion>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const DisableAll: Story = {
  args: {
    disabled: true,
    expandIds: ["accordion-item-1", "accordion-item-3", "accordion-item-4"],
  },
};

export const ExpandOne: Story = {
  args: {
    isOnlyOneExpand: true,
  },
};

export const ExpandDefaultKeys: Story = {
  args: {
    expandIds: ["accordion-item-1", "accordion-item-3", "accordion-item-4"],
  },
};

export const ExpandDefaultKeysInOnlyOneMode: Story = {
  args: {
    isOnlyOneExpand: true,
    expandIds: ["accordion-item-1", "accordion-item-2"],
  },
};

export const CustomExpandIcon: Story = {
  args: {
    expandIcon: <Icon name="arrow-down" width={16} height={16} />,
  },
};

export const CustomPreIcon: Story = {
  args: {
    expandIds: ["accordion-item-2"],
    preIcon: <Icon name="bookmark" width={16} height={16} />,
  },
};

export const CustomPostIcon: Story = {
  args: {
    preIcon: <Icon name="bookmark" width={16} height={16} />,
    postIcon,
  },
};

export const WithHTMLAttributes: Story = {
  args: {
    preIcon: <Icon name="bookmark" width={16} height={16} />,
    postIcon,
    htmlAttributes: {
      "data-testid": "test-accordion",
    },
    items: [
      {
        id: "accordion-item-1",
        label: "Accordion 1",
        body: (
          <Typography font={FONT.VERNADA}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        ),
        htmlAttributes: {
          "aria-expanded": "true",
        },
        bodyHtmlAttributes: {
          "data-webid": "accordion-item-1-body",
        },
        expandIconHtmlAttributes: {
          "aria-controls": "accordion-item-1-controls-expand-icon",
        },
        itemHeaderHtmlAttributes: {
          "data-testid": "test-accordion-item-1",
        },
        itemHeaderLabelHtmlAttributes: {
          "data-testid": "test-accordion-item-1-label",
        },
      },
      {
        id: "accordion-item-2",
        label: "Accordion 2",
        preIcon: <Icon name="settings" width={16} height={16} />,
        body: (
          <Typography font={FONT.VERNADA}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        ),
      },
    ],
  },
};
