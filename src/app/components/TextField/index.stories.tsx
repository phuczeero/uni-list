import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { TextField } from './index';

export default {
  title: 'Components/TextField',
  component: TextField,
} as Meta;

const Template: Story = args => <TextField {...args} />;

export const Default = Template.bind({});
Default.args = {};
