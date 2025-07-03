import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button/Normal',
  component: Button,
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    onClick: () => alert('Primary clicked'),
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    onClick: () => alert('Secondary clicked'),
    // 例えばクラス名やvariant propで色を変えるならここで設定
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    onClick: () => alert('Should not click'),
    disabled: true, // Buttonがdisabled propsを受け取る場合
  },
};