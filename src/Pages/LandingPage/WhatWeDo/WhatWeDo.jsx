import React, { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import img from "../../../assets/header/young-woman-teacher-wearing-glasses-sitting-school-desk-front-blackboard-classroom-globe-checking-class-register-holding-pointer-looking-displeased-raising-arm-displeasure.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const WhatWeDo = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://lms-server-indol.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="bg1 lg:p-32">
      <Fade left>
        <h1 className="text-xl md:text-4xl text-[#FA383E] mt-5 text-center font-bold font1">
          WHAT WE DO
        </h1>
      </Fade>
      <Fade right>
        <p className="font-2 text-center mt-5 mx-5 lg:mx-0 text-white">
          Swachh Akshar provides service to improve your public image. Be it
          brand, political figure, public figure or business figure. <br />
          We give our best to make your good will to be eminent to the general
          public.
        </p>
      </Fade>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:w-[1440px] mt-20 mx-auto ">
        {services.map((service) => (
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            key={service._id}
            className="card ml-5 md:ml-0 w-80 lg:w-96 bg-base-100 shadow-xl"
          >
            <div className="card-body">
              <h2 className="card-title text-[#FA383E] font1">
                {service.name}
              </h2>
              <p className="font2">
                If a dog chews shoes whose shoes does he choose?
              </p>
              <div className="card-actions">
                <Link to={`/services/${service._id}`}>
                  <button className="btn hover:bg-black text-white bg-[#FA383E] border-none mt-5">
                    View details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center py-10">
        <Link to="/services">
          <button className="btn btn-outline text-white border-[#FA383E] hover:bg-[#FA383E] hover:text-white hover:border-none font2">
            Show More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default WhatWeDo;
