import React from 'react';
import Layout from '~/components/layout';

function login() {
    return (
        <Layout>
            <p className='text-3xl m-10 text-black font-bold text-left'>
                Login your Account
            </p>
            <div className='grid place-items-center m-40'>
                <div className="form-control w-full max-w-xs p-4">
                    <label className="label">
                        <span className="label-text text-black font-bold">User name or email address</span>

                    </label>
                    <input type="text" placeholder="" className="bg-slate-300    text-black placeholder:text-black  input input-bordered w-full max-w-xs" />

                </div>
                <div className="form-control w-full max-w-xs p-4">
                    <label className="label">
                        <span className="label-text text-black font-bold">Password</span>

                    </label>
                    <input type="text" placeholder="" className="bg-slate-300    text-black placeholder:text-black  input input-bordered w-full max-w-xs" />

                </div>
                <div className='flex gap-10 items-center justify-between p-4'>
                    <div className="form-control">
                        <label className="label cursor-pointer">

                            <input type="checkbox" className="checkbox" />
                            <span className="label-text">Remember me</span>
                        </label>
                    </div>
                    <a className="link">Forgot Password</a>

                </div>
                <button className="border-none text-white bg-[#FEB53E] btn btn-wide">Login your account</button>
                <div className='w-full text-center my-4'>
                    Or
                </div>

                <p className='font-bold text-xl text-black'>Continue With Facebook</p>
            </div>


        </Layout>
    );
}

export default login;