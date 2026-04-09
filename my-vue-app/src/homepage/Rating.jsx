import React from 'react';

const Rating = () => {
    return (
        <div className='ratting py-10  '>
            <div className='grid sm:grid-cols-1 md:grid-cols-3 items-center gap-5 place-items-center text-center text-white px-10'>
                <div>
                    <h1 className='text-4xl font-bold'>50k+</h1>
                    <p>Active Users</p>
                </div>
                <div>
                    <h1 className='text-4xl font-bold'>200+</h1>
                    <p>Premium Tools</p>
                </div>
                <div>
                    <h1 className='text-4xl font-bold'>4.9</h1>
                    <p>Rating</p>
                </div>
            </div>
        </div>
    );
};

export default Rating;