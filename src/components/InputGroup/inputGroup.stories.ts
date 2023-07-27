import type { Meta, StoryObj } from '@storybook/react';

import InputGroup, { TypeInputGroupButton } from './index';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof InputGroup> = {
	component: InputGroup,
};

export default meta;
type Story = StoryObj<typeof InputGroup>;

const button01: TypeInputGroupButton =
{
	label: '@',
	position: 'prepend',
	onClick: () => console.log( 'Button 1' ),
	action: 'button',
};

const button02: TypeInputGroupButton =
{
	label: '.com',
	position: 'append',
	onClick: () => console.log( 'Button 2' ),
	action: 'button',
};


export const FirstStory: Story = {
	args: {
		label: 'Generic InputGroup',
		size: 'block',
		type: 'email',
		attrs: {
			'data-test': 'test',
			'rel-test': 'rel',
		},
		id: 'test-button',
		buttons: [ button01, button02 ],

	},
};