import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ModuleDetails from './ModuleDetails';
import VideoPlayer from './VideoPlayer';
import './Home.css'


const Home = () => {
    const [data, setData] = useState([]);
    const [lesson, setLesson] = useState(null)
    console.log(lesson)

    useEffect(() => {
        fetchVideoPlaylist();
      }, []);
    
      const fetchVideoPlaylist = async () => {
        try {
          const response = await axios.get('http://localhost:5000/modules');
          setData(response.data);
        } catch (error) {
          console.error('Error fetching video playlist:', error);
        }
      };

    const handleStartCourse = () => {
        // Start the course by unlocking the first video
        unlockVideo(0);
      };

      const unlockVideo = async (index) => {
        try {
          await axios.put(`http://localhost:5000/modules/lessons/${index}`);
          fetchVideoPlaylist();
        } catch (error) {
          console.error('Error unlocking video:', error);
        }
      };

      const handleNextVideo = () => {
        const currentIndex = data.lessons.findIndex((video) => video.unlocked);
        const nextIndex = currentIndex + 1;
        if (nextIndex < videos.length) {
          setCurrentVideo(videos[nextIndex]);
        }
      };
    
      const handlePreviousVideo = () => {
        const currentIndex = data.lessons.findIndex((video) => video.unlocked);
        const previousIndex = currentIndex - 1;
        if (previousIndex >= 0) {
          setCurrentVideo(videos[previousIndex]);
        }
      };

    return (
        <div className=' min-h-screen flex justify-center items-center App'>
            <div className='lg:flex'>
                <div className='bg-black h-[300px] lg:h-[500px] lg:w-[950px]  lg:mr-5 lg:mt-5 border border-base-300 '>
                    <VideoPlayer
                        lesson={lesson}
                        handleStartCourse={handleStartCourse}
                        handleNextVideo={handleNextVideo}
                        handlePreviousVideo={handlePreviousVideo}
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