import { BaseButtonCore } from '../../shared/BaseButtonCore';
import type { BaseButtonProps } from '../../shared/types';

export function DangerButton({ className = '', ...props }: BaseButtonProps) {
  return (
    <BaseButtonCore
      className={[
        'bg-red-600 text-white hover:bg-red-700',
        'shadow-md hover:shadow-lg',
        'disabled:bg-red-300',
        className,
      ].join(' ')}
      {...props}
    />
  );
}