import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Header.css";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-[url('/src/assets/header/Moon.d5aa06ae')]">
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
                    src="https://i.ibb.co/Jxsw2LS/logo-5.png"
                    alt=""
                  />
                  {/* <h3 className="text-lg md:text-2xl text-[#FA383E] my-3">
                    Swachh Akshar
                  </h3> */}
                  <h1 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold  leading-loose">
                    DISCOVER
                  </h1>
                  <h1 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold  leading-loose lg:mt-5">
                    THE WRITTER{" "}
                  </h1>
                  <h1 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold leading-loose lg:mt-5">
                    WITHIN YOU
                  </h1>
                  <Link to="/services">
                    <button className="btn bg-[#FA383E] text-white border-none my-5 px-10">
                      Learn More
                    </button>
                  </Link>
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
                    src="https://i.ibb.co/Jxsw2LS/logo-5.png"
                    alt=""
                  />
                  {/* <h3 className="text-lg md:text-2xl text-[#FA383E] my-3">
                    Swachh Akshar
                  </h3> */}
                  <h1 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold  leading-loose">
                    DISCOVER
                  </h1>
                  <h1 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold  leading-loose lg:mt-5">
                    THE WRITTER{" "}
                  </h1>
                  <h1 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold  leading-loose lg:mt-5">
                    WITHIN YOU
                  </h1>
                  <Link to="/services">
                    <button className="btn bg-[#FA383E] text-white border-none my-5 px-10">
                      Learn More
                    </button>
                  </Link>
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
                    src="https://i.ibb.co/Jxsw2LS/logo-5.png"
                    alt=""
                  />
                  {/*  <h3 className="text-lg md:text-2xl text-[#FA383E] my-3">
                    Swachh Akshar
                  </h3> */}
                  <h1 className="text-2xl md:text-4xl lg:text-7xl  text-white font-bold  leading-loose">
                    DISCOVER
                  </h1>
                  <h1 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold  leading-loose lg:mt-5">
                    THE WRITTER{" "}
                  </h1>
                  <h1 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold  leading-loose lg:mt-5">
                    WITHIN YOU
                  </h1>
                  <Link to="/services">
                    <button className="btn bg-[#FA383E] text-white border-none my-5 px-10">
                      Learn More
                    </button>
                  </Link>
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

export default Header;
