import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Badge } from './index';

export default {
  title: 'Components/Badge',
  component: Badge,
} as Meta;

const Template: Story = args => <Badge {...args}>Badge</Badge>;

export const Default = Template.bind({});
Default.args = {};
