import { Inter, Golos_Text } from 'next/font/google';

export const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  style: ['normal'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-inter',
});

export const golosText = Golos_Text({
  subsets: ['latin', 'cyrillic'],
  style: ['normal'],
  weight: ['400', '500', '600', '700', '900'],
  display: 'swap',
  variable: '--font-golos-text',
});
