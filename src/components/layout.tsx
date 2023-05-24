import React from 'react';
import NavBar from './navBar';
import ActionBar from './actionBar';
export default function Layout({ children }: { children: React.ReactNode }) {
    return (<div className='w-full min-h-screen bg-white '>
        <NavBar />
        <div className='mt-10'>
            <ActionBar />
        </div>

        {children}

    </div>)
}