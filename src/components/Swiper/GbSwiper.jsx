import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "./GbSwiper.css";
import { EffectCards } from "swiper";
import banner from "../../assets/image/Banner.png";
import banner1 from "../../assets/image/Banner (1).png";
import banner2 from "../../assets/image/Banner (2).png";

const GbSwiper = () => {
  
  return (
    <div className="container mt-[100px]">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={banner} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner2} alt="slide_image" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default GbSwiper;
