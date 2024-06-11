import { Typography } from "@phantomthief-react/components";
import type { Meta, StoryObj } from "@storybook/react";
import React, { useState, MouseEvent } from "react";
import { FONT } from "@phantomthief-react/utils";
import { ResponsiveTopnav } from "./_components";

const meta = {
  title: "Components/Responsive Topnav",
  component: ResponsiveTopnav,
  decorators: [
    (StoryComponent) => (
      <div style={{ margin: "-50vw" }}>
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
        key: "home",
        content: <Typography font={FONT.VERNADA}>Home</Typography>,
      },
      {
        key: "about-us",
        content: <Typography font={FONT.VERNADA}>About Us</Typography>,
      },
      {
        key: "categories",
        content: <Typography font={FONT.VERNADA}>Categories</Typography>,
      },
      {
        key: "products",
        content: <Typography font={FONT.VERNADA}>Products</Typography>,
      },
    ],
  },
} satisfies Meta<typeof ResponsiveTopnav>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: function Render(args) {
    const [activeKey, setActiveKey] = useState("");

    const handleSelectMenuItem = (
      _: MouseEvent<HTMLButtonElement>,
      key?: string,
    ) => {
      key && setActiveKey(key);
    };

    return (
      <ResponsiveTopnav
        {...args}
        isStandalone={true}
        activeKey={activeKey}
        onClick={handleSelectMenuItem}
      />
    );
  },
};

// export const ParentController: Story = {
//   render: function Render() {
//     const [value, setValue] = useState(false);

//     const handleClick = useCallback((isActivated: boolean) => {
//       setValue(isActivated);
//     }, []);

//     const handleParentChange = useCallback(
//       (value: boolean) => () => {
//         setValue(value);
//       },
//       [],
//     );

//     console.log("ParentController: ", value);

//     return (
//       <div style={{ display: "inline-flex", flexDirection: "column" }}>
//         <HamburgerMenu
//           isStandalone={false}
//           active={value}
//           onClick={handleClick}
//         />
//         <button style={{ marginTop: 48 }} onClick={handleParentChange(false)}>
//           Trigger hamburger inactive
//         </button>
//         <button style={{ marginTop: 24 }} onClick={handleParentChange(true)}>
//           Trigger hamburger active
//         </button>
//       </div>
//     );
//   },
// };

// export const PropsControllerSelect: Story = {
//   render: function Render() {
//     const [value, setValue] = useState(false);

//     const handleClick = useCallback((isActivated: boolean) => {
//       setValue(isActivated);
//     }, []);

//     console.log("PropsControllerSelect: ", value);

//     return (
//       <div style={{ display: "inline-flex", flexDirection: "column" }}>
//         <HamburgerMenu
//           isStandalone={false}
//           active={value}
//           onClick={handleClick}
//         />
//       </div>
//     );
//   },
// };
