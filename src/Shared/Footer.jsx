import React from 'react';
import { FaFacebook, FaInstagramSquare, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-[#262D36] lg:p-16'>
            <div className='lg:w-[1440px] mx-auto pt-10 grid grid-cols-2 lg:grid-cols-4 gap-10'>
                <div className='ml-5'>
                    <Link to='/'><h1 className="link link-hover text-white">Home</h1></Link>
                    <Link to='/dashboard'> <h1 className="link link-hover text-white">DashBoard</h1></Link>
                    <Link to='/about'> <h1 className="link link-hover text-white">About</h1></Link>
                </div>
                <div className='ml-5'>
                    <Link to='/courses'> <h1 className="link link-hover text-white">Courses</h1></Link>
                    <Link to='/collaboration'> <h1 className="link link-hover text-white">Collaboration</h1></Link>
                    <Link to='/contact'> <h1 className="link link-hover text-white">Contact</h1></Link>
                </div>
                {/* <div className='ml-5'>
                    <h1 className=" text-white">sayhi@swachhakshar.com</h1>
                    <h1 className=" text-white">+91 9179 673 321</h1>
                    <h1 className=" text-white">145, Zone 2, GRP Colony, MP Nagar, <br />
                        Bhopal, MP - 462001</h1>
                </div> */}
                <div className='ml-5 mr-5 flex'>
                    <Link to='https://www.facebook.com'><h1 className="text-2xl ml-3 text-white"><FaFacebook></FaFacebook></h1></Link>
                    <Link to='https://www.instagram.com'><h1 className="text-2xl ml-3 text-white"><FaInstagramSquare></FaInstagramSquare></h1></Link>
                    <Link to='https://www.twitter.com'><h1 className="text-2xl ml-3 text-white"><FaTwitter></FaTwitter></h1></Link>
                    <Link to='https://www.linkedin.com'><h1 className="text-2xl ml-3 text-white"><FaLinkedin></FaLinkedin></h1></Link>
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