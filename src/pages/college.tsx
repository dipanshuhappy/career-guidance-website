import React from 'react';
import Layout from '~/components/layout';

function college() {
    return (
        <Layout>
            <div className='flex  items-center  w-full text-left'>
                Home / Category /
                <p className='font-semibold text-black'>Sidebar</p>
            </div>
            <div className="carousel rounded-box w-full">
                <div className="carousel-item w-1/2">
                    <img src="https://picsum.photos/400" className="w-full" />
                </div>
                <div className="carousel-item w-1/2">
                    <img src="https://picsum.photos/400" className="w-full" />
                </div>
                <div className="carousel-item w-1/2">
                    <img src="https://picsum.photos/" className="w-full" />
                </div>
                <div className="carousel-item w-1/2">
                    <img src="https://picsum.photos/" className="w-full" />
                </div>
                <div className="carousel-item w-1/2">
                    <img src="https://picsum.photos/" className="w-full" />
                </div>
            </div>



        </Layout>
    );
}

export default college;