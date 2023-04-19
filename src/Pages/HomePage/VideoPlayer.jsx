import React from 'react';

const VideoPlayer = ({ lesson }) => {
    return (
        <div className='lg:mt-5'>
            {lesson && <div >
                <video src={lesson.videoLink} controls autoplay width="1000" height="450" />

            </div>}
            {
                lesson && <div style={{ color: 'white', marginLeft: '20px' }}>
                    <p className='text-2xl lg:text-4xl'>Now Playing Module {lesson.moduleNo} - {lesson.lessonNumber}</p>
                </div>
            }
        </div>
    );
};

export default VideoPlayer;