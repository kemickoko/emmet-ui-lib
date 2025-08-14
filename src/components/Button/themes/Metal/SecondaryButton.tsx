// src/components/Button/themes/Metal/SecondaryButton.tsx
import { BaseButtonCore } from '../../shared/BaseButtonCore';
import type { BaseButtonProps } from '../../shared/types';

export function SecondaryButton({ className = '', ...props }: BaseButtonProps) {
  return (
    <BaseButtonCore
      className={[
        'bg-gradient-to-b from-zinc-200 to-zinc-300 text-zinc-900',
        'border border-zinc-400',
        'shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_2px_6px_rgba(0,0,0,0.2)]',
        'hover:from-zinc-100 hover:to-zinc-200',
        className,
      ].join(' ')}
      {...props}
    />
  );
}