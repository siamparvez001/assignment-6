import React from 'react';
import checkImg from "../assets/Check.png"
const Simple = () => {
    return (
        <div className='py-20 '>
            <div className='flex flex-col justify-center items-center space-y-5'>
                <h1 className='text-4xl font-bold'>Simple, Transparent Pricing</h1>
                <p className='opacity-60 text-center'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between items-center gap-5 items-stretch'>
                    <div className='border p-10 rounded-4xl w-full bg-gray-100 flex flex-col justify-between'>
                        <h1 className='text-2xl font-bold'>Starter</h1>
                        <p className='opacity-70'>Perfect for getting started</p>
                        <p className='py-5'><span className='text-3xl font-bold'>$0/</span> month</p>
                        <div className='flex gap-2 pb-1'>
                            <img src={checkImg} alt="" />
                            <p>Access to 10 free tools</p>
                        </div>
                        <div className='flex gap-2 pb-1'>
                            <img src={checkImg} alt="" />
                            <p>Basic templates</p>
                        </div>
                        <div className='flex gap-2 pb-1'>
                            <img src={checkImg} alt="" />
                            <p>Community support</p>
                        </div>
                        <div className='flex gap-2 pb-1'>
                            <img src={checkImg} alt="" />
                            <p>1 project per month</p>
                        </div>
                        <button className='card-butn btn w-full mt-15 rounded-4xl'>Get Started Free</button>
                    </div>
                    <div className='start border p-10 rounded-4xl w-full bg-gray-100 flex flex-col justify-between relative'>
                        <p className='most absolute -top-3 left-1/2 -translate-x-1/2 text-white px-4 py-1 rounded-full text-sm'>
                            Most Popular
                        </p>
                        <h1 className='text-2xl font-bold'>Pro</h1>
                        <p className='opacity-70'>Best for professionals</p>
                        <p className='py-5'><span className='text-3xl font-bold'>$29/</span> month</p>
                        <div className='flex gap-2 pb-1'>
                            <img src={checkImg} alt="" />
                            <p>Access to all premium tools</p>
                        </div>
                        <div className='flex gap-2 pb-1'>
                            <img src={checkImg} alt="" />
                            <p>Unlimited templates</p>
                        </div>
                        <div className='flex gap-2 pb-1'>
                            <img src={checkImg} alt="" />
                            <p>Priority support</p>
                        </div>
                        <div className='flex gap-2 pb-1'>
                            <img src={checkImg} alt="" />
                            <p>Unlimited projects</p>
                        </div>
                        <div className='flex gap-2 pb-1'>
                            <img src={checkImg} alt="" />
                            <p>Cloud sync</p>
                        </div>
                        <div className='flex gap-2 pb-1'>
                            <img src={checkImg} alt="" />
                            <p>Advanced analytics</p>
                        </div>
                        <button className='btn w-full mt-15 bg-white rounded-4xl'><span className='pro'>Start Pro Trial</span></button>
                    </div>

                    <div className='border p-10 rounded-4xl w-full bg-gray-100 flex flex-col justify-between'>
                        <h1 className='text-2xl font-bold'>Enterprise</h1>
                        <p className='opacity-70'>For teams and businesses</p>
                        <p className='py-5'><span className='text-3xl font-bold'>$99/</span> month</p>
                        <div className='flex gap-2 pb-1'>
                            <img src={checkImg} alt="" />
                            <p>Everything in Pro</p>
                        </div>
                        <div className='flex gap-2 pb-1'>
                            <img src={checkImg} alt="" />
                            <p>Team collaboration</p>
                        </div>
                        <div className='flex gap-2 pb-1'>
                            <img src={checkImg} alt="" />
                            <p>Custom integrations</p>
                        </div>
                        <div className='flex gap-2 pb-1'>
                            <img src={checkImg} alt="" />
                            <p>Dedicated support</p>
                        </div>
                        <div className='flex gap-2 pb-1'>
                            <img src={checkImg} alt="" />
                            <p>SLA guarantee</p>
                        </div>
                        <div className='flex gap-2 pb-1'>
                            <img src={checkImg} alt="" />
                            <p>Custom branding</p>
                        </div>
                        <button className='card-butn btn w-full mt-15 rounded-4xl'>Contact Sales</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Simple;