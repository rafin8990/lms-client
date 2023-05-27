import React from 'react';
import CountUp from 'react-countup';
import AOS from 'aos'
import 'aos/dist/aos.css';
AOS.init();

const Counter = () => {
    return (
        <div className=' bg-[#FCD752] py-32'>

            <div>
                <h1 data-aos="slide-right" data-aos-duration='1000' className=' text-2xl md:text-4xl font-bold text-white text-center'>SWACHH AKSHAR IN NUMBERS</h1>
                <p data-aos="slide-left" data-aos-duration='1000' className='text-white text-center'>Some facts which will tell you more about us…</p>
                <div className='lg:w-[1440px] mx-5 lg:mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10'>
                    <div data-aos="slide-right" data-aos-duration='2000' className='p-10 bg-yellow-300 rounded-2xl text-center my-3'>
                        <h1 className='text-7xl text-white font-bold'><CountUp end={38} /></h1>
                        <p className='text-xl text-white'>Clients</p>
                    </div>
                    <div data-aos="slide-right" data-aos-duration='2000' className='p-10 bg-yellow-300 rounded-2xl text-center my-3'>
                        <h1 className='text-7xl text-white font-bold'><CountUp end={17} /></h1>
                        <p className='text-xl text-white'>Projects</p>
                    </div>
                    <div data-aos="slide-left" data-aos-duration='2000' className='p-10 bg-yellow-300 rounded-2xl text-center my-3'>
                        <h1 className='text-7xl text-white font-bold'><CountUp end={3324} /></h1>
                        <p className='text-xl text-white'>Content Written</p>
                    </div>
                    <div data-aos="slide-left" data-aos-duration='2000' className='p-10 bg-yellow-300 rounded-2xl text-center my-3'>
                        <h1 className='text-7xl text-white font-bold'><CountUp end={15} /></h1>
                        <p className='text-xl text-white'>Worked With Brands</p>
                    </div>
                </div>

                

            </div>

        </div>
    );
};

export default Counter;