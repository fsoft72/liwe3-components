import type { Meta, StoryObj } from '@storybook/react';

import Input from './index';

const meta: Meta<typeof Input> = {
	component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Defualt: Story = {
	args: {
		label: 'Generic Input',
		attrs: {
			'data-test': 'test',
			'rel-test': 'rel',
		},
		id: 'test-input',
		size: 'md',
	},
};
export const Warning: Story = {
	args: {
		label: 'Generic Input',
		status: 'warning',
		message: 'This is a warning message',
		attrs: {
			'data-test': 'test',
			'rel-test': 'rel',
		},
		id: 'test-input',
		size: 'sm',
	},
};
export const Error: Story = {
	args: {
		label: 'Generic Input',
		status: 'error',
		message: 'This is an error message',
		attrs: {
			'data-test': 'test',
			'rel-test': 'rel',
		},
		id: 'test-input',
		size: 'lg',
	},
};
export const Success: Story = {
	args: {
		label: 'Generic Input',
		status: 'success',
		message: 'This is a success message',
		attrs: {
			'data-test': 'test',
			'rel-test': 'rel',
		},
		id: 'test-input',
		size: 'block',
	},
};