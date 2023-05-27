import React from 'react';

const ExtraSection = () => {
    return (
        <div className='lg:p-20 bg-[#FFFAE8]'>
            <div className='md:flex justify-center items-center lg:w-[1440px] mx-auto '>
                <h1 className=' texxt-2xl lg:text-6xl font-bold md:w-1/2'>Lorem Ipsum is simply dummy text</h1>
                <div className=' divider divider-horizontal'></div>
                <div className='md:w-1/2'> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </div>
            </div>
        </div>
    );
};

export default ExtraSection;