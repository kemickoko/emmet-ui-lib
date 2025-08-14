// src/components/Button/themes/Normal/PrimaryButton.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from 'storybook/test';
import { SecondaryButton } from './SecondaryButton';

const meta = {
  title: 'Button/Normal/Secondary',
  component: SecondaryButton,
  args: { onClick: fn(), children: 'Primary' },
} satisfies Meta<typeof SecondaryButton>;
export default meta;

export type Story = StoryObj<typeof SecondaryButton>;
export const Default: Story = {};