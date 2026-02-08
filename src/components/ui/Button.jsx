import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import Magnetic from './Magnetic';

const Button = forwardRef(({ className, variant = 'primary', size = 'md', isMagnetic = false, children, ...props }, ref) => {
    const variants = {
        primary: 'bg-primary text-white hover:bg-accent border-none shadow-lg shadow-primary/30', // Solid Primary
        secondary: 'bg-transparent border-2 border-primary text-dark hover:bg-gray-100 dark:text-white dark:border-secondary dark:hover:bg-white/10 dark:hover:border-white', // Strict Visible Pink Border
        outline: 'border border-primary text-dark hover:bg-primary/10 dark:border-secondary dark:text-white dark:hover:bg-white/10 transition-colors', // Enforced Visibility
        ghost: 'text-dark hover:bg-primary/10 hover:text-primary dark:text-white dark:hover:bg-white/10',
        accent: 'bg-accent text-white hover:bg-primary hover:shadow-lg', // Solid Accent
    };

    const sizes = {
        sm: 'h-9 px-4 text-sm',
        md: 'h-12 px-8 text-base', // Slightly larger for premium feel
        lg: 'h-16 px-10 text-lg',
        icon: 'h-10 w-10 p-0 flex items-center justify-center',
    };

    const Component = (
        <button
            ref={ref}
            className={cn(
                'relative overflow-hidden inline-flex items-center justify-center rounded-full font-medium transition-all duration-300',
                'disabled:opacity-50 disabled:pointer-events-none transform active:scale-95',
                variants[variant],
                sizes[size],
                className
            )}
            {...props}
        >
            <span className="relative z-10">{children}</span>
            {/* Subtle glow effect for primary buttons */}
            {variant === 'primary' && (
                <div className="absolute inset-0 rounded-full ring-1 ring-white/10"></div>
            )}
        </button>
    );

    return isMagnetic ? <Magnetic>{Component}</Magnetic> : Component;
});

Button.displayName = 'Button';

export default Button;
