import type { Meta, StoryObj } from '@storybook/react';
import Select, {OptionItemType} from './index';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Select> = {
	component: Select,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Select>;

const items = [
    {label: 'Option 1', val: 'option1'} as OptionItemType,
    {label: 'Option 2', val: 'option2'} as OptionItemType,
    {label: 'Option 3', val: 'option3'} as OptionItemType,
    {label: 'Option 4', val: 'option4', className:"test", rel:"rel-option-4", id:"last-option"} as OptionItemType,
];

export const Default: Story = {
	args: {
        name: 'select-field',
        value: '',
        label: 'Select an item',
        items: items,
        rel: 'rel-select',
        id:"select-field-id",
	},
};