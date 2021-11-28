import React from "react";

import { Heading } from "./Heading";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Heading",
  component: Heading,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
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

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Heading {...args} />;

export const Heading1 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Heading1.args = {
  element: "h1",
  children: "Heading 1",
};

export const Heading2 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Heading2.args = {
  element: "h2",
  children: "Heading 2",
};

export const Heading3 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Heading3.args = {
  element: "h3",
  children: "Heading 3",
};

export const Heading4 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Heading4.args = {
  element: "h4",
  children: "Heading 4",
};

export const Heading5 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Heading5.args = {
  element: "h5",
  children: "Heading 5",
};

export const Heading6 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Heading6.args = {
  element: "h6",
  children: "Heading 6",
};
