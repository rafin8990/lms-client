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
          <div className=" flex justify-center items-center">
            <img
              className=" w-40"
              src="https://i.ibb.co/cDVyHdw/logoooooo.png"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" flex justify-center items-center">
            <img
              className=" "
              src="https://i.ibb.co/FJd9PqL/logo1.png"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" flex justify-center items-center">
            <img
              className="w-40"
              src="https://i.ibb.co/DKVd0LL/logooooo.png"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" flex justify-center items-center">
            <img
              className="mt-5"
              src="https://i.ibb.co/ZfQVgyj/logoooo.png"
              alt=""
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CounterSilder;
