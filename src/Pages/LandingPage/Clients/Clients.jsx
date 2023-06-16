import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Pagination, Navigation } from "swiper";
import { Fade } from "react-reveal";

const Clients = () => {
  return (
    <div className="lg:py-32 bg-black">
      <div className="mb-10">
        <Fade left>
          <h1 className="text-xl md:text-4xl text-red-500 uppercase mt-5 text-center font-bold font1">
            Leaders We Serve
          </h1>
        </Fade>
        <Fade right>
          <p className="font2 text-white text-center mt-5 mx-5 lg:mx-0 ">
            Elevating Excellence, Together. Collaborating with visionaries,
            pioneers, and disruptors to achieve groundbreaking advancements{" "}
            <br /> and set new standards of success in their industries
          </p>
        </Fade>
      </div>

      <Swiper
        slidesPerView={6}
        spaceBetween={20}
        freeMode={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, FreeMode, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://i.ibb.co/ZdR7Jw9/1.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/LS1gkPY/2.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/RDhF0KX/3.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/6ZQ0b97/4.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/2Yb4GVM/5.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/PgpKnmC/6.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/DgVQ4Gx/7.png " alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/kJDq6Bw/Untitled-design.png" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Clients;
