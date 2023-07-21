import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

const CounterSilder = () => {
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
          <div className="p-7 lg:p-16  bg-[#FA383E] rounded-2xl text-center">
            <h1 className="text-7xl text-white font-bold">38</h1>
            <p className="text-xl text-white">Clients</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" flex justify-center items-center">
            <img
              className=" w-20 md:w-40 mt-5"
              src="https://i.ibb.co/cDVyHdw/logoooooo.png"
              alt=""
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className=" flex justify-center items-center">
            <img
              className="mt-10 w-28 lg:w-full"
              src="https://i.ibb.co/FJd9PqL/logo1.png"
              alt=""
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className=" flex justify-center items-center">
            <img
              className="w-20 md:w-40 mt-5"
              src="https://i.ibb.co/DKVd0LL/logooooo.png"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" flex justify-center items-center">
            <img
              className="mt-7 w-44 md:w-full"
              src="https://i.ibb.co/ZfQVgyj/logoooo.png"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-7 lg:p-16 bg-[#FA383E] rounded-2xl text-center">
            <h1 className="text-7xl text-white font-bold">38</h1>
            <p className="text-xl text-white">Clients</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CounterSilder;
