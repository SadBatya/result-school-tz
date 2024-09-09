import type { ReactNode } from 'react';
import Link from 'next/link';
import { BaseLayout } from 'src/widgets/layouts/base-layout';

export const Page = () => (
  <div className="container py-5">
    <h1 className="text-3xl">Тестовое задание</h1>
    <p>
      <Link href="/products/junior" className="underline">
        Рабочая страница
      </Link>
    </p>
  </div>
);

export const PageLayout = ({ children }: { children: ReactNode }) => (
  <BaseLayout header={null} footer={null}>
    {children}
  </BaseLayout>
);
