import React from "react";
import user from "../../../assets/header/slider3.png";
import Fade from "react-reveal/Fade";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Learner = () => {
  return (
    <div className="bg-black lg:p-20">
      <Fade down>
        <h1 className="font1 text-xl pt-10 md:text-4xl font-bold  text-white text-center">
          Hear what our learners have to say
        </h1>
      </Fade>

      <div className="mt-10 lg:my-20 grid grid-cols-1 md:grid-cols-2  gap-5 lg:w-[1440px] mx-2 lg:mx-auto">
        <div
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1000"
          className="bg-gray-100 hover:bg-[#FA383E] hover:text-white rounded-2xl p-10"
        >
          <div>
            <p className="text-xl font2 hover:text-white">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
              laborum, reiciendis sapiente dolorum minus nam maxime molestiae ab
              ullam velit omnis qui commodi! Perferendis culpa esse accusantium
              facere consequuntur temporibus.
            </p>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div>
                <img
                  className=" w-16 h-16 rounded-full border border-[#FA383E]"
                  src={user}
                  alt=""
                />
              </div>
              <div className="ml-5">
                <h1 className="text-xl"> Cody Fisher</h1>
                <p className=" hover:text-white">May 20, 2021</p>
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1000"
          className="bg-gray-100 hover:bg-[#FA383E] hover:text-white rounded-2xl p-10"
        >
          <div>
            <p className="text-xl font2 hover:text-white">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
              laborum, reiciendis sapiente dolorum minus nam maxime molestiae ab
              ullam velit omnis qui commodi! Perferendis culpa esse accusantium
              facere consequuntur temporibus.
            </p>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div>
                <img
                  className=" w-16 h-16 rounded-full border border-[#FA383E]"
                  src={user}
                  alt=""
                />
              </div>
              <div className="ml-5">
                <h1 className="text-xl"> Cody Fisher</h1>
                <p className=" hover:text-white">May 20, 2021</p>
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1000"
          className="bg-gray-100 hover:bg-[#FA383E] hover:text-white rounded-2xl p-10"
        >
          <div>
            <p className="text-xl  font2 hover:text-white">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
              laborum, reiciendis sapiente dolorum minus nam maxime molestiae ab
              ullam velit omnis qui commodi! Perferendis culpa esse accusantium
              facere consequuntur temporibus.
            </p>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div>
                <img
                  className=" w-16 h-16 rounded-full border border-[#FA383E]"
                  src={user}
                  alt=""
                />
              </div>
              <div className="ml-5">
                <h1 className="text-xl"> Cody Fisher</h1>
                <p className=" hover:text-white">May 20, 2021</p>
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1000"
          className="bg-gray-100 hover:bg-[#FA383E] hover:text-white rounded-2xl p-10"
        >
          <div>
            <p className="text-xl font2 hover:text-white">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
              laborum, reiciendis sapiente dolorum minus nam maxime molestiae ab
              ullam velit omnis qui commodi! Perferendis culpa esse accusantium
              facere consequuntur temporibus.
            </p>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div>
                <img
                  className=" w-16 h-16 rounded-full border border-[#FA383E]"
                  src={user}
                  alt=""
                />
              </div>
              <div className="ml-5">
                <h1 className="text-xl"> Cody Fisher</h1>
                <p className=" hover:text-white">May 20, 2021</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learner;
