import React from 'react';
import pic from '../../assets/header/group.jpg'
import { FaCheck } from 'react-icons/fa';
import { Fade } from 'react-reveal';

const Collaboration = () => {
    return (
        <div className=' bg-[#FA383E] min-h-screen'>
            <div className='md:py-20 lg:p-32 '>
                <div className=' md:flex justify-around items-center'>
                    <Fade left>
                        <div className='mx-4 mb-4 md:w-1/2 flex justify-center '>
                            <img className='md:w-2/3 rounded-xl' src={pic} alt="" />
                        </div>
                    </Fade>
                    <Fade right>
                        <div className='md:w-1/2'>
                            <h1 className='text-xl md:text-4xl lg:text-4xl font1 text-white font-bold mx-4 lg:my-5'>Writing Articles</h1>
                            <p className='mx-4 font2 text-white '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse. </p>
                            <div className='divider'></div>
                            <p className='mx-4 font2 text-white '>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.</p>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    );
};

export default Collaboration;