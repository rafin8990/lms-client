import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const CourseHeader = () => {
  return (
    <div className="py-32 bg-black">
      <div className="md:flex justify-between items-center">
        <div
          data-aos="flip-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="md:w-1/2"
        >
          <h1 className="font1 text-4xl md:text-6xl text-center text-red-500">
            Course Name
          </h1>
          <p className="font2   text-xl mx-10 text-white">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga
            placeat molestiae ad, quibusdam ab accusamus ipsa praesentium saepe
            vero! Praesentium molestias.lorem10
          </p>
          <div className="flex justify-around mt-5 mx-5">
            <h3 className="text-xl md:text-4xl text-red-500">
              Type: Content Writing
            </h3>
            <h3 className="text-xl md:text-4xl text-red-500">
              Duration: 6 Months
            </h3>
          </div>
        </div>
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="md:w-1/3 my-5 mx-5"
        >
          <img
            className=""
            src="https://www.tricasol.com/wp-content/uploads/2022/11/service-5.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default CourseHeader;
