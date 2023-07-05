import React from "react";
import CountUp from "react-countup";
import "./Counter.css";
import Fade from "react-reveal/Fade";
import AOS from "aos";
import "aos/dist/aos.css";
import CounterSilder from "./CounterSilder";
import CountSlider from "./CountSlider";
AOS.init();

const Counter = () => {
  return (
    <div className=" bg-black py-32">
      <div>
        <Fade right>
          <h1 className=" font1 text-xl md:text-4xl text-white font-bold text-center mx-5 my-2 lg:mx-0">
            SWACHH AKSHAR IN NUMBERS
          </h1>
        </Fade>
        <Fade left>
          <p className="font2 text-white text-center mx-10 lg:mx-0">
            Some facts which will tell you more about us…
          </p>
        </Fade>
        <div className="lg:w-[1440px] mx-5 lg:mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
          <div className="p-5 lg:p-0 bg-white rounded-2xl text-center my-3">
            <CounterSilder></CounterSilder>
          </div>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="p-5 lg:p-10 bg-[#FA383E] rounded-2xl text-center my-3"
          >
            <h1 className="text-7xl text-white font-bold">
              <CountUp end={17} />
            </h1>
            <p className="text-xl text-white">Projects</p>
          </div>

          <div
            data-aos="flip-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="p-5 lg:p-10 bg-[#FA383E] rounded-2xl text-center my-3"
          >
            <h1 className="text-7xl text-white font-bold">
              <CountUp end={3324} />
            </h1>
            <p className="text-xl text-white">Content Written</p>
          </div>
          <div className="p-5 lg:p-0 bg-white rounded-2xl text-center my-3">
            <CountSlider></CountSlider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
