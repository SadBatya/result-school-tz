import type { IFeatureItem } from "./types";
import calendarIcon from "../ui/assets/calendar.svg";
import eyeIcon from "../ui/assets/eye.svg";
import substractIcon from "../ui/assets/subtract.svg";
import shieldIcon from "../ui/assets/shield.svg";
import { StaticImageData } from "next/image";

export const features: IFeatureItem[] = [
  {
    id: 0,
    title: "Результат работы видно сразу",
    subtitle:
      "Вы будете писать код и понимать, все ли правильно отображается и работает на сайте.",
    icon: eyeIcon as StaticImageData,
  },
  {
    id: 1,
    title: "Работа по техзаданию, а не «из головы»",
    subtitle:
      "Фронтендеры работают по четкому техзаданию. Разработчикам платят за конкретные навыки и умение применять их в проектах.",
    icon: substractIcon as StaticImageData,
  },
  {
    id: 2,
    title: "Постепенный и уверенный рост в доходе и должности",
    subtitle:
      "За 9 месяцев вы станете junior-разработчиком, еще за 9 месяцев — middle. А senior frontend-разработчиком реально стать за 3 года.",
    icon: shieldIcon as StaticImageData,
  },
];
