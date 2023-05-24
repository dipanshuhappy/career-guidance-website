import React from 'react';



function ThreeDotSvg() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="#ffffff"
            data-name="Layer 1"
            viewBox="0 0 16 16"
        >
            <path
                d="M8 6.5A1.5 1.5 0 116.5 8 1.5 1.5 0 018 6.5zM.5 8A1.5 1.5 0 102 6.5 1.5 1.5 0 00.5 8zm12 0A1.5 1.5 0 1014 6.5 1.5 1.5 0 0012.5 8z"
                className="cls-1"
            ></path>
        </svg>
    );
}


function ActionBar() {
    return (
        <div className='h-14 w-full bg-slate-200'>
            <div className='w-2/3 h-full bg-white flex items-center mx-auto justify-around px-4'>
                <button className="btn md:m-1/3 text-white gap-12 border h-full bg-yellow-500 border-none">
                    Categories
                    <ThreeDotSvg />
                </button>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1 font-extrabold text-black">
                        <li><a>Home</a></li>
                        <li><a>Pages</a></li>
                        <li><a>Blog</a></li>
                    </ul>
                </div>
                <div className="form-control">
                    <div className="input-group">
                        <input type="text" placeholder="Search…" className="input input-bordered bg-white" />
                        <button className="btn btn-square bg-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default ActionBar;