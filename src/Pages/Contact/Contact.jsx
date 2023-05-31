import React from 'react';
import GetInTouch from './GetInTouch/GetInTouch';
import ContactForm from './ContactForm/ContactForm';
import Fade from 'react-reveal/Fade'

const Contact = () => {
    return (
        <div className='bg-[#FFFAE8]'>
            <Fade down>
                <div className='py-10'>
                    <h4 className='text-xl text-center text-[#FA383E]'>GET IN TOUCH WITH US</h4>
                    <h1 className='text-2xl md:text-4xl lg:text-5xl font-bold text-center'>We're Always Eager To Hear From You!</h1>
                </div>
                <div className='md:flex justify-around items-center'>
                    <GetInTouch></GetInTouch>
                    <ContactForm></ContactForm>
                </div>
            </Fade>
        </div>
    );
};

export default Contact;