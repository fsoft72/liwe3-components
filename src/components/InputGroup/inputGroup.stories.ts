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
	label: 'user@',
	position: 'prepend',
	onClick: () => alert( 'Button 1' ),
};

const button02: TypeInputGroupButton =
{
	label: '.com',
	position: 'append',
	onClick: () => alert( 'Button 2' ),
};

export const FirstStory: Story = {
	args: {
		label: 'Generic InputGroup',
		name: 'test-input',
		size: 'block',
		type: 'email',
		attrs: {
			'data-test': 'test',
			'rel-test': 'rel',
		},
		id: 'test-button',
		status: 'warning',
		message: 'This is a warning message',
		buttons: [ button01, button02 ],
		onChange: ( e ) => console.log( e.target.value ),
	},
};