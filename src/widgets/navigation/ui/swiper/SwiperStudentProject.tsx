import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import SwiperCore from 'swiper'
import { useRef } from "react";
import { ButtonSlider } from "src/widgets";
import { features } from "./model/features";
import Image from "next/image";


export const SwiperStudentProject = () => {
  const swiperRef = useRef<SwiperCore | null>(null);
  
  const goToSlide = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };

  return (
    <>
      <div className="bg-white border border-[#E6E9EC] rounded-2xl pl-4 pt-5 pb-24 mb-8 drop-shadow-xl">
        <div className="flex gap-2">
          <p className="w-[13px] h-[13px] bg-[#E6E9EC] rounded-[10px]"></p>
          <p className="w-[13px] h-[13px] bg-[#E6E9EC] rounded-[10px]"></p>
          <p className="w-[13px] h-[13px] bg-[#E6E9EC] rounded-[10px]"></p>
        </div>
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: true
          }}
          modules={[Navigation, Pagination, Autoplay]}
        >
          {features.map((card) => (
            <SwiperSlide key={card.id}>
              <div className="flex flex-col md:flex-row gap-10 my-10 md:mx-24">
                <div className="flex-1">
                  <Image className="" src={card.img} quality={100} alt="" />
                </div>
                <div className="flex-1 text-[#36352F] font-heading mt-5">
                  <h2 className="font-bold text-[26px] leading-tight">{card.title}</h2>
                  <p className="text-[15px] mt-4 pr-12 leading-tight">{card.subtitle}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex justify-center gap-2 mb-8 flex-wrap">
        <ButtonSlider onClick={() => goToSlide(0)} text="Список покупок" />
        <ButtonSlider
          onClick={() => goToSlide(1)}
          text="Сайт колледжа в Кирове"
        />
        <ButtonSlider onClick={() => goToSlide(2)} text="Доставка еды" />
      </div>
    </>
  );
};
