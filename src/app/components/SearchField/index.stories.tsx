import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { SearchField } from './index';

export default {
  title: 'Components/SearchField',
  component: SearchField,
} as Meta;

const Template: Story = args => <SearchField {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Search',
};
