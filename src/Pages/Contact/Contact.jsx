import React from 'react';
import GetInTouch from './GetInTouch/GetInTouch';
import ContactForm from './ContactForm/ContactForm';

const Contact = () => {
    return (
        <div>
            <div className='my-10'>
                <h4 className='text-xl text-center text-[#FA383E]'>GET IN TOUCH WITH US</h4>
                <h1 className='text-2xl md:text-4xl lg:text-5xl font-bold text-center'>We're Always Eager To Hear From You!</h1>
            </div>
            <div className='md:flex justify-around items-center'>
                <GetInTouch></GetInTouch>
                <ContactForm></ContactForm>
            </div>
        </div>
    );
};

export default Contact;