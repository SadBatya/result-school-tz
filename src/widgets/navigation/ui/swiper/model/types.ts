import { StaticImageData } from "next/image";

export interface IFeatureItem {
  id: number,
  title: string,
  subtitle: string,
  img: StaticImageData
}