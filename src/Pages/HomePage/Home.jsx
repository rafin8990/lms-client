import React, { useEffect, useState } from 'react';
import ModuleDetails from './ModuleDetails';
import VideoPlayer from './VideoPlayer';
import './Home.css'


const Home = () => {
    const [data, setData] = useState([]);
    const [lesson, setLesson] = useState(null)
    console.log(lesson)

    useEffect(() => {
        fetch('modules.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (
        <div className=' min-h-screen flex justify-center items-center'>
            <div className='lg:flex'>
                <div className='bg-black h-[300px] lg:h-[500px] lg:w-[950px]  lg:mr-5 lg:mt-5 border border-base-300 '>
                    <VideoPlayer
                        lesson={lesson}
                    ></VideoPlayer>
                </div>
                <div className='scrollbar overflow-y-scroll h-[550px] p-5 mt-20 md:mt-0'>
                    {
                        data.map(module => <ModuleDetails
                            key={module?.id}
                            module={module}
                            setLesson={setLesson}
                        ></ModuleDetails>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;