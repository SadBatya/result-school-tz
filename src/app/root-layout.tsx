import React from 'react';
import type { Metadata, Viewport } from 'next';
import { golosText, inter } from './fonts';

export const metadata: Metadata = {
  title: 'Result University | Университет frontend-разработки',
  description: 'Университет frontend-разработки',
  icons: {
    icon: [
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/favicon/apple-touch-icon.png',
    other: [{ rel: 'mask-icon', url: '/favicon/safari-pinned-tab.svg', color: '#5bbad5' }],
  },
};

export const viewport: Viewport = {
  themeColor: '#ffffff',
};

export const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="ru" className={`${golosText.variable} ${inter.variable}`}>
    <body>{children}</body>
  </html>
);
