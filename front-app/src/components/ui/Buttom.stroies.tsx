import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    onClick: { action: "clicked" }, // Storybook에서 클릭 이벤트 확인 가능
    primary: { control: "boolean" }, // Storybook UI에서 primary 여부 변경 가능
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Primary Button",
    primary: true,
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary Button",
    primary: false,
  },
};

export const WithEmoji: Story = {
  args: {
    children: "🚀 Click me",
    primary: true,
  },
};
