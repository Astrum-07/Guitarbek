import { clsx } from "clsx";

export const Button = ({
    children,
    variant = 'primary',
    className = '',
    ...props
}) => {
    const baseStyles = 'inline-flex items-center justify-center px-6 py-2.5 rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2';

    const variants = {
        primary: 'bg-amber-600 text-white hover:bg-amber-700 hover:shadow-lg focus:ring-amber-500',
        secondary: 'bg-stone-800 text-amber-500 hover:bg-stone-700 hover:text-amber-400 focus:ring-stone-600',
        outline: 'border-2 border-stone-300 text-stone-700 hover:border-amber-600 hover:text-amber-600 focus:ring-amber-500',
        ghost: 'text-stone-600 hover:text-amber-600 hover:bg-stone-100',
    };

    return (
        <button
            className={clsx(baseStyles, variants[variant], className)}
            {...props}
        >
            {children}
        </button>
    );
};
