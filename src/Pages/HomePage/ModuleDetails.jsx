import React from 'react';

const ModuleDetails = ({ module, setLesson }) => {
    const { name, lessons } = module;
    return (
        <div className='mt-10 lg:mt-5'>
            <div className="collapse collapse-plus border border-base-300  w-96 rounded-box text-base-100">
                <input type="checkbox" className="peer" />
                <div className="collapse-title  text-xl font-medium">
                    <h1 className='font-semibold text-base-100'> {name}</h1>
                </div>
                <div className="collapse-content">
                    {
                        lessons.map(data => <ul>
                            <li onClick={() => setLesson(data)} className='btn btn-sm btn-outline mt-5 w-full text-white'>{data.name}</li>
                        </ul>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ModuleDetails;