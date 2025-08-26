// src/components/Button/Button.tsx
import { forwardRef, type ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'
import { BaseButtonCore } from './shared/BaseButtonCore'
import type { BaseButtonProps } from './shared/types'

export type ButtonTheme = 'normal' | 'metal' | 'dark'
export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'outline'
export type ButtonTone = 'solid' | 'outline' | 'ghost' | 'link'   // ← 追加
export type ButtonSize = 'sm' | 'md' | 'lg'                        // ← 追加
export type ButtonRadius = 'md' | 'lg' | 'pill'                    // ← 追加

type ThemedButtonProps = Omit<BaseButtonProps, 'children'> & {
  children?: ReactNode
  theme?: ButtonTheme
  variant?: ButtonVariant
  tone?: ButtonTone
  size?: ButtonSize
  radius?: ButtonRadius
  block?: boolean
  loading?: boolean
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  iconOnly?: boolean
}

//
// 既存の “solid/outline” は各テーマに最適化済み
//
const solidStyles: Record<ButtonTheme, Record<ButtonVariant, string>> = {
  normal: {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg focus-visible:ring-blue-600 disabled:bg-blue-300',
    secondary:'bg-gray-300 text-black hover:bg-gray-400 shadow-md hover:shadow-lg focus-visible:ring-gray-500 disabled:bg-gray-200',
    danger:   'bg-red-600 text-white hover:bg-red-700 shadow-md hover:shadow-lg focus-visible:ring-red-600 disabled:bg-red-300',
    outline:  'bg-transparent border border-blue-600 text-blue-700 hover:bg-blue-50 shadow-sm hover:shadow focus-visible:ring-blue-600 disabled:text-blue-300 disabled:border-blue-300',
  },
  metal: {
    primary:  'bg-gradient-to-b from-slate-700 to-slate-900 text-white border border-slate-800 shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_2px_6px_rgba(0,0,0,0.35)] hover:from-slate-600 hover:to-slate-800 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_4px_10px_rgba(0,0,0,0.4)] focus-visible:ring-slate-500 disabled:from-slate-500 disabled:to-slate-600 disabled:border-slate-700',
    secondary:'bg-gradient-to-b from-zinc-200 to-zinc-300 text-zinc-900 border border-zinc-400 shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_1.5px_4px_rgba(0,0,0,0.15)] hover:from-zinc-100 hover:to-zinc-200 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_3px_8px_rgba(0,0,0,0.2)] focus-visible:ring-zinc-700 disabled:from-zinc-300 disabled:to-zinc-300 disabled:text-zinc-400 disabled:border-zinc-300',
    danger:   'bg-gradient-to-b from-rose-700 to-rose-800 text-white border border-rose-700/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_2px_6px_rgba(0,0,0,0.2)] hover:from-rose-600 hover:to-rose-700 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.45),0_4px_10px_rgba(0,0,0,0.25)] focus-visible:ring-rose-500 disabled:text-white/70 disabled:border-rose-400 disabled:shadow-none',
    outline:  'bg-transparent text-slate-800 border border-slate-400/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] hover:bg-slate-100/70 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_1.5px_4px_rgba(0,0,0,0.10)] focus-visible:ring-slate-600 disabled:text-slate-400 disabled:border-slate-300 disabled:shadow-none',
  },
  dark: {
    primary:  'bg-gradient-to-b from-neutral-900 to-black text-white border border-neutral-800 shadow-md hover:shadow-lg hover:from-neutral-800 hover:to-neutral-900 focus-visible:ring-neutral-300 focus-visible:ring-offset-neutral-900 disabled:bg-neutral-800 disabled:text-neutral-500 disabled:border-neutral-800',
    secondary:'bg-gradient-to-b from-neutral-700 to-neutral-800 text-neutral-200 border border-neutral-600 shadow-sm hover:shadow-md hover:from-neutral-600 hover:to-neutral-700 focus-visible:ring-neutral-400 focus-visible:ring-offset-neutral-900 disabled:bg-neutral-700 disabled:text-neutral-500 disabled:border-neutral-700',
    danger:   'bg-gradient-to-b from-rose-700 to-rose-800 text-white border border-rose-700/70 shadow-md hover:shadow-lg hover:from-rose-600 hover:to-rose-700 focus-visible:ring-rose-500 focus-visible:ring-offset-neutral-900 disabled:bg-rose-700 disabled:text-white/70 disabled:border-rose-700',
    outline:  'bg-transparent text-neutral-100 border border-neutral-600 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] hover:bg-neutral-800/60 hover:shadow-sm focus-visible:ring-neutral-400 focus-visible:ring-offset-neutral-900 disabled:text-neutral-500 disabled:border-neutral-700 disabled:bg-transparent disabled:shadow-none',
  },
}

// “outline” は上の map を使うので OK。以下は “ghost / link” 用の色だけ足す。
const ghostText: Record<ButtonTheme, Record<ButtonVariant, string>> = {
  normal: { primary:'text-blue-700', secondary:'text-gray-800', danger:'text-red-600', outline:'text-blue-700' },
  metal:  { primary:'text-slate-900', secondary:'text-zinc-900', danger:'text-rose-700', outline:'text-slate-800' },
  dark:   { primary:'text-white', secondary:'text-neutral-200', danger:'text-rose-400', outline:'text-neutral-100' },
}
const ghostHoverBg: Record<ButtonTheme, Record<ButtonVariant, string>> = {
  normal: { primary:'hover:bg-blue-500/10',  secondary:'hover:bg-gray-500/10',  danger:'hover:bg-red-500/10',   outline:'hover:bg-blue-500/10' },
  metal:  { primary:'hover:bg-slate-700/10', secondary:'hover:bg-zinc-700/10', danger:'hover:bg-rose-700/10',  outline:'hover:bg-slate-700/10' },
  dark:   { primary:'hover:bg-white/10',     secondary:'hover:bg-white/08',    danger:'hover:bg-rose-500/15',  outline:'hover:bg-white/08' },
}
const linkText = ghostText // 同じ色でOK

const sizeCls: Record<ButtonSize, string> = {
  sm: 'text-sm px-3 py-1.5',
  md: 'text-sm px-4 py-2',
  lg: 'text-base px-5 py-2.5',
}
const radiusCls: Record<ButtonRadius, string> = {
  md: 'rounded-md',
  lg: 'rounded-lg',
  pill: 'rounded-full',
}

function themedByTone(theme: ButtonTheme, variant: ButtonVariant, tone: ButtonTone) {
  if (tone === 'solid')   return solidStyles[theme][variant]
  if (tone === 'outline') return solidStyles[theme]['outline'] // 既存の outline を流用
  if (tone === 'ghost')   return ['bg-transparent', ghostText[theme][variant], ghostHoverBg[theme][variant]].join(' ')
  // link
  return [
    'bg-transparent border-0 shadow-none underline-offset-4 decoration-1',
    linkText[theme][variant],
    'hover:underline focus-visible:underline',
    'px-0 py-0', // Base のパディングを打ち消す（twMerge 推奨）
  ].join(' ')
}

export const Button = forwardRef<HTMLButtonElement, ThemedButtonProps>(
  (
    {
      theme = 'normal',
      variant = 'primary',
      tone = 'solid',
      size = 'md',
      radius = 'lg',
      block,
      loading,
      leftIcon,
      rightIcon,
      iconOnly,
      className = '',
      children,
      ...rest
    },
    ref
  ) => {
    const look = themedByTone(theme, variant, tone)
    const shape = [sizeCls[size], radiusCls[radius], 'active:translate-y-px'].join(' ')
    const layout = [
      block && 'w-full justify-center',
      iconOnly && (size === 'sm' ? 'px-2 py-2' : size === 'lg' ? 'px-3 py-3' : 'px-2.5 py-2.5'),
      loading && 'pointer-events-none opacity-70',
    ]
      .filter(Boolean)
      .join(' ')

    return (
      <BaseButtonCore
        ref={ref}
        data-theme={theme}
        data-variant={variant}
        aria-busy={loading || undefined}
        className={twMerge(look, shape, layout, className)}
        {...rest}
      >
        {iconOnly ? (
            // アイコンのみ表示。leftIcon > rightIcon > children の順で採用
            <span aria-hidden className="grid place-items-center">
            {leftIcon ?? rightIcon ?? children}
            </span>
        ) : (
            <>
            {leftIcon && <span aria-hidden className="-ml-0.5">{leftIcon}</span>}
            {children && <span className={loading ? 'opacity-0' : ''}>{children}</span>}
            {rightIcon && <span aria-hidden className="-mr-0.5">{rightIcon}</span>}
            </>
        )}

        {loading && (
            <span aria-hidden className="absolute inset-0 grid place-items-center">
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
            </span>
        )}
      </BaseButtonCore>
    )
  }
)
Button.displayName = 'Button'
