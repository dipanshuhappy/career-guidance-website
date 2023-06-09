import React from 'react';
import { AiFillSetting, AiOutlineEye } from 'react-icons/ai';
import { BiHeart } from 'react-icons/bi';
import Categories from '~/components/categories';
import Layout from '~/components/layout';
import PopularCollege from '~/components/popularCollege';

function product() {
    return (
        <Layout>
            <div className='my-10  w-full'>
                <p className='text-black text-2xl  text-left'>
                    List with left sidebar
                </p>
                <div className='flex  items-center  w-full text-left'>
                    Home / Category /
                    <p className='font-semibold text-black'>Sidebar</p>
                </div>
                <div>
                    <div className='flex gap-10'>
                        <div className='w-1/3 flex gap-4 flex-col'>
                            <ul className="menu w-full rounded-box border-2 border-gray-300">
                                <li className="  opacity-100 text-left text-xl  text-black font-bold ml-3 mt-4">Categories</li>
                                <div className="divider"></div>
                                <li><a>Item 1</a></li>
                                <li><a>Item 2</a></li>
                                <li><a>Item 3</a></li>
                            </ul>
                            <ul className="menu w-full rounded-box border-2 border-gray-300">
                                <li className="  opacity-100 text-left text-xl  text-black font-bold ml-3 mt-4">Location</li>
                                <div className="divider"></div>
                                <li><div className="form-control mr-auto">
                                    <label className="label cursor-pointer">
                                        <input type="checkbox" className="checkbox mx-2 checkbox-primary" />
                                        <span className="label-text">Delhi / NCR (21)</span>

                                    </label>
                                </div></li>
                                <li><div className="form-control mr-auto">
                                    <label className="label cursor-pointer">
                                        <input type="checkbox" className="checkbox mx-2 checkbox-primary" />
                                        <span className="label-text">Delhi / NCR (21)</span>

                                    </label>
                                </div></li>
                                <li><div className="form-control mr-auto">
                                    <label className="label cursor-pointer">
                                        <input type="checkbox" className="checkbox mx-2 checkbox-primary" />
                                        <span className="label-text">Delhi / NCR (21)</span>

                                    </label>
                                </div></li>
                            </ul>
                            <ul className="menu w-full rounded-box border-2 border-gray-300">
                                <li className="  opacity-100 text-left text-xl  text-black font-bold ml-3 mt-4">Specializations</li>
                                <div className="divider"></div>
                                <li><div className="form-control mr-auto">
                                    <label className="label cursor-pointer">
                                        <input type="checkbox" className="checkbox mx-2 checkbox-primary" />
                                        <span className="label-text">Sales and Marketing (171)</span>

                                    </label>
                                </div></li>
                                <li><div className="form-control mr-auto">
                                    <label className="label cursor-pointer">
                                        <input type="checkbox" className="checkbox mx-2 checkbox-primary" />
                                        <span className="label-text">Sales and Marketing (171</span>

                                    </label>
                                </div></li>
                                <li><div className="form-control mr-auto">
                                    <label className="label cursor-pointer">
                                        <input type="checkbox" className="checkbox mx-2 checkbox-primary" />
                                        <span className="label-text">Sales and Marketing (171</span>

                                    </label>
                                </div></li>
                            </ul>
                            <ul className="menu w-full rounded-box border-2 border-gray-300">
                                <li className="  opacity-100 text-left text-xl  text-black font-bold ml-3 mt-4">Program Types</li>
                                <div className="divider"></div>
                                <div className="form-control mr-auto">
                                    <li>
                                        <label className="label mr-auto text-left cursor-pointer">
                                            <input type="checkbox" className="checkbox mx-2 checkbox-primary" />
                                            <span className="label-text text-left">Private(68)</span>

                                        </label>

                                    </li>
                                    <li>
                                        <label className="label mr-auto text-left cursor-pointer">
                                            <input type="checkbox" className="checkbox mx-2 checkbox-primary" />
                                            <span className="text-left label-text">Government(96)</span>
                                        </label>
                                    </li>
                                </div>

                            </ul>
                            <ul className="menu w-full rounded-box border-2 border-gray-300">
                                <li className="  opacity-100 text-left text-xl  text-black font-bold ml-3 mt-4">Total Fees</li>
                                <div className="divider"></div>
                                <div className="form-control mr-auto">
                                    <li>
                                        <label className="label mr-auto text-left cursor-pointer">
                                            <input type="checkbox" className="checkbox mx-2 checkbox-primary" />
                                            <span className="label-text text-left">Under $200 (11)</span>

                                        </label>

                                    </li>
                                    <li>
                                        <label className="label mr-auto text-left cursor-pointer">
                                            <input type="checkbox" className="checkbox mx-2 checkbox-primary" />
                                            <span className="text-left label-text">$200-$300(71)</span>
                                        </label>
                                    </li>
                                </div>

                            </ul>
                            <PopularCollege />
                        </div>
                        <div className='w-full '>
                            <div className='w-full items-center flex py-3 px-2 bg-slate-300 '>
                                <div className='flex gap-3'>
                                    <div className="badge text-centers text-black bg-slate-50 gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-4 h-4 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                                        Fees
                                    </div>
                                </div>
                                <div className='mx-4 font-bold text-black'>Clear All</div>
                            </div>
                            <div className='w-full my-8 text-right ml-auto'>
                                1-48 of 323 Results
                            </div>

                            <div className='flex gap-4 flex-col'>
                                <div className='p-6 rounded-xl border-gray-300 border-2'>
                                    <div className='flex'>
                                        <img src="https://picsum.photos/240/200" width={"240px"} height={"200px"} />
                                        <div className='m-4'>
                                            <p className='text-left text-black font-bold text-2xl'>SRM University</p>
                                            <p className='text-left my-4'>⭐⭐⭐⭐</p>
                                            <p className='my-4 text-left text-xs min-w-['>Lorem ipsum dolor sit amet consectetur. Lorem sed suspendisse porttitor velit. Posuere hendrerit amet viverra enim.</p>
                                        </div>
                                        <div className='border-2 border-gray-300 h-fit p-2 rounded-xl' >
                                            <button className='btn font-bold my-6 bg-[#FAAD3D] w-full text-xs text-white rounded-md  mt-3'>VIEW ALL DETAIL</button>
                                            <span className='flex w-full   font-bold text-black justify-evenly'>
                                                <BiHeart width={"20px"} height={"20px"} />
                                                <AiFillSetting width={"20px"} height={"20px"} />
                                                <AiOutlineEye width={"20px"} height={"20px"} />
                                            </span>
                                        </div>

                                    </div>
                                    <div className='divider'></div>
                                    <div className='flex w-full gap-4 text-black font-bold'>
                                        <p>ADMISSIONS</p>
                                        <p>PLACEMENTS</p>
                                        <p>COURSES</p>
                                        <p>FACULTIES</p>
                                        <p className='w-full text-right'>DOWNLOAD BROHCHURE</p>
                                    </div>

                                </div>
                            </div>
                            <div className='flex gap-4 flex-col'>
                                <div className='p-6 rounded-xl border-gray-300 border-2'>
                                    <div className='flex'>
                                        <img src="https://picsum.photos/240/200" width={"240px"} height={"200px"} />
                                        <div className='m-4'>
                                            <p className='text-left text-black font-bold text-2xl'>SRM University</p>
                                            <p className='text-left my-4'>⭐⭐⭐⭐</p>
                                            <p className='my-4 text-left text-xs min-w-['>Lorem ipsum dolor sit amet consectetur. Lorem sed suspendisse porttitor velit. Posuere hendrerit amet viverra enim.</p>
                                        </div>
                                        <div className='border-2 border-gray-300 h-fit p-2 rounded-xl' >
                                            <button className='btn font-bold my-6 bg-[#FAAD3D] w-full text-xs text-white rounded-md  mt-3'>VIEW ALL DETAIL</button>
                                            <span className='flex w-full   font-bold text-black justify-evenly'>
                                                <BiHeart width={"20px"} height={"20px"} />
                                                <AiFillSetting width={"20px"} height={"20px"} />
                                                <AiOutlineEye width={"20px"} height={"20px"} />
                                            </span>
                                        </div>

                                    </div>
                                    <div className='divider'></div>
                                    <div className='flex w-full gap-4 text-black font-bold'>
                                        <p>ADMISSIONS</p>
                                        <p>PLACEMENTS</p>
                                        <p>COURSES</p>
                                        <p>FACULTIES</p>
                                        <p className='w-full text-right'>DOWNLOAD BROHCHURE</p>
                                    </div>

                                </div>
                            </div>
                            <div className='flex my-6 gap-4 flex-col'>
                                <div className='p-6 rounded-xl border-gray-300 border-2'>
                                    <div className='flex'>
                                        <img src="https://picsum.photos/240/200" width={"240px"} height={"200px"} />
                                        <div className='m-4'>
                                            <p className='text-left text-black font-bold text-2xl'>SRM University</p>
                                            <p className='text-left my-4'>⭐⭐⭐⭐</p>
                                            <p className='my-4 text-left text-xs min-w-['>Lorem ipsum dolor sit amet consectetur. Lorem sed suspendisse porttitor velit. Posuere hendrerit amet viverra enim.</p>
                                        </div>
                                        <div className='border-2 border-gray-300 h-fit p-2 rounded-xl' >
                                            <button className='btn font-bold my-6 bg-[#FAAD3D] w-full text-xs text-white rounded-md  mt-3'>VIEW ALL DETAIL</button>
                                            <span className='flex w-full   font-bold text-black justify-evenly'>
                                                <BiHeart width={"20px"} height={"20px"} />
                                                <AiFillSetting width={"20px"} height={"20px"} />
                                                <AiOutlineEye width={"20px"} height={"20px"} />
                                            </span>
                                        </div>

                                    </div>
                                    <div className='divider'></div>
                                    <div className='flex w-full gap-4 text-black font-bold'>
                                        <p>ADMISSIONS</p>
                                        <p>PLACEMENTS</p>
                                        <p>COURSES</p>
                                        <p>FACULTIES</p>
                                        <p className='w-full text-right'>DOWNLOAD BROHCHURE</p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex my-6 gap-4 flex-col'>
                                <div className='p-6 rounded-xl border-gray-300 border-2'>
                                    <div className='flex'>
                                        <img src="https://picsum.photos/240/200" width={"240px"} height={"200px"} />
                                        <div className='m-4'>
                                            <p className='text-left text-black font-bold text-2xl'>SRM University</p>
                                            <p className='text-left my-4'>⭐⭐⭐⭐</p>
                                            <p className='my-4 text-left text-xs min-w-['>Lorem ipsum dolor sit amet consectetur. Lorem sed suspendisse porttitor velit. Posuere hendrerit amet viverra enim.</p>
                                        </div>
                                        <div className='border-2 border-gray-300 h-fit p-2 rounded-xl' >
                                            <button className='btn font-bold my-6 bg-[#FAAD3D] w-full text-xs text-white rounded-md  mt-3'>VIEW ALL DETAIL</button>
                                            <span className='flex w-full   font-bold text-black justify-evenly'>
                                                <BiHeart width={"20px"} height={"20px"} />
                                                <AiFillSetting width={"20px"} height={"20px"} />
                                                <AiOutlineEye width={"20px"} height={"20px"} />
                                            </span>
                                        </div>

                                    </div>
                                    <div className='divider'></div>
                                    <div className='flex w-full gap-4 text-black font-bold'>
                                        <p>ADMISSIONS</p>
                                        <p>PLACEMENTS</p>
                                        <p>COURSES</p>
                                        <p>FACULTIES</p>
                                        <p className='w-full text-right'>DOWNLOAD BROHCHURE</p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex my-6 gap-4 flex-col'>
                                <div className='p-6 rounded-xl border-gray-300 border-2'>
                                    <div className='flex'>
                                        <img src="https://picsum.photos/240/200" width={"240px"} height={"200px"} />
                                        <div className='m-4'>
                                            <p className='text-left text-black font-bold text-2xl'>SRM University</p>
                                            <p className='text-left my-4'>⭐⭐⭐⭐</p>
                                            <p className='my-4 text-left text-xs min-w-['>Lorem ipsum dolor sit amet consectetur. Lorem sed suspendisse porttitor velit. Posuere hendrerit amet viverra enim.</p>
                                        </div>
                                        <div className='border-2 border-gray-300 h-fit p-2 rounded-xl' >
                                            <button className='btn font-bold my-6 bg-[#FAAD3D] w-full text-xs text-white rounded-md  mt-3'>VIEW ALL DETAIL</button>
                                            <span className='flex w-full   font-bold text-black justify-evenly'>
                                                <BiHeart width={"20px"} height={"20px"} />
                                                <AiFillSetting width={"20px"} height={"20px"} />
                                                <AiOutlineEye width={"20px"} height={"20px"} />
                                            </span>
                                        </div>

                                    </div>
                                    <div className='divider'></div>
                                    <div className='flex w-full gap-4 text-black font-bold'>
                                        <p>ADMISSIONS</p>
                                        <p>PLACEMENTS</p>
                                        <p>COURSES</p>
                                        <p>FACULTIES</p>
                                        <p className='w-full text-right'>DOWNLOAD BROHCHURE</p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex my-6 gap-4 flex-col'>
                                <div className='p-6 rounded-xl border-gray-300 border-2'>
                                    <div className='flex'>
                                        <img src="https://picsum.photos/240/200" width={"240px"} height={"200px"} />
                                        <div className='m-4'>
                                            <p className='text-left text-black font-bold text-2xl'>SRM University</p>
                                            <p className='text-left my-4'>⭐⭐⭐⭐</p>
                                            <p className='my-4 text-left text-xs min-w-['>Lorem ipsum dolor sit amet consectetur. Lorem sed suspendisse porttitor velit. Posuere hendrerit amet viverra enim.</p>
                                        </div>
                                        <div className='border-2 border-gray-300 h-fit p-2 rounded-xl' >
                                            <button className='btn font-bold my-6 bg-[#FAAD3D] w-full text-xs text-white rounded-md  mt-3'>VIEW ALL DETAIL</button>
                                            <span className='flex w-full   font-bold text-black justify-evenly'>
                                                <BiHeart width={"20px"} height={"20px"} />
                                                <AiFillSetting width={"20px"} height={"20px"} />
                                                <AiOutlineEye width={"20px"} height={"20px"} />
                                            </span>
                                        </div>

                                    </div>
                                    <div className='divider'></div>
                                    <div className='flex w-full gap-4 text-black font-bold'>
                                        <p>ADMISSIONS</p>
                                        <p>PLACEMENTS</p>
                                        <p>COURSES</p>
                                        <p>FACULTIES</p>
                                        <p className='w-full text-right'>DOWNLOAD BROHCHURE</p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex my-6 gap-4 flex-col'>
                                <div className='p-6 rounded-xl border-gray-300 border-2'>
                                    <div className='flex'>
                                        <img src="https://picsum.photos/240/200" width={"240px"} height={"200px"} />
                                        <div className='m-4'>
                                            <p className='text-left text-black font-bold text-2xl'>SRM University</p>
                                            <p className='text-left my-4'>⭐⭐⭐⭐</p>
                                            <p className='my-4 text-left text-xs min-w-['>Lorem ipsum dolor sit amet consectetur. Lorem sed suspendisse porttitor velit. Posuere hendrerit amet viverra enim.</p>
                                        </div>
                                        <div className='border-2 border-gray-300 h-fit p-2 rounded-xl' >
                                            <button className='btn font-bold my-6 bg-[#FAAD3D] w-full text-xs text-white rounded-md  mt-3'>VIEW ALL DETAIL</button>
                                            <span className='flex w-full   font-bold text-black justify-evenly'>
                                                <BiHeart width={"20px"} height={"20px"} />
                                                <AiFillSetting width={"20px"} height={"20px"} />
                                                <AiOutlineEye width={"20px"} height={"20px"} />
                                            </span>
                                        </div>

                                    </div>
                                    <div className='divider'></div>
                                    <div className='flex w-full gap-4 text-black font-bold'>
                                        <p>ADMISSIONS</p>
                                        <p>PLACEMENTS</p>
                                        <p>COURSES</p>
                                        <p>FACULTIES</p>
                                        <p className='w-full text-right'>DOWNLOAD BROHCHURE</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

            </div>
        </Layout>
    );
}

export default product;
