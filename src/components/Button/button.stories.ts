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
        label: 'Click me', 
        onClick: () => alert( 'Button clicked' ),
		btnStyle: 'primary',
		btnSize: 'small',
		extraAttrs: {
			'data-name': 'your data',
			'aria-label': 'your label',
		}
	},
};