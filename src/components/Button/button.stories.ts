import type { Meta, StoryObj } from '@storybook/react';

import Button from './index';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Button> = {
	component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const FirstStory: Story = {
	args: {
        label: 'Generic Button', 
        onClick: () => alert( 'Button clicked' ),
		mode: 'primary',
		size: 'md',
		attrs: {
			'data-test': 'test',
			'rel-test': 'rel',
		},
		id: 'test-button',
	},
};