import { BaseButtonCore } from '../../shared/BaseButtonCore';
import type { BaseButtonProps } from '../../shared/types';

export function SecondaryButton({ className = '', ...props }: BaseButtonProps) {
  return (
    <BaseButtonCore
      className={[
        'bg-gray-300 text-black hover:bg-gray-400',
        'shadow-md hover:shadow-lg',
        'disabled:bg-gray-200',
        className,
      ].join(' ')}
      {...props}
    />
  );
}