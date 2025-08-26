// src/components/Button/Button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react'
import { fn } from 'storybook/test'
import { Button } from '.'
// import { Icon } from 'lucide-react' // 何かアイコンライブラリがあれば

const meta = {
  title: 'Components/Button',
  component: Button,
  args: { onClick: fn(), children: 'Button', theme: 'dark', variant: 'primary', tone: 'solid' },
  argTypes: {
    theme:   { control: 'inline-radio', options: ['normal','metal','dark'] },
    variant: { control: 'inline-radio', options: ['primary','secondary','danger','outline'] },
    tone:    { control: 'inline-radio', options: ['solid','outline','ghost','link'] },
    size:    { control: 'inline-radio', options: ['sm','md','lg'] },
    radius:  { control: 'inline-radio', options: ['md','lg','pill'] },
  },
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>
export default meta

type Story = StoryObj<typeof meta>
export const Playground: Story = {}

export const Ghost: Story = { args: { tone: 'ghost', children: 'Ghost' } }
export const LinkLike: Story = { args: { tone: 'link', children: 'Link Button' } }
export const WithIcons: Story = { args: { leftIcon: '🔍', rightIcon: '↗', children: 'Search' } }
export const Loading: Story = { args: { loading: true, children: 'Saving…' } }
export const PillIconOnly: Story = { args: { radius: 'pill', iconOnly: true, leftIcon: '⭐', 'aria-label': 'Star' } }
