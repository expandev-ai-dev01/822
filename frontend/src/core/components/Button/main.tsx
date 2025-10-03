/**
 * @component Button
 * @summary Reusable button component with variants
 * @domain core
 * @type ui-component
 * @category form
 */

import { buttonVariants } from './variants';
import type { ButtonProps } from './types';

export const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  className = '',
  ...props
}: ButtonProps) => {
  return (
    <button
      className={buttonVariants({ variant, size, disabled: disabled || loading, className })}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? 'Loading...' : children}
    </button>
  );
};
