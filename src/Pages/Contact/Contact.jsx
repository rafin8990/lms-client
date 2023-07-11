import React from "react";
import GetInTouch from "./GetInTouch/GetInTouch";
import ContactForm from "./ContactForm/ContactForm";
import Fade from "react-reveal/Fade";

const Contact = () => {
  return (
    <div className="bg-black">
      <Fade down>
        <div className="py-10">
          <h4 className="text-xl font1 text-center text-white">
            GET IN TOUCH WITH US
          </h4>
          <h1 className="text-2xl font1 text-[#FA383E] md:text-4xl lg:text-5xl font-bold text-center">
            We're Always Eager To Hear From You!
          </h1>
        </div>
        <div className="md:flex justify-around items-center">
          <GetInTouch></GetInTouch>
          <ContactForm></ContactForm>
        </div>
      </Fade>
    </div>
  );
};
//this is constct section
//this is constct section
//this is constct section
//this is constct section
//this is constct section
export default Contact;
