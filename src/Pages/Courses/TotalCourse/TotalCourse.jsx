import React from "react";
import CourseSlider from "../CourseSlider/CourseSlider";

const TotalCourse = () => {
  return (
    <div className="lg:py-32 bg-black">
      <div className="md:flex items-center">
        <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="card w-80 md:w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Course Name</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions">
                <button className="btn bg-red-500 text-white border-none">
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
          <div className="card w-80 md:w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Course Name</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions">
                <button className="btn bg-red-500 text-white border-none">
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
          <div className="card w-80 md:w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Course Name</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions">
                <button className="btn bg-red-500 text-white border-none">
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
          <div className="card w-80 md:w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Course Name</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions">
                <button className="btn bg-red-500 text-white border-none">
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
          <div className="card w-80 md:w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Course Name</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions">
                <button className="btn bg-red-500 text-white border-none">
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
          <div className="card w-80 md:w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Course Name</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions">
                <button className="btn bg-red-500 text-white border-none">
                  Enroll Now
                </button>
              </div>
            </div>
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
