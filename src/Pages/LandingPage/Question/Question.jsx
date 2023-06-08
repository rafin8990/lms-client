import React from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Question = () => {
  return (
    <div className="bg-black py-5">
      <div className="lg:w-[1440px] mx-auto md:flex justify-between items-center lg:p-20 ">
        <div
          data-aos="flip-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="py-5 px-3"
        >
          <p className="text-xl font2 text-white ">QUESTIONS</p>
          <h1 className="font1 text-2xl md:text-2xl lg:text-6xl text-red-500">
            Well organize content
          </h1>
          <p className="font2 text-white">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum,
            voluptatibus?
          </p>
          <Link to="/services">
            <button className="btn bg-red-500 border-none mt-5 px-20">
              Our Services
            </button>
          </Link>
        </div>
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="py-5 px-3"
        >
          <div className="collapse collapse-plus bg-base-200 mt-2">
            <input type="checkbox" className="peer" />
            <div className="collapse-title  text-xl ">
              Q1: What Is the perpous of swachh Akshar
            </div>
            <div className="collapse-content ">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto, asperiores!
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200 mt-2">
            <input type="checkbox" className="peer" />
            <div className="collapse-title text-xl  ">
              Q2: What Is the perpous of swachh Akshar
            </div>
            <div className="collapse-content ">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto, asperiores!
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200 mt-2">
            <input type="checkbox" className="peer" />
            <div className="collapse-title  text-xl ">
              Q3: What Is the perpous of swachh Akshar
            </div>
            <div className="collapse-content ">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto, asperiores!
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200 mt-2">
            <input type="checkbox" className="peer" />
            <div className="collapse-title  text-xl ">
              Q4: What Is the perpous of swachh Akshar
            </div>
            <div className="collapse-content ">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto, asperiores!
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200 mt-2">
            <input type="checkbox" className="peer" />
            <div className="collapse-title text-xl  ">
              Q5: What Is the perpous of swachh Akshar
            </div>
            <div className="collapse-content ">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto, asperiores!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
