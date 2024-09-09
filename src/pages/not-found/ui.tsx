import Link from 'next/link';
import { BaseLayout } from 'src/widgets/layouts/base-layout';

export const Page = () => (
  <BaseLayout header={null} footer={null}>
    <div className="container flex grow flex-col items-center justify-center py-5">
      <div className="text-7xl font-bold text-gray-400">404</div>
      <h1 className="text-base">Такой страницы не существует</h1>
      <Link href="/" className="inline-block hover:text-accent">
        Перейти на главную
      </Link>
    </div>
  </BaseLayout>
);
