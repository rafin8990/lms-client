import React from "react";
import "./EtraSection.css";
import { TypeAnimation } from "react-type-animation";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const ExtraSection = () => {
  return (
    <div className=" lg:p-20 py-5">
      <div>
        <div>
          <h1
            data-aos="fade-up"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration="2000"
            className="text-7xl text-center font1  text-red-500"
          >
            Collaboration
          </h1>
        </div>
        <div className="md:flex items-center">
          <div id="text" className=" md:w-1/2">
            <TypeAnimation
              sequence={[
                "Here is line one ",
                2000,
                "here is line two ",
                2000,
                "here is line 3",
              ]}
              speed={50}
              style={{ fontSize: "2em" }}
              wrapper="h2"
              repeat={Infinity}
            />
          </div>
          <div className="md:flex justify-center items-center md:w-1/2">
            <div
              data-aos="fade-down"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-duration="2000"
              className="ml-5 order-1"
            >
              <img
                src="https://cdn.dribbble.com/users/4341791/screenshots/8574595/media/3cbca4ba607b111c4d4702f210062a62.gif"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtraSection;
