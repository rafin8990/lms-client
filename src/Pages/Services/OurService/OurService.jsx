import React, { useEffect, useState } from 'react';
import img from '../../../assets/header/pretty-young-student-with-big-glasses-near-some-books-smiling-white-background.jpg'
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade'

const OurService = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/allservices')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='lg:p-32 bg-[#FFFAE8] '>
            <h1 className='bg-[#FFFAE8] text-2xl md:text-4xl font-bold text-center lg:pt-10'>Our Services</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:w-[1440px] mt-20 pb-5 mx-auto'>
                {
                    services.map(service => <Fade down>
                        <div key={service._id} className="card md:w-96 mx-4 shadow-xl image-full">
                            <figure><img src={img} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title text-white">{service.name}</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error praesentium nulla, odio, earum blanditiis.</p>
                                <Link to={`/services/${service._id}`}><button className='btn mt-5'>View details</button></Link>
                            </div>
                        </div>
                    </Fade>)
                }
            </div>
        </div>
    );
};

export default OurService;