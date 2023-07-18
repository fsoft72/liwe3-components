import type { Meta, StoryObj } from '@storybook/react';

import RadioButton from './index';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof RadioButton> = {
	title: 'Components/RadioButton',
	component: RadioButton,
};

export default meta;
type Story = StoryObj<typeof RadioButton>;

const radiosOptions = [
	{
		key: "1",
		value: "1",
		label: "Radio 1",
	},
	{
		key: "2",
		value: "2",
		label: "Radio 2",
	},
	{
		key: "3",
		value: "3",
		label: "Radio 3",
	},
];

export const FirstStory: Story = {
	args: {
        radios: radiosOptions,
		name: 'radio01',
		type: 'squared',
		direction: 'column',
		sx: {},
        onChange: (value:string) => { 
			console.log("=== Value rb01", value); return true; 
		}
	},
};

export const SecondStory: Story = {
	args: {
        radios: radiosOptions,
		name: 'radio02',
		type: 'rounded',
		direction: 'row',
		sx: {},
        onChange: (value:string) => { 
			console.log("=== Value rb02", value); return true; 
		}
	},
};