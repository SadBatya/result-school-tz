import type { IFeatureItem } from './types';
import starIcon from '../ui/assets/star.svg';
import peoplesIcon from '../ui/assets/users.svg';
import rocketIcon from '../ui/assets/rocket.svg';
import checkIcon from '../ui/assets/check.svg';
import dbIcon from '../ui/assets/db.svg';
import caseIcon from '../ui/assets/case.svg';
import type { StaticImageData } from 'next/image';

export const features: IFeatureItem[] = [
  {
    id: 0,
    text: 'Гарантируем трудоустройство или вернем деньги',
    icon: starIcon as StaticImageData,
  },
  {
    id: 1,
    text: 'Официальный диплом и сертификат школы',
    icon: checkIcon as StaticImageData,
  },
  {
    id: 2,
    text: '540 часов практики',
    icon: caseIcon as StaticImageData,
  },
  {
    id: 3,
    text: '87% выпускников находят работу в течение 6 месяцев',
    icon: peoplesIcon as StaticImageData,
  },
  {
    id: 4,
    text: 'Персональный наставник middle/senior уровня',
    icon: rocketIcon as StaticImageData,
  },
  {
    id: 5,
    text: '14 проектов, лайвкодинг, хакатоны, техсобеседования',
    icon: dbIcon as StaticImageData,
  },
];
