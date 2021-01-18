import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Button } from './index';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const Template: Story = args => <Button {...args}>Button</Button>;

export const Primary = Template.bind({});
Primary.args = {};

export const Outline = Template.bind({});
Outline.args = {
  variant: 'outline',
};
