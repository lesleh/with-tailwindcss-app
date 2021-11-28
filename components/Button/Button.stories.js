import React from "react";

import { Button } from "./Button";

export default {
  title: "Atoms/Button",
  component: Button,
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

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
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
