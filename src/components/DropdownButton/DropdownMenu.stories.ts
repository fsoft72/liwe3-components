import type { Meta, StoryObj } from '@storybook/react';

import DropdownButton, {MenuItemType} from './index';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof DropdownButton> = {
	component: DropdownButton,
};

export default meta;
type Story = StoryObj<typeof DropdownButton>;

const items = [
    {label: 'Item 1', action: 'item1', target:'_self'} as MenuItemType,
    {label: 'Item 2', action: 'item2', target:'_self'} as MenuItemType,
    {label: 'Item 3', action: 'item3', target:'_self'} as MenuItemType,
    {label: 'Item 4', action: 'item4', target:'_self'} as MenuItemType,
];

export const FirstStory: Story = {
	args: {
        label: 'DropdownButton',
        items: items,
	},
};