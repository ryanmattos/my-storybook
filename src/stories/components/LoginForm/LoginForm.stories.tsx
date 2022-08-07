import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { within, userEvent } from '@storybook/testing-library'
import { expect  } from '@storybook/jest'
import { LoginForm } from './LoginForm';

export default {
   title: 'Example/Form',
   component: LoginForm
} as ComponentMeta<typeof LoginForm>

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />

export const EmptyForm = Template.bind({});

export const FilledForm = Template.bind({});
FilledForm.play = async ({ canvasElement }) => {
   const canvas = within(canvasElement);

   await userEvent.type(canvas.getByTestId('email'), 'email@test.com');

   await userEvent.type(canvas.getByTestId('password'), '123456');

   await userEvent.click(canvas.getByRole('button'));

   await expect(
      canvas.getByText(
         'Everything is good bro, keep going on'
      )
   ).toBeInTheDocument();
}