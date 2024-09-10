"use client";
import { SwiperStudentProject } from "src/widgets";

export const StudentProject = () => {
  return (
    <section>
      <div className="relative mx-auto flex w-full max-w-[1230px] flex-col justify-between px-5 lg:px-0 pt-[40px] sm:pt-[45px] md:mt-0 md:pt-[190px] lg:flex-col">
        <div className="md:w-10/12 m-auto text-center font-heading mb-10">
          <h1 className="relative z-10 mb-10 w-auto text-[26px] font-extrabold text-[#0F1214] md:mb-4 md:text-[38px] md:leading-tight">
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
