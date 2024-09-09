import type { StaticImageData } from "next/image"


export interface IFeatureItem {
  id: number,
  title: string,
  subtitle: string,
  icon: StaticImageData
}