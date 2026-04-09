import React from 'react';

const Transfrom = () => {
    return (
        <div className='ratting text-white py-20 px-10'>
            <div className='flex flex-col justify-center items-center space-y-5'>
                <h1 className='text-4xl text-center'>Ready to Transform Your Workflow?</h1>
                <p className='text-center'>Join thousands of professionals who are already using Digitools to work smarter.Start your free trial today.</p>
                <div className='flex gap-5'>
                    <button className=' bg-white btn rounded-2xl'><span className='product'>Explore Products</span></button>
                    <button className='btn rounded-2xl text-white bg-transparent'>View Pricing</button>
                </div>
                <p className='text-center'>14-day free trial • No credit card required • Cancel anytime</p>
            </div>
        </div>
    );
};

export default Transfrom;