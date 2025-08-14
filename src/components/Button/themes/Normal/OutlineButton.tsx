import { BaseButtonCore } from '../../shared/BaseButtonCore';
import type { BaseButtonProps } from '../../shared/types';

export function OutlineButton({ className = '', ...props }: BaseButtonProps) {
  return (
    <BaseButtonCore
      className={[
        'border border-gray-400 text-gray-700 bg-transparent',
        'hover:bg-gray-100 hover:shadow-lg',
        className,
      ].join(' ')}
      {...props}
    />
  );
}