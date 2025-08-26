// src/components/Button/Button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react'
import type { ComponentProps } from 'react'
import { useEffect, useRef } from 'react'
import { useArgs } from 'storybook/preview-api'
import { fn } from 'storybook/test'
import { Button } from '.'

type PickerArgs = ComponentProps<typeof Button> & {
  fg?: string
  bg?: string
  bgHover?: string
  border?: string
  ringColor?: string
  syncFromCSS?: boolean
}

const meta = {
  title: 'Components/Button',
  component: Button,
  args: { onClick: fn(), children: 'Button', theme: 'dark', variant: 'primary' },
  argTypes: {
    theme:   { control: 'inline-radio', options: ['normal','metal','dark'] },
    variant: { control: 'inline-radio', options: ['primary','secondary','danger','outline'] },
    size:    { control: 'inline-radio', options: ['sm','md','lg'] },
    radius:  { control: 'inline-radio', options: ['none','md','lg','pill'] },
    styleVars: { table: { disable: true } },
  },
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>
export const Playground: Story = {}

/** CSS同期：probe（不可視の素ボタン）から色を取得してピッカーに反映 */
export const CustomVarsSyncedFromCSS: StoryObj<PickerArgs> = {
  argTypes: {
    fg:        { control: 'color', description: 'text (--fg)' },
    bg:        { control: 'color', description: 'background (--bg)' },
    bgHover:   { control: 'color', description: 'hover background (--bg-hover)' },
    border:    { control: 'color', description: 'border (--border)' },
    ringColor: { control: 'color', description: 'focus ring (--ring-color)' },
    syncFromCSS: { control: 'boolean' },
  },
  args: {
    children: 'Synced from CSS',
    theme: 'normal',
    variant: 'primary',
    syncFromCSS: true,
    fg: "#fff",
    border: "#1e40af",
    ringColor: "rgba(37,99,235,.6)",
    bg: "#42bd58",
    bgHover: "#1d4ed8"
  },
  render: (args) => {
    const [
      { theme, variant, fg, bg, bgHover, border, ringColor, syncFromCSS, ...rest },
      updateArgs,
    ] = useArgs<PickerArgs>()

    const refVisible = useRef<HTMLButtonElement>(null)
    const refProbe   = useRef<HTMLButtonElement>(null)

    useEffect(() => {
      if (!syncFromCSS || !refProbe.current) return
      // 次フレームで計測（DOMが切り替わってから）
      const id = requestAnimationFrame(() => {
        const cs = getComputedStyle(refProbe.current!)
        const val = (name: string) => (cs.getPropertyValue(name) || '').trim() || undefined
        const asColor = (v?: string) => (v && !v.includes('gradient') ? v : undefined)

        const next = {
          fg:        asColor(val('--fg'))        ?? cs.color,
          bg:        asColor(val('--bg')),
          bgHover:   asColor(val('--bg-hover')),
          border:    asColor(val('--border')),
          ringColor: asColor(val('--ring-color')),
        }

        if (
          next.fg !== fg || next.bg !== bg || next.bgHover !== bgHover ||
          next.border !== border || next.ringColor !== ringColor
        ) {
          updateArgs(next)
        }
      })
      return () => cancelAnimationFrame(id)
    }, [theme, variant, syncFromCSS])

    return (
      <>
        {/* 可視の本体：ピッカー値を styleVars で上書き */}
        <Button
          ref={refVisible}
          {...rest}
          theme={theme}
          variant={variant}
          styleVars={{
            ...(fg ? { '--fg': fg } : {}),
            ...(bg ? { '--bg': bg } : {}),
            ...(bgHover ? { '--bg-hover': bgHover } : {}),
            ...(border ? { '--border': border } : {}),
            ...(ringColor ? { '--ring-color': ringColor } : {}),
          }}
        >
          {args.children}
        </Button>

        {/* 不可視の probe：styleVars を当てない素の見た目を計測 */}
        <div style={{ position:'absolute', left:-99999, top:-99999, pointerEvents:'none', opacity:0 }}>
          <Button ref={refProbe} theme={theme} variant={variant}>
            probe
          </Button>
        </div>
      </>
    )
  },
  parameters: {
    controls: { exclude: ['style', 'styleVars'] },
  },
}

export const SyncedOutline: StoryObj<PickerArgs> = {
  ...CustomVarsSyncedFromCSS,
  args: { ...CustomVarsSyncedFromCSS.args, variant: 'outline' },
}
