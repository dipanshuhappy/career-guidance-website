import React from 'react';
import Layout from '~/components/layout';

function faq() {
    return (
        <Layout>
            <p className='text-3xl m-10 text-black font-bold text-left'>
                FAQ's
            </p>
            <div className='flex  m-10 w-full  text-left  '>
                Home / FAQ  /
                <p className='font-semibold text-black'> Blog Standard</p>
            </div>
            <div className='grid place-items-center m-10'>
                <details className="dropdown mb-3 w-full py-4 bg-slate-50">
                    <summary className="ml-4 font-blod text-black text-left w-full">Where Do you Deliver?</summary>
                    <ul className="m-5 w-full dropdown-content bg-transparent">
                        We currently deliver to most postal codes in the following provinces in Canada: Alberta, British Columbia, Manitoba, Nova Scotia, Ontario, Quebec and Saskatchewan. To find out for sure if we deliver to your area, simply enter your postal code at the top of the page before placing an order.

                    </ul>
                </details></div>
            <div className='grid place-items-center m-10'>
                <details className="dropdown mb-32 w-full py-4 bg-slate-50">
                    <summary className="ml-4 font-blod text-black text-left w-full">Where Do you Deliver?</summary>
                    <ul className="m-5 w-full dropdown-content bg-transparent">
                        We currently deliver to most postal codes in the following provinces in Canada: Alberta, British Columbia, Manitoba, Nova Scotia, Ontario, Quebec and Saskatchewan. To find out for sure if we deliver to your area, simply enter your postal code at the top of the page before placing an order.

                    </ul>
                </details></div>

        </Layout>
    );
}

export default faq;