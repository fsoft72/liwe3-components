import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import DropdownButton, {MenuItemType} from './index';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof DropdownButton> = {
	component: DropdownButton,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DropdownButton>;

const OptionTemplate = (item: MenuItemType) => {
    const url = item.val?.toString();
    return (
        <li>
            <div className="demo" style={{padding:10}}>
                <span>{item.label}</span>: <span><a href={url} target={item.target}>{item.val}</a></span>
            </div>
        </li>
    );
};
const items = [
    {label: 'Item 1', val: '/item1', target:'_self'} as MenuItemType,
    {label: 'Item 2', val: '/item2', target:'_self'} as MenuItemType,
    {label: 'Item 3', val: '/item3', target:'_self'} as MenuItemType,
    {label: 'Item 4', val: '/item4', target:'_self', className:"test", rel:"rel-item-4", id:"last-item"} as MenuItemType,
];

export const Default: Story = {
	args: {
        label: 'DropdownButton',
        items: items,
        rel: 'rel-dropdown',
        id:"dropdown-button-id",
	},
};

export const CustomTemplate: Story = {
	args: {
        label: 'DropdownButton',
        items: items,
        rel: 'rel-dropdown',
        id:"dropdown-button-id",
        itemTemplate: OptionTemplate
	},
};