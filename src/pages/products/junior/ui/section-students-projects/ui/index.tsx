import { ButtonSlider } from "src/widgets";
import Image from "next/image";
import project_2 from './assets/project-2.jpg'
export const StudentProject = () => {
  return (
    <section>
      <div className="relative mx-auto flex w-full max-w-[1230px] flex-col justify-between px-5 pt-[40px] sm:pt-[45px] md:mt-0 md:pt-[60px] lg:flex-col lg:pt-[80px] 2xl:pt-[97px]">
        <div className="w-10/12 m-auto text-center mb-10">
          <h1 className="relative z-10 mb-10 w-auto font-heading text-[28px] font-extrabold leading-[110%] text-[#0F1214] md:mb-10 md:text-[46px] md:leading-[110%]">
            Наши студенты создают проекты с высоким коммерческим потенциалом
          </h1>
          <p>
            Вы получите знания, которые сможете применить на реальной работе.
          </p>
          <p>Или использовать для собственных проектов.</p>
        </div>
        <div className="bg-white border border-[#E6E9EC] rounded-2xl pl-4 pt-5 mb-8">
          <div className="flex gap-2">
            <p className="w-[13px] h-[13px] bg-[#E6E9EC] rounded-[10px]"></p>
            <p className="w-[13px] h-[13px] bg-[#E6E9EC] rounded-[10px]"></p>
            <p className="w-[13px] h-[13px] bg-[#E6E9EC] rounded-[10px]"></p>
          </div>
          <div className="flex gap-10 py-14 px-24">
            <div className="flex-1"><Image src={project_2} quality={100} alt=""/></div>
            <div className="flex-1 text-[#36352F]">
              <h2 className="font-bold text-[26px] mt-10">Сайт колледжа в Кирове</h2>
              <p className="text-[15px] mt-4">
                Наш выпускник Сергей сделал сайт для ВВКИФПУ. Сайт не просто
                стильный, но и функциональный — можно изучить направления
                подготовки, расписание и правила приема. А еще у сайта есть
                версия для слабовидящих.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-2 mb-8">
          <ButtonSlider text="Список покупок" />
          <ButtonSlider text="Сайт колледжа в Кирове" />
          <ButtonSlider text="Доставка еды" />
        </div>
      </div>
    </section>
  );
};
