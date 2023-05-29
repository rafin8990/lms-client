import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const service=useLoaderData()
    console.log(service);
    return (
        <div className='min-h-screen'>
            <h1 className='text-2xl font-bold text-center'>service details coming soon</h1>
        </div>
    );
};

export default ServiceDetails;