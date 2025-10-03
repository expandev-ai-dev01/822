import { clsx } from 'clsx';

interface ButtonVariantsProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  className?: string;
}

export const buttonVariants = ({
  variant = 'primary',
  size = 'medium',
  disabled = false,
  className,
}: ButtonVariantsProps) => {
  return clsx(
    'inline-flex items-center justify-center font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2',
    {
      'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500':
        variant === 'primary' && !disabled,
      'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500':
        variant === 'secondary' && !disabled,
      'border-2 border-primary-600 text-primary-600 hover:bg-primary-50 focus:ring-primary-500':
        variant === 'outline' && !disabled,
      'text-gray-700 hover:bg-gray-100 focus:ring-gray-500': variant === 'ghost' && !disabled,
      'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500':
        variant === 'danger' && !disabled,
      'px-3 py-1.5 text-sm': size === 'small',
      'px-4 py-2 text-base': size === 'medium',
      'px-6 py-3 text-lg': size === 'large',
      'opacity-50 cursor-not-allowed': disabled,
    },
    className
  );
};
