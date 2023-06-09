import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

const CourseSlider = () => {
  return (
    <div className="py-5  mx-5">
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
          <div>
            <img
              className=" h-[380px] rounded-xl"
              src="https://d2jyir0m79gs60.cloudfront.net/news/images/successful-college-student-lg.png"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              className=" h-[380px] rounded-xl"
              src="https://ocdn.eu/images/pulscms/MzM7MDA_/cb1b6fa6-3e27-42e8-81a5-58fe53a89799.jpeg"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              className=" h-[380px] rounded-xl"
              src="https://uploads-ssl.webflow.com/62fc39d4a8950f2d6f3b35f6/6310b2996a18aa74e6dab98a_Beginning-of-German-University.jpeg"
              alt=""
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CourseSlider;
