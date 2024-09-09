import type { ReactNode } from 'react';
import { BaseLayout } from 'src/widgets/layouts/base-layout';
import { SectionHero } from './section-hero';
import { SectionFrontend } from './section-frontend';

export const Page = () => (
  <>
    <SectionHero />
    <SectionFrontend />
  </>
);

export const PageLayout = ({ children }: { children: ReactNode }) => (
  <BaseLayout header={null} footer={null}>
    {children}
  </BaseLayout>
);
