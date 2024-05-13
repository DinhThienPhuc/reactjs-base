import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "custom",
      values: [
        {
          name: "custom",
          value: "#101418",
        },
      ],
    },
  },
};

export default preview;
