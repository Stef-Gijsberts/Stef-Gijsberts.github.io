import { ReactNode, AnchorHTMLAttributes } from 'react';

type Variant = 'red' | 'blue';

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'children'>;

const base =
  'inline-block text-white px-5 py-3 border-4 border-black shadow-[6px_6px_0_0_#000] active:translate-x-1 active:translate-y-1 active:shadow-[2px_2px_0_0_#000] hover:bg-black';

const variantClasses: Record<Variant, { bg: string; hover: string }> = {
  red: { bg: 'bg-red-600', hover: 'hover:text-red-400' },
  blue: { bg: 'bg-blue-600', hover: 'hover:text-blue-400' },
};

export function Button({ href, children, variant = 'red', className, ...rest }: ButtonProps) {
  const v = variantClasses[variant];
  const cls = [base, v.bg, v.hover, className].filter(Boolean).join(' ');
  return (
    <a href={href} className={cls} {...rest}>
      {children}
    </a>
  );
}