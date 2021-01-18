import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Card, CardProps } from './index';

export default {
  title: 'Components/Card',
  component: Card,
} as Meta;

const Template: Story<CardProps> = args => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Title',
  content: 'Card content',
};
