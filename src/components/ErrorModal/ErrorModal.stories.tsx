import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import ErrorModal, { ErrorModalProps } from './ErrorModal';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'Example/Button',
  component: ErrorModal,
} as Meta;

const Template: Story<ErrorModalProps> = (args) => (
  <MemoryRouter>
    <ErrorModal {...args} />
  </MemoryRouter>
);

export const Simple = Template.bind({});
Simple.args = {
  message: 'something went wrong',
};

export const NotFound = Template.bind({});
NotFound.args = {
  message: '404: Not Found',
};
