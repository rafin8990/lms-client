import React from 'react';
import './WhatWeDo.css'
import Fade from 'react-reveal/Fade'


const WhatWeDo = () => {
    return (
        <div className='bg-[#FFFAE8] lg:p-32'>
            <Fade left>
                <h1 className='text-xl md:text-4xl mt-5 text-center font-bold'>What We Do</h1>
            </Fade>
            <Fade right>
                <p className='text-center mt-5 mx-5 lg:mx-0'>Swachh Akshar provides service to improve your public image. Be it brand, political figure, public figure or business figure. <br />
                    We give our best to make your good will to be eminent to the general public.</p>
            </Fade>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:w-[1440px] mt-20 mx-auto '>
                <div className=' w-96 bg-base-100 shadow-xl cardimg p-16'>
                    <h1 className='text-4xl text-white'>Service One</h1>
                    <p className='text-white mt-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto eligendi omnis voluptates doloribus.</p>
                </div>
                <div className=' w-96 bg-base-100 shadow-xl cardimg p-16'>
                    <h1 className='text-4xl text-white'>Service Two</h1>
                    <p className='text-white mt-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto eligendi omnis voluptates doloribus.</p>
                </div>
                <div className=' w-96 bg-base-100 shadow-xl cardimg p-16'>
                    <h1 className='text-4xl text-white'>Service Three</h1>
                    <p className='text-white mt-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto eligendi omnis voluptates doloribus.</p>
                </div>
            </div>
            <div className='flex justify-center py-10'>
                <button className='btn btn-outline'>Show More</button>
            </div>
        </div>
    );
};

export default WhatWeDo;