// src/components/Button/themes/Normal/PrimaryButton.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from 'storybook/test';
import { PrimaryButton } from './PrimaryButton';

const meta = {
  title: 'Button/Normal/Primary',
  component: PrimaryButton,
  args: { onClick: fn(), children: 'Primary' },
} satisfies Meta<typeof PrimaryButton>;
export default meta;

export type Story = StoryObj<typeof PrimaryButton>;
export const Default: Story = {};