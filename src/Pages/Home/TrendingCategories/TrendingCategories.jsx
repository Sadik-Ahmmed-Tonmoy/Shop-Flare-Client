import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import phone from "../../../assets/TrendingCategoriesImg/iphone (1).jpg";
import macBook from "../../../assets/TrendingCategoriesImg/laptop.jpg";
import drone from "../../../assets/TrendingCategoriesImg/drone.jpg";
import headphone from "../../../assets/TrendingCategoriesImg/headphone.jpg";
import speaker from "../../../assets/TrendingCategoriesImg/speaker.jpg";
import samsung from "../../../assets/TrendingCategoriesImg/samsung.jpg";
import cable from "../../../assets/TrendingCategoriesImg/cable.jpg";
import charger from "../../../assets/TrendingCategoriesImg/charger.jpg";
import djiMINI from "../../../assets/TrendingCategoriesImg/djiMINI.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

const TrendingCategories = () => {
  return (
    <div className="container mx-auto px-2 py-5">
      <h3 className="my-5 text-2xl">Trending Categories</h3>
      <div className="md:w-10/12 mx-auto">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          centeredSlides={false}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="border rounded-md p-2 block">
              <Link to={"/dashboard/Apple"}>
                <div>
                  <img src={phone} alt="" />
                  <p className="text-center">iPhone</p>
                </div>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="border rounded-md p-2">
              <Link>
                <div>
                  <img src={macBook} alt="" />
                  <p className="text-center">macBook</p>
                </div>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="border rounded-md p-2">
              <Link>
                <div>
                  <img src={drone} alt="" />
                  <p className="text-center">Drone</p>
                </div>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="border rounded-md p-2">
              <Link>
                <div>
                  <img src={headphone} alt="" />
                  <p className="text-center">Headphone</p>
                </div>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="border rounded-md p-2">
              <Link>
                <div>
                  <img src={speaker} alt="" />
                  <p className="text-center">Speaker</p>
                </div>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="border rounded-md p-2">
              {" "}
              <Link>
                <div>
                  <img src={samsung} alt="" />
                  <p className="text-center">Samsung</p>
                </div>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="border rounded-md p-2">
              {" "}
              <Link>
                <div>
                  <img src={cable} alt="" />
                  <p className="text-center">Cable</p>
                </div>
              </Link>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="flex justify-between my-10 gap-2 md:gap-14">
        <div className="md:w-6/12 shadow-2xl">
          <Link>
            <div>
              <img src={charger} alt="" />
            </div>
          </Link>
        </div>
        <div className="md:w-6/12 shadow-2xl">
          <Link>
            <div>
              <img src={djiMINI} alt="" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TrendingCategories;
