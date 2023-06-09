import React from 'react';
import { AiOutlineComment, AiOutlineHeart } from 'react-icons/ai';
import Categories from '~/components/categories';
import Layout from '~/components/layout';
import NewsCard from '~/components/newsCard';
import PopularCollege from '~/components/popularCollege';
const SubscribeCard = () => {
    return (
        <div className='w-full my-8 rounded-lg py-7 px-5 bg-slate-200'>
            <p className='text-xl my-2 text-black font-semibold text-center'>Subscribe</p>
            <p className=' text-center my-6 text-sm'>Get the latest news and updates from us straight into your inbox.</p>
          
            <input type="text" placeholder="Email Address" className="my-6 input focus:bg-transparent focus:text-black placeholder:text-black  input-ghost placeholder:text-center text-black t w-full max-w-xs" />
            <button className="btn btn-block bg-black text-white">Subscribe</button>
        </div>
    )
}
function blog() {
    return (
        <Layout>
            <div className='my-10  w-full mx-auto'>
                <p className='text-black text-2xl  text-center'>
                    Our Blog
                </p>
                <div className='flex justify-center items-center mx-auto w-full text-center'>
                    Home / Blog /
                    <p className='font-semibold text-black'> Blog Standard</p>
                </div>

            </div>
            <div
                className='w-full flex'
            >
                <div className='w-full'>
                    <div className='w-full  p-8 mb-12'>
                        <div className='relative w-full'>
                            <img src="https://picsum.photos/200" className='w-full h-full  object-fill' />
                            <kbd className="absolute right-0 top-0  kbd kbd-md z-30 bg-white text-black">Read</kbd>
                        </div>
                        <div className='flex gap-2  items-center'>
                            <p className=' text-yellow-300 text-lg font-semibold my-4'>By AlitStudio |</p>
                            <p>27 Sep 2018  |</p>
                            <div className='flex items-center justify-center'>
                                <AiOutlineComment width={"8px"} height={"8px"} />
                                <p>
                                    280 |
                                </p>
                            </div>
                            <div className='flex text-center'>
                                <AiOutlineHeart className='m-1' width={"8px"} height={"8px"} />
                                89
                            </div >
                        </div>
                        <div className='text-left my-4'>
                            <p className='text-2xl my-3 text-black font-bold'>2018 Best Colleges for universal experience. </p>
                            <p className="text-left">
                                Lorem ipsum dolor sit amet consectetur. Odio volutpat mauris id quisque id feugiat eget dui in. Placerat vivamus imperdiet vestibulum habitant purus blandit.Lorem ipsum dolor sit amet consectetur. Odio volutpat mauris id quisque id feugiat eget dui in. Placerat vivamus imperdiet vestibulum habitant purus blandit.
                            </p>

                        </div>

                    </div>
                    <div className='w-full  p-8 mb-12'>
                        <div className='relative w-full'>
                            <img src="https://picsum.photos/200" className='w-full h-full  object-fill' />
                            <kbd className="absolute right-0 top-0  kbd kbd-md z-30 bg-white text-black">Read</kbd>
                        </div>
                        <div className='flex gap-2  items-center'>
                            <p className=' text-yellow-300 text-lg font-semibold my-4'>By AlitStudio |</p>
                            <p>27 Sep 2018  |</p>
                            <div className='flex items-center justify-center'>
                                <AiOutlineComment width={"8px"} height={"8px"} />
                                <p>
                                    280 |
                                </p>
                            </div>
                            <div className='flex text-center'>
                                <AiOutlineHeart className='m-1' width={"8px"} height={"8px"} />
                                89
                            </div >
                        </div>
                        <div className='text-left my-4'>
                            <p className='text-2xl my-3 text-black font-bold'>2018 Best Colleges for universal experience. </p>
                            <p className="text-left">
                                Lorem ipsum dolor sit amet consectetur. Odio volutpat mauris id quisque id feugiat eget dui in. Placerat vivamus imperdiet vestibulum habitant purus blandit.Lorem ipsum dolor sit amet consectetur. Odio volutpat mauris id quisque id feugiat eget dui in. Placerat vivamus imperdiet vestibulum habitant purus blandit.
                            </p>

                        </div>

                    </div>
                    <div className='w-full  p-8 mb-12'>
                        <div className='relative w-full'>
                            <img src="https://picsum.photos/200" className='w-full h-full  object-fill' />
                            <kbd className="absolute right-0 top-0  kbd kbd-md z-30 bg-white text-black">Read</kbd>
                        </div>
                        <div className='flex gap-2  items-center'>
                            <p className=' text-yellow-300 text-lg font-semibold my-4'>By AlitStudio |</p>
                            <p>27 Sep 2018  |</p>
                            <div className='flex items-center justify-center'>
                                <AiOutlineComment width={"8px"} height={"8px"} />
                                <p>
                                    280 |
                                </p>
                            </div>
                            <div className='flex text-center'>
                                <AiOutlineHeart className='m-1' width={"8px"} height={"8px"} />
                                89
                            </div >
                        </div>
                        <div className='text-left my-4'>
                            <p className='text-2xl my-3 text-black font-bold'>2018 Best Colleges for universal experience. </p>
                            <p className="text-left">
                                Lorem ipsum dolor sit amet consectetur. Odio volutpat mauris id quisque id feugiat eget dui in. Placerat vivamus imperdiet vestibulum habitant purus blandit.Lorem ipsum dolor sit amet consectetur. Odio volutpat mauris id quisque id feugiat eget dui in. Placerat vivamus imperdiet vestibulum habitant purus blandit.
                            </p>

                        </div>

                    </div>
                </div>
                <div className='w-1/3'>
                    <Categories categories={['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5', 'Category 6']} />
                    <NewsCard date='06 Jun 2018' title='Here i got jail to a victim less crime' />
                    <PopularCollege />
                    <SubscribeCard />

                </div>
            </div >
            <div className="join flex gap-3 p-8">
                <button className="bg-gray-200 join-item btn btn-active active:bg-black ">1</button>
                <button className="bg-gray-200 join-item btn">2</button>
                <button className="bg-gray-200 join-item btn">3</button>
                <button className=" bg-gray-200 join-item btn">4</button>
                <button className="bg-gray-200 join-item btn">Next </button>
            </div>
        </Layout >
    );
}

export default blog;