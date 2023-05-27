import React from 'react';
import { FcCheckmark } from 'react-icons/fc';

const Content = () => {
    return (
        <div>
            <h1 className='text-4xl md:text-5xl font-bold '>Write content like <br /> never before!</h1>
            <p className='mt-3'>Let the roots of creativity burst/stay active more so with a course designed for all your writing needs!</p>
            <div className='flex items-center mt-5'>
                <p className='text-xl'><FcCheckmark></FcCheckmark></p>
                <p className='text-xl ml-5 '> Build expertise in over 3+ different writing styles</p>
            </div>
            <div className='flex items-center mt-3'>
                <p className='text-xl'><FcCheckmark></FcCheckmark></p>
                <p className='text-xl ml-5'> 100% Job/Freelance Guaranteed</p>
            </div>
            <div className='flex items-center mt-3'>
                <p className='text-xl'><FcCheckmark></FcCheckmark></p>
                <p className='text-xl ml-5'> Certified by TTT</p>
            </div>
            <div className='flex items-center mt-3'>
                <p className='text-xl'><FcCheckmark></FcCheckmark></p>
                <p className='text-xl ml-5'> 24+ Portfolio Worthy Projects</p>
            </div>
            <div className='flex items-center mt-3'>
                <p className='text-xl'><FcCheckmark></FcCheckmark></p>
                <p className='text-xl ml-5'> 3 Months Certified Course (EMI Option Available)</p>
            </div>
        </div>
    );
};

export default Content;