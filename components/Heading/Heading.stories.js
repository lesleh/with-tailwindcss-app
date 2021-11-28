import React from "react";

import { Heading } from "./Heading";

export default {
  title: "Atoms/Heading",
  component: Heading,
  argTypes: {
    children: { control: "text" },
    element: {
      control: {
        type: "select",
        options: ["h1", "h2", "h3", "h4", "h5", "h6"],
      },
    },
  },
};

const Template = (args) => <Heading {...args} />;

export const Heading1 = Template.bind({});
Heading1.args = {
  element: "h1",
  children: "Heading 1",
};

export const Heading2 = Template.bind({});
Heading2.args = {
  element: "h2",
  children: "Heading 2",
};

export const Heading3 = Template.bind({});
Heading3.args = {
  element: "h3",
  children: "Heading 3",
};

export const Heading4 = Template.bind({});
Heading4.args = {
  element: "h4",
  children: "Heading 4",
};

export const Heading5 = Template.bind({});
Heading5.args = {
  element: "h5",
  children: "Heading 5",
};

export const Heading6 = Template.bind({});
Heading6.args = {
  element: "h6",
  children: "Heading 6",
};
