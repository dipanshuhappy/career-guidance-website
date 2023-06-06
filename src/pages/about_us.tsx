import React from 'react';
import { AiOutlineEye, AiOutlineGold } from 'react-icons/ai';
import { BiTargetLock } from 'react-icons/bi'
import Layout from '~/components/layout';

function about_us() {
    return (
        <Layout>
            <div className='my-10  w-full mx-auto'>
                <p className='text-black text-2xl  text-center'>
                    About Us
                </p>
                <div className='flex justify-center items-center mx-auto w-full text-center'>
                    Home / About Us/
                    <p className='font-semibold text-black'> About US</p>
                </div>

            </div>
            <div className='my-10 w-1/2 text-left'>
                <p className='capitalize'>Our Story</p>
                <p className='text-3xl font-bold text-black texxt-left'>Our STory</p>
                <p className='mt-4'>
                    Lorem ipsum dolor sit amet consectetur. Odio volutpat mauris id quisque id feugiat eget dui in. Placerat vivamus imperdiet vestibulum habitant purus blandit.
                </p>
            </div>
            <div className='w-full gap-4 items-center justify-center flex bg-gray-200
'>
                <div className='max-w-[370px] flex flex-col w-1/3  bg-white p-3'>
                    <AiOutlineGold className='mx-auto text-black w-7 h-7' />
                    <p className='text-2xl text-center font-bold text-black'>Our Value</p>
                    <p className=' text-sm text-center'>Lorem ipsum dolor sit amet consectetur. Odio volutpat mauris id quisque id feugiat eget dui in. Placerat vivamus imperdiet vestibulum habitant purus blandit.</p>
                </div>
                <div className=' max-w-[370px] flex flex-col w-1/3 text-white bg-yellow-400  p-3'>
                    <BiTargetLock className='mx-auto text-black w-7 h-7' />
                    <p className='text-2xl text-center font-bold '>Our Value</p>
                    <p className=' text-sm text-center'>Lorem ipsum dolor sit amet consectetur. Odio volutpat mauris id quisque id feugiat eget dui in. Placerat vivamus imperdiet vestibulum habitant purus blandit.</p>
                </div>
                <div className='max-w-[370px] flex flex-col w-1/3 bg-white  p-3'>
                    <AiOutlineEye className='mx-auto text-black w-7 h-7' />
                    <p className='text-2xl text-center font-bold  text-black'>Our Vision</p>
                    <p className=' text-sm text-center'>Lorem ipsum dolor sit amet consectetur. Odio volutpat mauris id quisque id feugiat eget dui in. Placerat vivamus imperdiet vestibulum habitant purus blandit.</p>
                </div>
            </div>
            <div className='w-full my-8'>
                <p className='text-center text-2xl font-bold text-black'> Meet Our Team</p>
                <p className='text-center my-4'>Add our new arrivals to your weekly lineup</p>
                <div className='grid  gap-4 grid-rows-2 grid-cols-4'>
                    <div className="flex w-full gap-4 flex-col  items-center avatar">
                        <div className="w-24 rounded-full">
                            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                        <p className='w-full text-center font-bold tracking-wide'>Catherine Hammond</p>
                        <p className='text-sm'>Craft Designer</p>
                    </div>
                    <div className=" flex w-full gap-4 flex-col  items-center avatar">
                        <div className="w-24 rounded-full">
                            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                        <p className='w-full text-center font-bold tracking-wide'>Catherine Hammond</p>
                        <p className='text-sm'>Craft Designer</p>
                    </div>
                    <div className=" flex w-full gap-4 flex-col  items-center avatar">
                        <div className="w-24 rounded-full">
                            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                        <p className='w-full text-center font-bold tracking-wide'>Catherine Hammond</p>
                        <p className='text-sm'>Craft Designer</p>
                    </div>
                    <div className=" flex w-full gap-4 flex-col  items-center avatar">
                        <div className="w-24 rounded-full">
                            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                        <p className='w-full text-center font-bold tracking-wide'>Catherine Hammond</p>
                        <p className='text-sm'>Craft Designer</p>
                    </div>
                    <div className=" flex w-full gap-4 flex-col  items-center avatar">
                        <div className="w-24 rounded-full">
                            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                        <p className='w-full text-center font-bold tracking-wide'>Catherine Hammond</p>
                        <p className='text-sm'>Craft Designer</p>
                    </div>
                    <div className=" flex w-full gap-4 flex-col  items-center avatar">
                        <div className="w-24 rounded-full">
                            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                        <p className='w-full text-center font-bold tracking-wide'>Catherine Hammond</p>
                        <p className='text-sm'>Craft Designer</p>
                    </div>
                    <div className=" flex w-full gap-4 flex-col  items-center avatar">
                        <div className="w-24 rounded-full">
                            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                        <p className='w-full text-center font-bold tracking-wide'>Catherine Hammond</p>
                        <p className='text-sm'>Craft Designer</p>
                    </div>
                    <div className=" flex w-full gap-4 flex-col  items-center avatar">
                        <div className="w-24 rounded-full">
                            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                        <p className='w-full text-center font-bold tracking-wide'>Catherine Hammond</p>
                        <p className='text-sm'>Craft Designer</p>
                    </div>


                </div>
                <div className='w-full my-20 p-40 bg-gray-100'>
                    <p className='text-center text-black font-bold text-3xl  my-4'> Testimonials </p>
                    <div className='flex mx-auto  gap-4'>
                        <div className=' bg-white  p-10 rounded-lg flex-1 flex w-full gap-4 flex-col'>
                            <div className='flex'>
                                <div className="avatar">
                                    <div className="w-24 rounded-full">
                                        <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </div>
                                <div className='w-full'>
                                    <p className='text-left font-bold text-black tracking-wide'>Catherine Hammond</p>
                                    <p className='text-left text-sm'>⭐ ⭐ ⭐ ⭐ ⭐</p>
                                </div>
                            </div>
                            <p className='text-left'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                        <div className=' bg-white p-10 rounded-lg flex-1 flex w-full gap-4 flex-col'>
                            <div className='flex '>
                                <div className="avatar">
                                    <div className="w-24 rounded-full">
                                        <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </div>
                                <div className='w-full'>
                                    <p className='text-left font-bold text-black tracking-wide'>Catherine Hammond</p>
                                    <p className='text-left text-sm'>⭐ ⭐ ⭐ ⭐ ⭐</p>
                                </div>
                            </div>
                            <p className='text-left'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                        <div className=' bg-white p-10 rounded-lg flex-1 flex w-full gap-4 flex-col'>
                            <div className='flex'>
                                <div className="avatar">
                                    <div className="w-24 rounded-full">
                                        <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </div>
                                <div className='w-full'>
                                    <p className='text-left font-bold text-black tracking-wide'>Catherine Hammond</p>
                                    <p className='text-left text-sm'>⭐ ⭐ ⭐ ⭐ ⭐</p>
                                </div>
                            </div>
                            <p className='text-left'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                        <div className=' bg-white p-10 rounded-lg flex-1 flex w-full gap-4 flex-col'>
                            <div className='flex'>
                                <div className="avatar">
                                    <div className="w-24 rounded-full">
                                        <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </div>
                                <div className='w-full'>
                                    <p className='text-left font-bold text-black tracking-wide'>Catherine Hammond</p>
                                    <p className='text-left text-sm'>⭐ ⭐ ⭐ ⭐ ⭐</p>
                                </div>
                            </div>
                            <p className='text-left text-sm'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                    </div>

                </div>


            </div>
        </Layout >
    );
}

export default about_us;