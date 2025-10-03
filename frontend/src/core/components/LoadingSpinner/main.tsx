/**
 * @component LoadingSpinner
 * @summary Reusable loading spinner component with size variants
 * @domain core
 * @type ui-component
 * @category feedback
 */

import { Loader2 } from 'lucide-react';
import { loadingSpinnerVariants } from './variants';
import type { LoadingSpinnerProps } from './types';

export const LoadingSpinner = ({ size = 'medium', className = '' }: LoadingSpinnerProps) => {
  return (
    <div className="flex items-center justify-center p-4">
      <Loader2 className={loadingSpinnerVariants({ size, className })} />
    </div>
  );
};
