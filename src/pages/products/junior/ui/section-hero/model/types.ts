import type { StaticImageData } from 'next/image';

export interface IFeatureItem {
  id: number;
  text: string;
  icon: StaticImageData;
}
