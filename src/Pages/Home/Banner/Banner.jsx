import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../../assets/BannerImage/20230705_1688550287_256292.png";
import img2 from "../../../assets/BannerImage/20230716_1689481533_493220.png";
import img3 from "../../../assets/BannerImage/20230831_1693482839_309910.png";
import img4 from "../../../assets/BannerImage/20230902_1693651484_354842.png";
import img5 from "../../../assets/BannerImage/20230910_1694323889_325380.png";
import floatingImg from "../../../assets/BannerImage/floatingImg.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  return (
    <div className="relative">
      <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="" />
        </SwiperSlide>
      </Swiper>
      </div>
      <div className="hidden md:block md:sticky z-10 ">
      <img className="-mt-8 mx-auto shadow-2xl" src={floatingImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
