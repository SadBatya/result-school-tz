import Image from "next/image";
import peoples from "./assets/peoples.png";
import team from "./assets/team.jpg";
import { features } from "../model/features";

export const SectionHero = () => (
  <section>
    <div className="relative mx-auto flex w-full max-w-[1230px] flex-col-reverse justify-between px-2 pt-[40px] sm:pt-[45px] md:mt-0 md:pt-[60px] lg:flex-row lg:pt-[80px] 2xl:pt-[97px]">
      <div className="mx-auto max-w-[800px] text-center lg:mx-0 lg:text-left">
        <div className="mb-3 flex justify-center gap-3 lg:justify-start">
          <span className="inline-flex items-center rounded-md bg-[#F1F1F0] p-0.5 text-[11px] font-medium text-[#767676]">
            Можно совмещать с работой
            <span className="ml-2 flex h-[13px] w-[13px] items-center justify-center rounded-[100%] bg-[#C1C1C1] text-[#fff]">
              ?
            </span>
          </span>
          <span className="inline-flex items-center rounded-md bg-[#F1F1F0] p-0.5 text-[11px] font-medium text-[#767676]">
            Старт: 18 августа
          </span>
        </div>
        <h1 className="relative z-10 mb-4 md:pr-2 w-auto font-heading text-[28px] font-extrabold leading-[110%] text-[#0F1214] md:mb-3 md:text-[46px] md:leading-[120%]">
          Станьте <span className="text-[#0A85D1]">frontend-разработчиком</span>{" "}
          с нуля и гарантировано{" "}
          <span className="text-[#0A85D1]">устройтесь на работу</span>
        </h1>
        <p className="relative z-10 m-0 w-full font-heading text-lg font-medium leading-[135%] text-[#0F1214] md:text-lg md:leading-[135%] lg:max-w-[570px]">
          За 9 месяцев освоите JavaScript, React, TypeScript <br /> и  получите навыки
          востребованного IT-специалиста.
        </p>
        <button className="relative z-10 mx-auto mt-5 inline-block rounded-[7px] bg-[#0A85D1] px-[20px] py-[12px] text-center font-heading  leading-[160%] text-white lg:mx-0">
          Получить курс по HTML в подарок
        </button>
      </div>
      <div className="mx-auto max-w-[246px] items-center justify-center  md:bottom-[-95px] md:max-w-[798px] lg:absolute lg:right-0">
        <Image src={peoples} alt="" quality={100} />
      </div>
    </div>
    <div className="relative mx-auto w-full max-w-[1230px] px-2 pt-[80px]">
      <div className="relative z-10 mx-auto grid grid-cols-1 rounded-[10px] overflow-hidden md:gap-[20px] md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="flex items-center gap-2.5 md:rounded-2xl bg-[#F5F5F4] px-4 py-5 md:pr-0 backdrop-blur-[11px] md:pl-[20px] md:py-[17px]"
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
      <div className="relative mt-7 h-[150px] xs:h-[200px] sm:h-[300px] lg:h-[400px] xl:h-[450px] 2xl:h-[616px]">
        <Image
          className="w-full rounded-2xl object-cover object-center"
          fill={true}
          src={team}
          alt=""
        />
      </div>
    </div>
  </section>
);
