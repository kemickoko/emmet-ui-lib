// src/components/Button/Button.tsx
import { forwardRef, type ReactNode, type CSSProperties } from 'react'
import cls from './Button.module.css'

export type ButtonTheme = 'normal' | 'metal' | 'dark'
export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'outline'
export type ButtonCSSVars = Partial<Record<
  '--fg' | '--bg' | '--bg-hover' | '--border' | '--ring-color' | '--ring-offset-color' |
  '--shadow' | '--shadow-hover',
  string
>>
export type ButtonSize = 'sm' | 'md' | 'lg'
export type ButtonRadius = 'none' | 'md' | 'lg' | 'pill'

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  theme?: ButtonTheme
  variant?: ButtonVariant
  styleVars?: ButtonCSSVars;
  size?: ButtonSize
  radius?: ButtonRadius
  block?: boolean
  loading?: boolean
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  iconOnly?: boolean
}

const sizeMap: Record<ButtonSize, CSSProperties> = {
  sm: { padding: '6px 12px', fontSize: 12, lineHeight: 1 },
  md: { padding: '8px 16px', fontSize: 14, lineHeight: 1 },
  lg: { padding: '10px 20px', fontSize: 16, lineHeight: 1 },
} as const

const radiusMap: Record<ButtonRadius, CSSProperties> = {
  none: { borderRadius: 0 },
  md: { borderRadius: 8 },
  lg: { borderRadius: 12 },
  pill: { borderRadius: 999 },
} as const

const iconOnlySize: Record<ButtonSize, CSSProperties> = {
  sm: { width: 32, height: 32, padding: 6 },
  md: { width: 36, height: 36, padding: 8 },
  lg: { width: 40, height: 40, padding: 10 },
} as const

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      theme = 'normal',
      variant = 'primary',
      size = 'md',
      radius = 'md',
      block = false,
      loading = false,
      leftIcon,
      rightIcon,
      iconOnly = false,
      className = '',
      children,
      type = 'button',
      style: styleProp,
      styleVars,
      ...rest
    },
    ref
  ) => {
    const styleObj: CSSProperties = {
      ...sizeMap[size],
      ...radiusMap[radius],
      ...(block ? { width: '100%', justifyContent: 'center' } : null),
      ...(iconOnly ? iconOnlySize[size] : null),
      ...(loading ? { pointerEvents: 'none', opacity: 0.7 } : null),
    }

    return (
      <button
        ref={ref}
        type={type}
        className={`${cls.button} ${className}`}
        data-theme={theme}
        data-variant={variant}
        aria-busy={loading || undefined}
        style={{ ...styleObj, ...(styleProp as CSSProperties), ...(styleVars as CSSProperties) }}
        {...rest}
      >
        {iconOnly ? (
          <span aria-hidden style={{ display: 'grid', placeItems: 'center' }}>
            {leftIcon ?? rightIcon ?? children}
          </span>
        ) : (
          <>
            {leftIcon && <span aria-hidden style={{ marginInlineStart: -2 }}>{leftIcon}</span>}
            {children}
            {rightIcon && <span aria-hidden style={{ marginInlineEnd: -2 }}>{rightIcon}</span>}
          </>
        )}

        {loading && (
          <span aria-hidden style={{ position: 'absolute', inset: 0, display: 'grid', placeItems: 'center' }}>
            <span
              style={{
                width: 16,
                height: 16,
                borderRadius: '50%',
                border: '2px solid currentColor',
                borderTopColor: 'transparent',
                animation: 'spin .9s linear infinite',
              }}
            />
          </span>
        )}
      </button>
    )
  }
)
Button.displayName = 'Button'
