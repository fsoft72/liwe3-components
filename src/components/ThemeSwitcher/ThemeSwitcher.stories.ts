import type { Meta, StoryObj } from '@storybook/react';

import ThemeSwitcher from './index';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof ThemeSwitcher> = {
	component: ThemeSwitcher,
};

export default meta;
type Story = StoryObj<typeof ThemeSwitcher>;

export const FirstStory: Story = {};