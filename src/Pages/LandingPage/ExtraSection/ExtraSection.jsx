import React from "react";
import "./EtraSection.css";
import phone from "../../../assets/header/I-17.png";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const ExtraSection = () => {
  return (
    <div className="bg lg:p-20 py-5">
      <div className="md:flex ">
        <div className="md:w-1/2">
          <p
            data-aos="fade-up"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration="2000"
            className="font2 text-xl text-red-500 md:my-5"
          >
            ______ Promotion
          </p>
          <h1
            data-aos="fade-up"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration="2000"
            className="font1 text-2xl md:text-4xl lg:text-6xl text-white"
          >
            You Need Cheap Content Writing For Your Business? Swachh Akshar Is
            The Solution!
          </h1>
        </div>
        <div className="md:flex justify-center items-center md:w-1/2">
          <img
            data-aos="fade-down"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration="2000"
            className="w-1/2 md:w-[400px]"
            src={phone}
            alt=""
          />
          <div
            data-aos="fade-down"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration="2000"
            className="ml-5 order-1"
          >
            <h1 className="text-2xl text-white">Call For Business</h1>
            <h1 className="text-2xl md:text-4xl text-red-500">123-234-1234</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtraSection;
