import type { Meta, StoryObj } from '@storybook/react';
import InputPassword from './index';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof InputPassword> = {
	component: InputPassword,
};
export default meta;
type Story = StoryObj<typeof InputPassword>;

export const Default: Story = {
	args: {
		label: 'Input Password',
		name: 'password',
		size: 'block',
		onChange: ( e ) => console.log( e ),
	},
};