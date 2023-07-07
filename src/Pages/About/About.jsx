import React from "react";
import pic from "../../assets/header/group.jpg";
import { FaCheck } from "react-icons/fa";
import Fade from "react-reveal/Fade";

const About = () => {
  return (
    <div>
      <Fade down>
        <div className="lg:p-32">
          <h1 className="font1 text-2xl md:text-4xl text-[#FA383E] font-bold pt-10 pb-5 text-center">
            ABOUT US
          </h1>
          <div className="flex justify-center">
            <p className=" text-center font2 px-2 w-[500px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
          </div>
          <div className="mt-10 md:flex justify-around items-center">
            <Fade left>
              <div className="mx-4 mb-4 md:w-1/2 flex justify-center ">
                <img className="md:w-2/3 rounded-xl" src={pic} alt="" />
              </div>
            </Fade>
            <Fade right>
              <div className="md:w-1/2">
                <h1 className="text-xl text-[#FA383E] font1 md:text-4xl lg:text-4xl font-bold mx-4">
                  The Perfect Solution For All Content Writting Service
                </h1>
                <p className="mx-4">
                  We are the final destination for not only your queries, but
                  even to the smallest of the small difficulties, you have,
                  waiting to be solved. We would together say ‘bid adieu’ to the
                  problems and let the creativity flow.{" "}
                </p>
                <div className="flex justify-around">
                  <div className="ml-5 mt-5">
                    <h3 className="text-xl text-[#FA383E] font-semibold">
                      Our Vision
                    </h3>
                    <p>
                      To be the platform where Content Writing is the pole star
                      of the sky yet is accessible and grounded to everyone. To
                      give creativity a scope to be more than just being born
                      with it.
                    </p>
                  </div>
                  <div className="ml-5 mr-5 mt-5">
                    <h3 className="text-xl text-[#FA383E] font-semibold">
                      Our Mission
                    </h3>
                    <p>
                      We wish to make Swachh Akshar a global platform where
                      everyone can learn the skill to play with words with
                      minimum effort yet make an impactful change with simpler
                      words of vocabulary.
                    </p>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </Fade>
      <div className="bg-black lg:p-32">
        <div className="md:flex justify-around items-center">
          <Fade left>
            <div className="md:w-1/2 lg:mx-20">
              <h1 className="text-xl md:text-4xl lg:text-4xl text-[#FA383E] font-bold font1 mx-4 ">
                Swachh Akshar Is a Virtual Platform
              </h1>
              <br />
              <p className="mx-4 text-white font2">
                Swachh Akshar is a virtual platform that makes it possible for
                anyone to learn about the nuances of writing, whether it be in
                business and leadership, scriptwriting, poetry, or punchlines
                for memes&Ads.{" "}
              </p>
              <br />
              <p className="mx-4 text-white font2">
                We provide a certification-based course,with proper assessment
                under expert facultymembers. We have experienced faculty
                members, who have pro active capabilities in their proficiency.
              </p>
            </div>
          </Fade>
          <Fade right>
            <div className=" md:w-1/2 flex justify-center items-center mx-4 lg:mx-20 py-5">
              <img className="md:w-2/3 rounded-xl" src={pic} alt="" />
            </div>
          </Fade>
        </div>
      </div>
      <div className=" lg:p-32">
        <div className="mt-10 md:flex justify-around items-center">
          <Fade left>
            <div className="mx-4 mb-4 md:w-1/2 flex justify-center ">
              <img className="md:w-2/3 rounded-xl" src={pic} alt="" />
            </div>
          </Fade>
          <Fade right>
            <div className="md:w-1/2">
              <h1 className="text-xl md:text-4xl lg:text-4xl font-bold mx-4 text-[#FA383E] font1">
                Writing Articles
              </h1>
              <p className="mx-4 font2">
                We are the final destination for not only your queries, but even
                to the smallest of the small difficulties, you have, waiting to
                be solved. We would together say ‘bid adieu’ to the problems and
                let the creativity flow.{" "}
              </p>
              <div className="flex justify-around">
                <div className="ml-5 mt-5">
                  <p className="flex font2">
                    <span className="mr-3">
                      <FaCheck></FaCheck>
                    </span>{" "}
                    Video Scripts
                  </p>
                  <p className="flex font2">
                    <span className="mr-3">
                      <FaCheck></FaCheck>
                    </span>{" "}
                    Email Newsletters
                  </p>
                  <p className="flex font2">
                    <span className="mr-3">
                      <FaCheck></FaCheck>
                    </span>{" "}
                    Keynote Speeches
                  </p>
                  <p className="flex font2">
                    <span className="mr-3">
                      <FaCheck></FaCheck>
                    </span>{" "}
                    Social Media Posts
                  </p>
                </div>
                <div className="ml-5 mr-5 mt-5">
                  <p className="flex ">
                    <span className="mr-3">
                      <FaCheck></FaCheck>
                    </span>{" "}
                    Podcast Titles
                  </p>
                  <p className="flex">
                    <span className="mr-3">
                      <FaCheck></FaCheck>
                    </span>{" "}
                    White Papers
                  </p>
                  <p className="flex">
                    <span className="mr-3">
                      <FaCheck></FaCheck>
                    </span>{" "}
                    Landing Pages
                  </p>
                  <p className="flex">
                    <span className="mr-3">
                      <FaCheck></FaCheck>
                    </span>{" "}
                    Copywriting
                  </p>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default About;
