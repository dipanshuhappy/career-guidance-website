import React from 'react';
import Layout from '~/components/layout';

function signup() {
    return (
        <Layout>
            <p className='text-3xl m-10 text-black font-bold text-left'>
                Create an Account
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
                <div className="form-control w-full max-w-xs p-4">
                    <label className="label">
                        <span className="label-text text-black font-bold">Confirm Password</span>

                    </label>
                    <input type="text" placeholder="" className="bg-slate-300    text-black placeholder:text-black  input input-bordered w-full max-w-xs" />

                </div>

                <button className="border-none text-white bg-[#FEB53E] btn btn-wide">Create An Account</button>
                <div className='w-full text-center my-4'>
                    Or
                </div>

                <p className='font-bold text-xl text-black'>Continue With Facebook</p>
            </div>


        </Layout>
    );
}

export default signup;