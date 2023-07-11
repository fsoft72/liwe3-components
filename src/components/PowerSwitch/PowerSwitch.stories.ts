import type { Meta, StoryObj } from '@storybook/react';

import YourComponent from './index';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof YourComponent> = {
	component: YourComponent,
};

export default meta;
type Story = StoryObj<typeof YourComponent>;

export const FirstStory: Story = {
	args: {
		checked: true,
	},
};

export const SecondStory: Story = {
	args: {
		checked: false,
	},
};

export const SmallHeight: Story = {
	args: {
		checked: true,
		height: 100,
	},
};