// src/components/Button/themes/Metal/PrimaryButton.tsx
import { BaseButtonCore } from '../../shared/BaseButtonCore';
import type { BaseButtonProps } from '../../shared/types';

export function PrimaryButton({ className = '', ...props }: BaseButtonProps) {
  return (
    <BaseButtonCore
      className={[
        'bg-gradient-to-b from-slate-200 to-slate-300 text-slate-800',
        'border border-slate-400',
        'shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_2px_6px_rgba(0,0,0,0.2)]',
        'hover:from-slate-100 hover:to-slate-200 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_4px_10px_rgba(0,0,0,0.25)]',
        className,
      ].join(' ')}
      {...props}
    />
  );
}