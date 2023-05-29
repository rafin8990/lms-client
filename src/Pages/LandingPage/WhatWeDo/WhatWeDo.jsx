import React, { useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade'
import { Link } from 'react-router-dom';
import img from '../../../assets/header/young-woman-teacher-wearing-glasses-sitting-school-desk-front-blackboard-classroom-globe-checking-class-register-holding-pointer-looking-displeased-raising-arm-displeasure.jpg'


const WhatWeDo = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='bg-[#FFFAE8] lg:p-32'>
            <Fade left>
                <h1 className='text-xl md:text-4xl text-[#FA383E] mt-5 text-center font-bold font-sans'>What We Do</h1>
            </Fade>
            <Fade right>
                <p className='text-center mt-5 mx-5 lg:mx-0'>Swachh Akshar provides service to improve your public image. Be it brand, political figure, public figure or business figure. <br />
                    We give our best to make your good will to be eminent to the general public.</p>
            </Fade>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:w-[1440px] mt-20 mx-auto '>
                {
                    services.map(service => <div key={service._id} className="card w-96 shadow-xl px-3 image-full">
                        <figure><img src={img} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-white">{service.name}</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error praesentium nulla, odio, earum blanditiis.</p>
                            <Link to={`/services/${service._id}`}><button className='btn mt-5'>View details</button></Link>
                        </div>
                    </div>)
                }
            </div>
            <div className='flex justify-center py-10'>
                <Link to='/services'><button className='btn btn-outline'>Show More</button></Link>
            </div>
        </div>
    );
};

export default WhatWeDo;


