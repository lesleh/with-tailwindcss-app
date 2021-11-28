import React from "react";

import { Button } from "./Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    label: { control: "text" },
    variant: {
      control: {
        type: "select",
        options: ["primary", "secondary", "ghost-primary", "ghost-secondary"],
      },
    },
    size: {
      control: {
        type: "select",
        options: ["small", "medium", "large"],
      },
    },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  variant: "primary",
  label: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
  label: "Button",
};

export const GhostPrimary = Template.bind({});
GhostPrimary.args = {
  variant: "ghost-primary",
  label: "Button",
};

export const GhostSecondary = Template.bind({});
GhostSecondary.args = {
  variant: "ghost-secondary",
  label: "Button",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Button",
};

export const Medium = Template.bind({});
Medium.args = {
  size: "medium",
  label: "Button",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Button",
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  label: "Button",
};
