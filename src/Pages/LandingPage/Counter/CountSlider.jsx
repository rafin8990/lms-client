import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

const CountSlider = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        /*  pagination={{
                clickable: true,
            }} */

        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className=" flex justify-center items-center">
            <img
              className="w-20 md:w-40 mt-12"
              src="https://i.ibb.co/p3hBmkg/logoo.png"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-7 lg:p-16  bg-[#FA383E] rounded-2xl text-center">
            <h1 className="text-7xl text-white font-bold">15</h1>
            <p className="text-xl text-white">Brands</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" flex justify-center items-center">
            <img
              className="w-20 md:w-40  mt-8"
              src="https://i.ibb.co/VJv626Y/logooo.png"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-7 lg:p-16  bg-[#FA383E] rounded-2xl text-center">
            <h1 className="text-7xl text-white font-bold">15</h1>
            <p className="text-xl text-white">Brands</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" flex justify-center items-center">
            <img
              className="w-20 md:w-40 mt-5"
              src="https://i.ibb.co/RvndQHT/logo.png"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-7 lg:p-16  bg-[#FA383E] rounded-2xl text-center">
            <h1 className="text-7xl text-white font-bold">15</h1>
            <p className="text-xl text-white">Brands</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" flex justify-center items-center">
            <img
              className="w-20 md:w-40 mt-10"
              src="https://i.ibb.co/GtBCvm5/image1.jpg"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-7 lg:p-16  bg-[#FA383E] rounded-2xl text-center">
            <h1 className="text-7xl text-white font-bold">15</h1>
            <p className="text-xl text-white">Brands</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CountSlider;
