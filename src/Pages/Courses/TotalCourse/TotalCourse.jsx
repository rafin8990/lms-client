import React from "react";
import CourseSlider from "../CourseSlider/CourseSlider";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const TotalCourse = () => {
  return (
    <div className="lg:py-32 bg-black">
      <div className="md:flex items-center">
        <div className="md:w-2/3">
          <div>
            <h1 className="font1 text-2xl md:text-4xl text-center mb-16 text-red-500">
              Benefits Of the Courses
            </h1>
          </div>
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ml-7 lg:ml-0">
            <div
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              className="card w-80 md:w-96 bg-base-100 shadow-xl "
            >
              <figure className="px-10 pt-10">
                <img
                  src="photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="Graphics of Benefits"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Text</h2>

                <div className="card-actions"></div>
              </div>
            </div>
            <div
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              className="card w-80 md:w-96 bg-base-100 shadow-xl"
            >
              <figure className="px-10 pt-10">
                <img
                  src="photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="Graphics of Benefits"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Text</h2>

                <div className="card-actions"></div>
              </div>
            </div>
            <div
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              className="card w-80 md:w-96 bg-base-100 shadow-xl"
            >
              <figure className="px-10 pt-10">
                <img
                  src="photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="Graphics of Benefits"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Text</h2>

                <div className="card-actions"></div>
              </div>
            </div>
            <div
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              className="card w-80 md:w-96 bg-base-100 shadow-xl"
            >
              <figure className="px-10 pt-10">
                <img
                  src="photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="Graphics of Benefits"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Text</h2>

                <div className="card-actions"></div>
              </div>
            </div>
            <div
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              className="card w-80 md:w-96 bg-base-100 shadow-xl"
            >
              <figure className="px-10 pt-10">
                <img
                  src="photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="Graphics of Benefits"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Text</h2>

                <div className="card-actions"></div>
              </div>
            </div>
            <div
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              className="card w-80 md:w-96 bg-base-100 shadow-xl"
            >
              <figure className="px-10 pt-10">
                <img
                  src="photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="v"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Text</h2>

                <div className="card-actions"></div>
              </div>
            </div>
          </div>
          <div className="mt-5 flex justify-center">
            <button className="font1 btn bg-red-500 text-white text-3xl md:px-36">
              Join The Courses
            </button>
          </div>
        </div>

        <div className="md:w-1/3 mt-10">
          <CourseSlider></CourseSlider>
        </div>
      </div>
    </div>
  );
};

export default TotalCourse;
