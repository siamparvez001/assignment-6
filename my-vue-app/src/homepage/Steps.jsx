import React from 'react';
import userImg from "../assets/user.png"
import packageImg from "../assets/package.png"
import rocketImg from "../assets/rocket.png"
const Steps = () => {
    return (
        <div className=' bg-gray-100 pt-40 pb-50'>
            <div className='max-w-10/12 mx-auto flex flex-col justify-center items-center'>
                <h1 className='text-4xl font-bold p-5'>Get Started in 3 Steps</h1>
                <p className='opacity-60 text-center'>Start using premium digital tools in minutes, not hours.</p>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
                    <div className=' rounded-4xl p-10 bg-white'>
                        <p className='number'>01</p>
                        <div className='flex flex-col justify-center items-center space-y-3'>
                            <img src={userImg} alt="" />
                            <h1 className='text-2xl'>Create Account</h1>
                            <p className='text-center opacity-60'>Sign up for free in seconds. No credit card required to get started.</p>
                        </div>
                    </div>
                    <div className=' rounded-4xl p-10 bg-white'>
                        <p className='number'>02</p>
                        <div className='flex flex-col justify-center items-center space-y-3'>
                            <img src={packageImg} alt="" />
                            <h1 className='text-2xl'>Choose Products</h1>
                            <p className='text-center opacity-60'>Browse our catalog and select the tools that fit your needs.</p>
                        </div>

                    </div>
                    <div className=' rounded-4xl bg-white p-10'>
                        <p className='number'>03</p>
                        <div className='flex flex-col justify-center items-center space-y-3'>
                            <img src={rocketImg} alt="" />
                            <h1 className='text-2xl'>CStart Creating</h1>
                            <p className='text-center opacity-60'>Download and start using your premium tools immediately.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Steps;