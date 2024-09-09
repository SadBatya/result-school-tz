import type { ReactNode, ReactElement } from 'react';
import { twMerge } from 'tailwind-merge';

interface IBaseLayoutProps {
  children: ReactNode;
  header: ReactElement | null;
  footer: ReactElement | null;
  isDark?: boolean;
}

export const BaseLayout = ({ children, isDark = false, header, footer }: IBaseLayoutProps) => (
  <div
    className={twMerge(
      'flex min-h-screen flex-col',
      isDark ? 'bg-black text-white' : 'bg-white text-black'
    )}
  >
    {header}
    <main className="flex grow flex-col">{children}</main>
    {footer}
  </div>
);
