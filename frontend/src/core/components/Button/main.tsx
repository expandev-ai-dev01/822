import { cn } from '@/core/utils/cn';
import type { ButtonProps } from './types';
import { buttonVariants } from './variants';

/**
 * @component Button
 * @summary Reusable button component with multiple variants
 * @domain core
 * @type ui-component
 * @category form
 */
export const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <span className="flex items-center justify-center">
          <span className="animate-spin mr-2">⏳</span>
          Loading...
        </span>
      ) : (
        children
      )}
    </button>
  );
};
