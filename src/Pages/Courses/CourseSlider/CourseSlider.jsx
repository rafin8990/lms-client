import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

const CourseSlider = () => {
  return (
    <div className="py-5">
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
          <div className=" bg md:h-[700px]">
            <div className=" w-1/2 font1 lg:pt-32">
              <div className="flex justify-center items-center">
                <div>
                  <img
                    className="w-52 my-2"
                    // src="https://i.ibb.co/Jxsw2LS/logo-5.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg1 md:h-[700px]">
            <div className=" w-1/2 font1 lg:pt-32">
              <div className="flex justify-center items-center">
                <div>
                  <img
                    className="w-52  my-2"
                    // src="https://i.ibb.co/Jxsw2LS/logo-5.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg2 md:h-[700px]">
            <div className="w-1/2 font1 lg:pt-32">
              <div className="flex justify-center items-center">
                <div>
                  <img
                    className="w-52  my-2"
                    // src="https://i.ibb.co/Jxsw2LS/logo-5.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CourseSlider;
