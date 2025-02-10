import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  //  decorators: [(story) => <div style={{ padding: 100 }}>{story()}</div>], //모든스토리 적용
};

export default preview;
