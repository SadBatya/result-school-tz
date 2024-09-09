import type { ReactNode } from 'react';
import { BaseLayout } from 'src/widgets/layouts/base-layout';
import { SectionHero } from './section-hero';

export const Page = () => (
  <>
    <SectionHero />
    {/* Остальные секции ... */}
  </>
);

export const PageLayout = ({ children }: { children: ReactNode }) => (
  <BaseLayout header={null} footer={null}>
    {children}
  </BaseLayout>
);
