import { BaseButtonCore } from '../../shared/BaseButtonCore';
import type { BaseButtonProps } from '../../shared/types';

export function PrimaryButton({ className = '', ...props }: BaseButtonProps) {
  return (
    <BaseButtonCore
      className={[
        'bg-blue-600 text-white hover:bg-blue-700',
        'shadow-md hover:shadow-lg',
        'disabled:bg-blue-300',
        className,
      ].join(' ')}
      {...props}
    />
  );
}