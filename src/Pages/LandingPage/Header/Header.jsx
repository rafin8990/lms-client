import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './Header.css';
import { Autoplay, Pagination, Navigation } from "swiper";
import slider1 from '../../../assets/header/object.png'
import slider2 from '../../../assets/header/slider3.png'
import slider3 from '../../../assets/header/slider-thumb.png'
import bg from '../../../assets/header/Moon.d5aa06ae.svg'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="bg-[url('/src/assets/header/Moon.d5aa06ae')]">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className=" bg flex justify-around items-center">
                        <div className=' w-1/2'>
                        <div className='flex justify-center items-center'>
                                <div>
                                    <h3 className='text-lg md:text-2xl text-yellow-500 my-3'>Swachh Akshar</h3>
                                    <h1 className='text-2xl md:text-4xl lg:text-7xl font-bold font-sans leading-loose'>
                                        DISCOVER
                                    </h1>
                                    <h1 className='text-2xl md:text-4xl lg:text-7xl font-bold font-sans leading-loose lg:mt-5'>THE WRITTER </h1>
                                    <h1 className='text-2xl md:text-4xl lg:text-7xl font-bold font-sans leading-loose lg:mt-5'>WITHIN YOU</h1>
                                    <Link to='/services'><button className='btn btn-warning my-5 px-10'>Learn More</button></Link>
                                </div>
                            </div>
                        </div>
                        <div className='w-1/2'>
                            <img src={slider1} alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg flex justify-around items-center ">
                        <div className=' w-1/2'>
                            <div className='flex justify-center items-center'>
                                <div>
                                    <h3 className='text-lg md:text-2xl text-yellow-500 my-3'>Swachh Akshar</h3>
                                    <h1 className='text-2xl md:text-4xl lg:text-7xl font-bold font-sans leading-loose'>
                                        DISCOVER
                                    </h1>
                                    <h1 className='text-2xl md:text-4xl lg:text-7xl font-bold font-sans leading-loose lg:mt-5'>THE WRITTER </h1>
                                    <h1 className='text-2xl md:text-4xl lg:text-7xl font-bold font-sans leading-loose lg:mt-5'>WITHIN YOU</h1>
                                    <Link to='/services'><button className='btn btn-warning my-5 px-10'>Learn More</button></Link>
                                </div>
                            </div>
                        </div>
                        <div className='w-1/2'>
                            <img src={slider2} alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='bg  flex justify-around items-center'>
                        <div className='w-1/2'>
                            <div className='flex justify-center items-center'>
                                <div>
                                    <h3 className='text-lg md:text-2xl text-yellow-500 my-3'>Swachh Akshar</h3>
                                    <h1 className='text-2xl md:text-4xl lg:text-7xl font-bold font-sans leading-loose'>
                                        DISCOVER
                                    </h1>
                                    <h1 className='text-2xl md:text-4xl lg:text-7xl font-bold font-sans leading-loose lg:mt-5'>THE WRITTER </h1>
                                    <h1 className='text-2xl md:text-4xl lg:text-7xl font-bold font-sans leading-loose lg:mt-5'>WITHIN YOU</h1>
                                    <Link to='/services'><button className='btn btn-warning my-5 px-10'>Learn More</button></Link>
                                </div>
                            </div>
                        </div>
                        <div className='w-1/2 '>
                            <img src={slider3} alt="" />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Header;