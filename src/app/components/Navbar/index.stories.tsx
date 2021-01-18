import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { BrowserRouter } from 'react-router-dom';

import { Navbar } from './index';

export default {
  title: 'Components/Navbar',
  component: Navbar,
  decorators: [
    Story => (
      <BrowserRouter>
        <div style={{ maxWidth: 600, margin: 'auto' }}>
          <Story />
        </div>
      </BrowserRouter>
    ),
  ],
} as Meta;

const Template: Story = args => <Navbar {...args} />;

export const Default = Template.bind({});
Default.args = {};
