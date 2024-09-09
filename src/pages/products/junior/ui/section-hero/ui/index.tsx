import Image from 'next/image';
import peoples from './assets/peoples.png';
import team from './assets/team.jpg';
import { features } from '../model/features';

export const SectionHero = () => (
  <section>
    <div className="relative mx-auto flex w-full max-w-[1230px] flex-col-reverse justify-between px-5 pt-[40px] sm:pt-[45px] md:mt-0 md:pt-[60px] lg:flex-row lg:pt-[80px] 2xl:pt-[97px]">
      <div className=" mx-auto max-w-[800px] text-center lg:mx-0 lg:text-left">
        <div className="mb-3 flex justify-center gap-3 lg:justify-start">
          <span className="inline-flex items-center rounded-md bg-[#F1F1F0] p-1 text-[11px] font-medium text-[#767676]">
            Можно совмещать с работой
            <span className="ml-2 flex h-[13px] w-[13px] items-center justify-center rounded-[100%] bg-[#C1C1C1] text-[#fff]">
              ?
            </span>
          </span>
          <span className="inline-flex items-center rounded-md bg-[#F1F1F0] p-1 text-[11px] font-medium text-[#767676]">
            Старт: 21.08
          </span>
        </div>
        <h1 className="relative z-10 m-0 mb-4 w-auto font-heading text-[28px] font-extrabold leading-[110%] text-[#0F1214] md:mb-4 md:text-[46px] md:leading-[110%]">
          Станьте <span className="text-[#0A85D1]">frontend-разработчиком</span> с нуля и
          гарантировано <span className="text-[#0A85D1]"> устройтесь на работу</span>
        </h1>
        <p className="relative z-10 m-0 w-full font-heading text-lg font-medium leading-[135%] text-[#0F1214] md:text-xl md:leading-[135%] lg:max-w-[570px]">
          За 9 месяцев освоите JavaScript, React, TypeScript и получите навыки востребованного
          IT-специалиста.
        </p>
        <button className="relative z-10 mx-auto mt-6 inline-block rounded-[7px] bg-[#0A85D1] px-[15px] py-[12px] text-center text-[17px] font-medium leading-[160%] text-white lg:mx-0">
          Получить курс по HTML в подарок
        </button>
      </div>

      <div className="mx-auto max-w-[246px] items-center justify-center md:bottom-[-50px] md:max-w-[798px] lg:absolute lg:right-0">
        <Image src={peoples} alt="" quality={100} />
      </div>
    </div>
    <div className="relative mx-auto w-full max-w-[1230px] px-5 pt-[31px]">
      <div className=" relative z-10 mx-auto grid  grid-cols-1 gap-[10px] md:grid-cols-2 md:gap-6 lg:grid-cols-3">
        {features.map(feature => (
          <div
            key={feature.id}
            className="flex items-center gap-2.5 rounded-[10px] bg-[#F5F5F4] px-4 py-5 backdrop-blur-[11px] md:rounded-2xl md:px-5 md:py-6"
          >
            <div className="h-8 w-8 flex-none">
              <Image src={feature.icon} width={32} height={32} alt="" />
            </div>
            <p className="m-0 text-sm font-normal not-italic leading-[145%] tracking-[0.08px] text-[#000] md:text-base">
              {feature.text}
            </p>
          </div>
        ))}
      </div>

      <div className="relative mt-[20px] h-[150px] xs:h-[200px] sm:h-[300px] lg:h-[400px] xl:h-[450px] 2xl:h-[500px]">
        <Image
          className="w-[100%] rounded-[10px] object-cover object-center"
          fill={true}
          src={team}
          alt=""
        />
      </div>
    </div>
  </section>
);
