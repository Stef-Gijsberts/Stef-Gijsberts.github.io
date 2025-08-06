import { ReactNode, AnchorHTMLAttributes } from 'react';

type Variant = 'primary' | 'outline';

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'children'>;

const base =
  'inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2';

const variantClasses: Record<Variant, string> = {
  primary: 'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800',
  outline: 'border border-neutral-300 text-neutral-900 hover:bg-neutral-50 active:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-100 dark:hover:bg-neutral-800',
};

export function Button({ href, children, variant = 'primary', className, ...rest }: ButtonProps) {
  const cls = [base, variantClasses[variant], className].filter(Boolean).join(' ');
  return (
    <a href={href} className={cls} {...rest}>
      {children}
    </a>
  );
}