"use client";
import { SwiperStudentProject } from "src/widgets";

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
        <SwiperStudentProject />
      </div>
    </section>
  );
};
