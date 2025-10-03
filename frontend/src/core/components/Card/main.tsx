import { cn } from '@/core/utils/cn';
import type { CardProps } from './types';

/**
 * @component Card
 * @summary Reusable card container component
 * @domain core
 * @type ui-component
 * @category display
 */
export const Card = ({ children, className, ...props }: CardProps) => {
  return (
    <div
      className={cn('bg-white rounded-lg shadow-md border border-gray-200 p-6', className)}
      {...props}
    >
      {children}
    </div>
  );
};
