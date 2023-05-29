import React from 'react';
import picture from '../../../assets/header/service.avif'

const KeyElements = () => {
    return (
        <div className='pt-10'>
            <div className='md:flex justify-around items-center'>
                <div className='md:w-1/2 md:text-xl flex justify-center mx-5'>
                    <ul>
                        <li> Words should be short, crisp and to the point</li>
                        <li>  Giving a clear-cut idea on what services are offered </li>
                        <li> Use of key words to relate with the customer</li>
                        <li>Attach samples to give a gist of what and how the content is made (optional) </li>
                    </ul>
                </div>
                <div className='md:w-1/2'>
                    <img src={picture} alt="" />
                </div>
            </div>
        </div>
    );
};

export default KeyElements;