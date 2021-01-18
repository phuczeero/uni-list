import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Container } from './index';

export default {
  title: 'Components/Container',
  component: Container,
} as Meta;

const Template: Story = args => (
  <Container {...args}>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
      dapibus augue vitae sodales imperdiet. Vivamus dapibus ac velit at
      aliquet. Nullam vitae libero sapien. Nam id velit in diam volutpat sodales
      et at massa. Nam libero turpis, pharetra sit amet est sed, euismod
      condimentum nibh. Suspendisse semper risus vitae dolor tempus
      pellentesque. Phasellus eget placerat velit. Morbi sed neque ante. Sed
      vulputate elit at posuere iaculis. Vestibulum imperdiet convallis quam.
      Nulla ante eros, consectetur ut pretium vitae, efficitur tincidunt tortor.
      Praesent scelerisque eros ac mauris viverra fermentum. Nullam porta at
      dolor ultrices rutrum.
    </p>
  </Container>
);

export const Default = Template.bind({});
Default.args = {};
