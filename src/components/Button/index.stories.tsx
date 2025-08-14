// src/components/Button/index.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from 'storybook/test';
import { Button } from '.';

const meta: Meta<typeof Button> = {
  title: 'Components/Button/Normal',
  component: Button,
  args: {
    onClick: fn(),
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    variant: 'secondary',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    disabled: true,
  },
};
