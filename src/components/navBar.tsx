import React from "react";
function ProfileSvg() {
    return (<svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
    >
        <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
            <g fill="#000" transform="translate(-140 -2159)">
                <g transform="translate(56 160)">
                    <path d="M100.563 2017H87.438c-.706 0-1.228-.697-.961-1.338 1.236-2.964 4.14-4.662 7.523-4.662 3.384 0 6.288 1.698 7.524 4.662.267.641-.255 1.338-.961 1.338m-10.646-12c0-2.206 1.832-4 4.083-4 2.252 0 4.083 1.794 4.083 4s-1.831 4-4.083 4c-2.251 0-4.083-1.794-4.083-4m14.039 11.636c-.742-3.359-3.064-5.838-6.119-6.963 1.619-1.277 2.563-3.342 2.216-5.603-.402-2.623-2.63-4.722-5.318-5.028-3.712-.423-6.86 2.407-6.86 5.958 0 1.89.894 3.574 2.289 4.673-3.057 1.125-5.377 3.604-6.12 6.963-.27 1.221.735 2.364 2.01 2.364h15.892c1.276 0 2.28-1.143 2.01-2.364"></path>
                </g>
            </g>
        </g>
    </svg>)
}
function HeartSvg() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            version="1"
            viewBox="0 0 64 64"
            xmlSpace="preserve"
        >
            <g fill="#000">
                <path d="M48 6a15.946 15.946 0 00-11.313 4.687l-3.979 3.961a.999.999 0 01-1.414 0s-3.971-3.97-3.979-3.961A15.954 15.954 0 0016 6C7.163 6 0 13.163 0 22c0 3.338 1.024 6.436 2.773 9 0 0 .734 1.164 1.602 2.031l24.797 24.797C29.953 58.609 30.977 59 32 59s2.047-.391 2.828-1.172l24.797-24.797c.867-.867 1.602-2.031 1.602-2.031A15.916 15.916 0 0064 22c0-8.837-7.163-16-16-16zm10.714 24.977s-.612.75-1.823 1.961L33.414 56.414c-.391.391-.902.586-1.414.586s-1.023-.195-1.414-.586L7.109 32.937c-1.211-1.211-1.823-1.961-1.823-1.961C3.245 28.545 2 25.424 2 22 2 14.268 8.268 8 16 8c3.866 0 7.366 1.566 9.899 4.101l.009-.009 4.678 4.677a2 2 0 002.828 0l4.678-4.677.009.009A13.948 13.948 0 0148 8c7.732 0 14 6.268 14 14 0 3.424-1.245 6.545-3.286 8.977z"></path>
                <path d="M48 12a1 1 0 100 2 8 8 0 018 8 1 1 0 102 0c0-5.522-4.478-10-10-10z"></path>
            </g>
        </svg>
    );
}
export default function NavBar() {
    return (
        <div className="w-2/3  mx-auto ">
            <div className="navbar ">
                <div className="flex-1">
                    <div>
                        <a className="btn btn-ghost tracking-[.2em] normal-case text-xl font-extrabold">Link
                            <span>
                                <div className="badge badge-xs bg-yellow-300 relative"></div>
                            </span>
                        </a>

                    </div>
                </div>
                <div className="flex gap-3">
                    <div className="flex gap-2">
                        <div className="p-2 rounded-full  bg-[whitesmoke]">
                            <ProfileSvg />

                        </div>
                        <button className="gap-2 btn-ghost">
                            My Account
                        </button>
                    </div>
                    <div className="flex gap-2">
                        <div className="p-2 rounded-full  bg-[whitesmoke]">

                            <HeartSvg />

                        </div>
                        <button className="gap-2 btn-ghost">

                            Wishlist
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}