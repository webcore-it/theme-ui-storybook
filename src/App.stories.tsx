import React from "react";
import {Meta, Story} from "@storybook/react/types-6-0";

import App from "./App";

export default {
    title: "App",
    component: App
} as Meta;

const Template: Story = (args) => <App {...args} />;

export const Default = Template.bind({});
