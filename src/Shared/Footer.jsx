import React from 'react';

const Footer = () => {
    return (
        <div className='bg-[#262D36] lg:p-16'>
            <div  className= 'lg:w-[1440px] mx-auto pt-10 grid grid-cols-2 lg:grid-cols-3 gap-10'>
                <div className='ml-5'>
                    <h1 className="link link-hover text-white">Branding</h1>
                    <h1 className="link link-hover text-white">Design</h1>
                    <h1 className="link link-hover text-white">Marketing</h1>
                    <h1 className="link link-hover text-white">Advertisement</h1>
                </div>
                <div className='ml-5'>
                    <h1 className="link link-hover text-white">About us</h1>
                    <h1 className="link link-hover text-white">Contact</h1>
                    <h1 className="link link-hover text-white">Jobs</h1>
                    <h1 className="link link-hover text-white">Press kit</h1>
                </div>
                <div className='ml-5'>
                    <h1 className="link link-hover text-white">About us</h1>
                    <h1 className="link link-hover text-white">Contact</h1>
                    <h1 className="link link-hover text-white">Jobs</h1>
                    <h1 className="link link-hover text-white">Press kit</h1>
                </div>
            </div>
            <div className="divider"></div>
            <div> 
                <h1 className='text-[#FA383E]  my-5 text-center'>Copyright @ swachh Akshar || All rights reserve</h1>
            </div>
        </div>
    );
};

export default Footer;