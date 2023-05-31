import React from 'react';
import phone from '../../../assets/header/phone.png'
import location from '../../../assets/header/location.png'
import email from '../../../assets/header/email.png'
import web from '../../../assets/header/website.png'
import Fade from 'react-reveal/Fade'





const GetInTouch = () => {
    return (
        <div className='my-10'>
            <div className='md:flex justify-center items-center'>
                <div>

                </div>
                <Fade left>
                    <div className='lg:ml-10'>
                        <div className='border p-5 rounded-xl flex items-center mt-5 bg-base-200 max-w-sm'>
                            <div>
                                <img src={location} alt="" />
                            </div>
                            <div className='ml-5'>
                                <h1 className='text-xl'>We work at</h1>
                                <h3>145, Zone 2, GRP Colony, MP Nagar, Bhopal, MP - 462001 Give us a ring at</h3>
                            </div>
                        </div>
                        <div className='border p-5 rounded-xl flex  items-center mt-5 bg-base-200 max-w-sm'>
                            <div>
                                <img src={phone} alt="" />
                            </div>
                            <div className='ml-5'>
                                <h1 className='text-xl'>Give us a ring at</h1>
                                <h3>+91 9179 673 321</h3>
                            </div>
                        </div>
                        <div className='border p-5 rounded-xl flex items-center mt-5 bg-base-200 max-w-sm'>
                            <div>
                                <img src={email} alt="" />
                            </div>
                            <div className='ml-5'>
                                <h1 className='text-xl'>Ping us at</h1>
                                <h3>sayhi@swachhakshar.com</h3>
                            </div>
                        </div>
                        <div className='border p-5 rounded-xl flex  items-center mt-5 bg-base-200 max-w-sm'>
                            <div>
                                <img src={web} alt="" />
                            </div>
                            <div className='ml-5'>
                                <h1 className='text-xl'>Website</h1>
                                <h3>https://www.swachhakshar.com</h3>
                            </div>
                        </div>
                    </div>
                </Fade>

            </div>
        </div>
    );
};

export default GetInTouch;