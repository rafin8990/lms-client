import React from 'react';
import user from '../../../assets/header/slider3.png'
import Fade from 'react-reveal/Fade'


const Learner = () => {
    return (
        <div className='bg-[#262D36] lg:p-20'>
            <Fade down>
                <h1 className='text-xl pt-10 md:text-4xl font-bold  text-[#FA383E] text-center'>Hear what our learners have to say</h1>
            </Fade>
            <Fade down>
                <div className='mt-10 lg:my-20 grid grid-cols-1 md:grid-cols-2  gap-5 lg:w-[1440px] mx-2 lg:mx-auto'>
                    <div className='bg-gray-100 rounded-2xl p-10'>
                        <div>
                            <p className='text-xl text-gray-500'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima laborum, reiciendis sapiente dolorum minus nam maxime molestiae ab ullam velit omnis qui commodi! Perferendis culpa esse accusantium facere consequuntur temporibus.</p>
                        </div>
                        <div className='flex justify-between items-center'>
                            <div className='flex items-center'>
                                <div>
                                    <img className=' w-16 h-16 rounded-full border border-[#FA383E]' src={user} alt="" />
                                </div>
                                <div className='ml-5'>
                                    <h1 className='text-xl'> Cody Fisher</h1>
                                    <p className='text-gray-500'>May 20, 2021</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bg-gray-100 rounded-2xl p-10'>
                        <div>
                            <p className='text-xl text-gray-500'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima laborum, reiciendis sapiente dolorum minus nam maxime molestiae ab ullam velit omnis qui commodi! Perferendis culpa esse accusantium facere consequuntur temporibus.</p>
                        </div>
                        <div className='flex justify-between items-center'>
                            <div className='flex items-center'>
                                <div>
                                    <img className=' w-16 h-16 rounded-full border border-[#FA383E]' src={user} alt="" />
                                </div>
                                <div className='ml-5'>
                                    <h1 className='text-xl'> Cody Fisher</h1>
                                    <p className='text-gray-500'>May 20, 2021</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bg-gray-100 rounded-2xl p-10'>
                        <div>
                            <p className='text-xl text-gray-500'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima laborum, reiciendis sapiente dolorum minus nam maxime molestiae ab ullam velit omnis qui commodi! Perferendis culpa esse accusantium facere consequuntur temporibus.</p>
                        </div>
                        <div className='flex justify-between items-center'>
                            <div className='flex items-center'>
                                <div>
                                    <img className=' w-16 h-16 rounded-full border border-[#FA383E]' src={user} alt="" />
                                </div>
                                <div className='ml-5'>
                                    <h1 className='text-xl'> Cody Fisher</h1>
                                    <p className='text-gray-500'>May 20, 2021</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bg-gray-100 rounded-2xl p-10'>
                        <div>
                            <p className='text-xl text-gray-500'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima laborum, reiciendis sapiente dolorum minus nam maxime molestiae ab ullam velit omnis qui commodi! Perferendis culpa esse accusantium facere consequuntur temporibus.</p>
                        </div>
                        <div className='flex justify-between items-center'>
                            <div className='flex items-center'>
                                <div>
                                    <img className=' w-16 h-16 rounded-full border border-[#FA383E]' src={user} alt="" />
                                </div>
                                <div className='ml-5'>
                                    <h1 className='text-xl'> Cody Fisher</h1>
                                    <p className='text-gray-500'>May 20, 2021</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default Learner;