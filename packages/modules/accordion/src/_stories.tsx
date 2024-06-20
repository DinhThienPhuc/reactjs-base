import {
  Bookmark as IconBookmark,
  Settings as IconSettings,
  Save as IconSave,
  Copy as IconCopy,
  ArrowDown as IconArrowDown,
} from "react-feather";
import { FlexBox, Typography } from "@phantomthief-react/components";
import type { Meta, StoryObj } from "@storybook/react";
import { FONT } from "@phantomthief-react/utils";
import { Accordion } from "./_components";
import React from "react";

const postIcon = (
  <FlexBox variant="span" gap="16px">
    <IconCopy width={16} height={16} />
    <IconSave width={16} height={16} />
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
        key: "accordion-item-1",
        label: <Typography font={FONT.VERNADA}>Accordion 1</Typography>,
        body: (
          <Typography font={FONT.VERNADA}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        ),
      },
      {
        key: "accordion-item-2",
        label: <Typography font={FONT.VERNADA}>Accordion 2</Typography>,
        preIcon: <IconSettings width={16} height={16} />,
        body: (
          <Typography font={FONT.VERNADA}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        ),
      },
      {
        key: "accordion-item-3",
        label: <Typography font={FONT.VERNADA}>Accordion disabled</Typography>,
        disabled: true,
        body: (
          <Typography font={FONT.VERNADA}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        ),
      },
      {
        key: "accordion-item-4",
        label: <Typography font={FONT.VERNADA}>Accordion 4</Typography>,
        body: (
          <Typography font={FONT.VERNADA}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        ),
        "data-web-test": "web-test-accordion-item-4",
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
    expandKeys: ["accordion-item-1", "accordion-item-3", "accordion-item-4"],
  },
};

export const ExpandOne: Story = {
  args: {
    isOnlyOneExpand: true,
  },
};

export const ExpandDefaultKeys: Story = {
  args: {
    expandKeys: ["accordion-item-1", "accordion-item-3", "accordion-item-4"],
  },
};

export const ExpandDefaultKeysInOnlyOneMode: Story = {
  args: {
    isOnlyOneExpand: true,
    expandKeys: ["accordion-item-1", "accordion-item-2"],
  },
};

export const CustomExpandIcon: Story = {
  args: {
    expandIcon: <IconArrowDown width={16} height={16} />,
  },
};

export const CustomPreIcon: Story = {
  args: {
    expandKeys: ["accordion-item-2"],
    preIcon: <IconBookmark width={16} height={16} />,
  },
};

export const CustomPostIcon: Story = {
  args: {
    preIcon: <IconBookmark width={16} height={16} />,
    postIcon,
  },
};
