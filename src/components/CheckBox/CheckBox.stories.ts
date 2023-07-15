
import type { Meta, StoryObj } from '@storybook/react';

import CheckBox from './index';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof CheckBox> = {
	component: CheckBox,
};

export default meta;
type Story = StoryObj<typeof CheckBox>;

export const FirstStory: Story = {
	args: {
        name: 'cb01',
        label: 'Squared Checkbox',
        checked: false,
        sx: {},
        type: 'squared',
        onChange: (checked:boolean) => {
            console.log("=== cb01", checked);
            return checked;
        },
	},
};

export const SecondStory: Story = {
	args: {
        name: 'cb02',
        label: 'Rouonded Checkbox',
        checked: false,
        sx: {},
        type: 'rounded',
        onChange: (checked:boolean) => {
            console.log("=== cb02", checked);
            return checked;
        },
	},
};