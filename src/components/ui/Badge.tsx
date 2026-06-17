import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'accent';
  className?: string;
}

const variantClasses = {
  default:
    'bg-gradient-to-r from-violet-500/15 via-indigo-500/15 to-cyan-500/15 text-slate-200 border-indigo-400/15 hover:border-indigo-400/30 hover:shadow-[0_0_12px_rgba(99,102,241,0.12)] dark:text-slate-200 dark:border-indigo-400/15 dark:hover:border-indigo-400/30 dark:hover:shadow-[0_0_12px_rgba(99,102,241,0.15)] ' +
    'text-slate-700 dark:text-slate-200',
  primary: 'bg-primary/10 text-primary dark:text-primary-light border-primary/20',
  accent: 'bg-accent/10 text-accent dark:text-accent-light border-accent/20',
};

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border transition-colors duration-200',
        variantClasses[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
