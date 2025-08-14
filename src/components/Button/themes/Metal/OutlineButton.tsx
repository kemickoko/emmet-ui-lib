// src/components/Button/themes/Metal/OutlineButton.tsx
import { BaseButtonCore } from '../../shared/BaseButtonCore';
import type { BaseButtonProps } from '../../shared/types';

export function OutlineButton({ className = '', ...props }: BaseButtonProps) {
  return (
    <BaseButtonCore
      className={[
        'text-slate-800 bg-transparent',
        'border border-slate-400',
        'hover:bg-slate-100',
        className,
      ].join(' ')}
      {...props}
    />
  );
}