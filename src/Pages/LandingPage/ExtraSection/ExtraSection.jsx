import React from 'react';
import Fade from 'react-reveal/Fade'

const ExtraSection = () => {
    return (
        <div className='lg:p-20 bg-[#FFFAE8] mt-2'>
            <div className='md:flex justify-center items-center lg:w-[1440px] mx-auto '>
                <Fade left>
                    <h1 className=' text-3xl  lg:text-6xl py-5 px-5 font-bold md:w-1/2'>Lorem Ipsum is simply dummy text</h1>
                </Fade>
                <div className=' divider divider-horizontal'></div>
                <Fade right>
                    <div className='mx-5 py-5 md:w-2/3'>
                        <div className=''> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </div>
                    </div>
                </Fade>
            </div>
        </div>
    );
};

export default ExtraSection;