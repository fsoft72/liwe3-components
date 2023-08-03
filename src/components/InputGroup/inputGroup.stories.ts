import type { Meta, StoryObj } from '@storybook/react';
import InputGroup, { TypeInputGroupButton } from './index';
import MkIcon from '../../icons/Inbox';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof InputGroup> = {
	component: InputGroup,
};
const myIcon = MkIcon( { w: 15, h: 15 } );
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
	label: myIcon,
	position: 'append',
	onClick: () => alert( 'Button 2' ),
};

export const TwoButtons: Story = {
	args: {
		label: 'Generic InputGroup',
		name: 'test-input',
		size: 'block',
		type: 'email',
		id: 'test-button',
		status: 'warning',
		message: 'This is a warning message',
		buttons: [ button01, button02 ],
		onChange: ( e ) => console.log( e.target.value ),
	},
};

export const OneButton: Story = {
	args: {
		label: 'Generic InputGroup',
		name: 'test-input',
		size: 'block',
		type: 'email',
		id: 'test-button',
		status: 'warning',
		message: 'This is a warning message',
		buttons: [ button02 ],
		onChange: ( e ) => console.log( e.target.value ),
	},
};