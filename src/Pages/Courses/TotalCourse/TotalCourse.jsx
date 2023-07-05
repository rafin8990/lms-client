import React from "react";
import CourseSlider from "../CourseSlider/CourseSlider";

const TotalCourse = () => {
  return (
    <div className="lg:py-32 bg-black">
      <div className="md:flex items-center">
        <div className="md:w-2/3">
          <div>
            <h1 className="text-2xl md:text-4xl text-center my-5 text-red-500">
              Benefits Of the Courses
            </h1>
          </div>
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ml-10 lg:ml-0">
            <div className="card w-80 md:w-96 bg-base-100 shadow-xl">
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
            <div className="card w-80 md:w-96 bg-base-100 shadow-xl">
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
            <div className="card w-80 md:w-96 bg-base-100 shadow-xl">
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
            <div className="card w-80 md:w-96 bg-base-100 shadow-xl">
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
            <div className="card w-80 md:w-96 bg-base-100 shadow-xl">
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
            <div className="card w-80 md:w-96 bg-base-100 shadow-xl">
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
            <button className="btn btn-sm bg-red-500 text-white  md:px-36">
              Join The Courses
            </button>
          </div>
        </div>

        <div className="md:w-1/3">
          <CourseSlider></CourseSlider>
        </div>
      </div>
    </div>
  );
};

export default TotalCourse;
