import React from 'react';

const VideoPlayer = ({ lesson, setLesson }) => {
    return (
        <div className='lg:mt-5'>
            {lesson ?
                <div >
                    <video src={lesson.videoLink} controls autoplay width="1000" height="450" />
                </div>
                :
                <div className='h-96 flex justify-center items-center'>
                    <p className='text-2xl lg:text-4xl text-white'>Please click to start button to start the lesson </p>
                </div>
            }
            {
                lesson ?
                    <div className='flex justify-end'>
                        <button className='btn btn-success btn-sm px-10 '>Previous</button>
                        <button className='btn btn-success btn-sm px-10 btn-outline lg:ml-5'>Next</button>
                    </div>
                    :
                    <div className='flex justify-end'>
                        <button className='btn btn-success btn-sm px-10 lg:mt-28'> Start Course</button>
                    </div>
            }
            {
                lesson && <div style={{ color: 'white', marginLeft: '20px' }}>
                    <p className='text-2xl lg:text-4xl mt-10'>Now Playing Module {lesson.moduleNo} - {lesson.lessonNumber}</p>
                </div>
            }
        </div>
    );
};

export default VideoPlayer;