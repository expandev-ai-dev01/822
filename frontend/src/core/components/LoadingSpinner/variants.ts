import { clsx } from 'clsx';

interface LoadingSpinnerVariantsProps {
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

export const loadingSpinnerVariants = ({
  size = 'medium',
  className,
}: LoadingSpinnerVariantsProps) => {
  return clsx(
    'animate-spin text-primary-600',
    {
      'w-4 h-4': size === 'small',
      'w-8 h-8': size === 'medium',
      'w-12 h-12': size === 'large',
    },
    className
  );
};
