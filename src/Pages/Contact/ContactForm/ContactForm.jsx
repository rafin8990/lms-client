import React from 'react';
import Fade from 'react-reveal/Fade'

const ContactForm = () => {
    return (
        <Fade right>
            <div className=' my-10 border rounded-lg bg-'>
                <h1 className=' text-2xl md:text-4xl font1 font-bold text-red-500 text-center mt-10 mb-2'>Let's Work Together</h1>
                <div>
                    <form className=''>
                        <div className='md:flex justify-center'>
                            <div className='mx-3'>
                                <p className='mb-3 text-white'>First Name</p>
                                <input className='input input-bordered max-w-sm w-80' placeholder='First Name' type="text" />
                            </div>
                            <div className='mx-3 md:ml-5'>
                                <p className='mb-3 text-white'>Last Name</p>
                                <input className='input input-bordered max-w-sm w-80' placeholder='Last Name' type="text" />
                            </div>
                        </div>
                        <div className='md:flex justify-center'>
                            <div className='mx-3 mt-5'>
                                <p className='mb-3  text-white'>Your Email</p>
                                <input className='input input-bordered max-w-sm w-80' placeholder='Enter Email' type="email" />
                            </div>
                            <div className='mx-3 mt-5 md:ml-5'>
                                <p className='mb-3 text-white'>Subject</p>
                                <input className='input input-bordered max-w-sm w-80' placeholder='Enter Subject' type="text" />
                            </div>
                        </div>
                        <div className='mx-3  mt-5 '>
                            <p className='mb-3 mt-5 text-white'>Message</p>
                            <textarea className=' input input-bordered w-full p-20' placeholder='Write Your Message Here'></textarea>
                        </div>
                        <div className='mx-3  my-5'>
                            <button className='btn bg-black text-white  w-full'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </Fade>
    );
};

export default ContactForm;