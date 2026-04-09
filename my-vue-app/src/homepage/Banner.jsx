import React from 'react';
import bannerImg from "../assets/banner.png"
import circleImg from "../assets/Group 5.png"
import playBtnImg from "../assets/Play.png"
const Banner = () => {
    return (
        <div className='mt-10 grid sm:grid-cols-1 md:grid-cols-2 w-full mx-auto items-center'>
            <div className=''>
                <div className='space-y-5 px-5 flex flex-col justify-center mx-auto  md:w-1/2'>
                    <div className='flex  gap-2 bg-purple-200 rounded-2xl w-fit py-[10px] px-[15px]'>
                        <img  className='w-[20px] h-[20px]' src={circleImg} alt="" />
                        <p>New: AI-Powered Tools Available</p>
                    </div>
                    <h1 className='text-5xl font-bold'>Supercharge Your Digital Workflow</h1>
                    <p className='opacity-70 '>Access premium AI tools, design assets, templates, and productivity
                        software—all in one place. Start creating faster today.
                        Explore Products
                    </p>
                    <div className='flex gap-5 '>
                        <button className='bg-gradient-to-r from-[#4F39F6] to-[#9514FA] btn rounded-2xl text-white px-[20px] py-[10px] text-[17px]'>Explore Products</button>
                        <div className='flex gap-2 btn rounded-2xl gradient-border'>
                            <img src={playBtnImg} alt="" />
                            <button className='digitools text-[17px]'>Watch Demo</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-1/2 flex justify-center items-center mx-auto mt-10'>
                <img src={bannerImg} className='max-w-full h-auto' alt="" />
            </div>
        </div>
    );
};

export default Banner;