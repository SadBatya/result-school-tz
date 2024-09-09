import type { StaticImageData } from 'next/image'

import project_1 from '../ui/assets/project-1.jpg'
import project_2 from '../ui/assets/project-2.jpg'
import project_3 from '../ui/assets/project-3.jpg'
import { IFeatureItem } from './types'

export const features: IFeatureItem[] = [
  {
    id: 0,
    title: 'Сайт колледжа в Кирове',
    subtitle: 'Наш выпускник Сергей сделал сайт для ВВКИФПУ. Сайт не просто стильный, но и функциональный — можно изучить направления подготовки, расписание и правила приема. А еще у сайта есть версия для слабовидящих.',
    img: project_1 as StaticImageData
  },
  {
    id: 1,
    title: 'Сайт доставки рационов питания',
    subtitle: 'На ученик Денис создал полноценный онлайн-магазин для службы доставки питания UpFood. На нем можно выбрать отдельные блюда или набор на весь день под различные цели: похудение, поддержание формы и набор массы.',
    img: project_2 as StaticImageData
  },
  {
    id: 2,
    title: 'Список покупок',
    subtitle: 'Студент Никита сделал приложение, чтобы планировать покупки. Это не обычный планер формата to-do list. В нем можно делиться списком продуктов с друзьями и близкими, назначать ответственного и удалять купленное.',
    img: project_3 as StaticImageData
  }
]