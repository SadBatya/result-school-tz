import { features } from "../model/feature";
import Image from "next/image";
import peoples from "../ui/assets/people.png";
import calendarIcon from "../ui/assets/calendar.svg";
import bgImage from "./assets/bgimage.png";
import bgImage2 from "./assets/bgimage2.png";
export const SectionFrontend = () => {
  return (
    <section>
      <div className="relative mx-auto flex w-full max-w-[1230px] flex-col justify-between px-5 pt-[40px] sm:pt-[45px] md:mt-0 md:pt-[60px] lg:flex-col lg:pt-[80px] 2xl:pt-[97px]">
        <h1 className="relative w-10/12 z-10 mb-32 font-heading text-[28px] font-extrabold leading-[110%] text-[#0F1214] md:mb-10 md:text-[46px] md:leading-[110%] sm:mb-36">
          Что делает фронтенд-разработчик?
        </h1>
        <div className="flex relative bg-[#F5F5F4] rounded-2xl flex-col md:flex-row">
          <div className="pt-6 pb-6 pl-8 px-8 sm:pr-0">
            <Image src={calendarIcon} alt="" className="pb-4" />
            <p className="font-semibold text-lg">
              Создает сайты и приложения — все, что видно на экране компьютера
              или телефона
            </p>
            <p>
              Работа кнопок и меню, быстрая загрузка веб-страниц, красивая
              анимация — вот чем занимаются фронтендеры.
            </p>
          </div>
          <div className="bg-cover bg-center flex">
            <Image
              className="hidden md:block"
              src={bgImage}
              quality={100}
              alt=""
            />
            <Image
              className="block md:hidden"
              src={bgImage2}
              quality={100}
              alt=""
            />
          </div>
          <div className="absolute w-[154px] right-0 sm:top-[-135px] sm:w-[221px] top-[-97px]">
            <Image src={peoples} quality={100} alt="" />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-6 pt-6">
          {features.map(({ id, icon, title, subtitle }) => (
            <div key={id} className="bg-[#F5F5F4] rounded-2xl px-6 py-8 flex-1">
              <div className="pb-5">
                <Image src={icon} quality={100} alt="" />
              </div>
              <p className="font-semibold text-lg">{title}</p>
              <p>{subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
