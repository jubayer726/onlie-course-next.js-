import Link from 'next/link';
import React from 'react';

const DashboardSidebar = () => {
    return (
        <div className='w-60 shadow-lg p-2 bg-white text-black min-h-screen'>
            <Link href='/' className='text-center block mb-5'>
                <img src='/logo.png' alt='logo' className='w-16 mx-auto mb-2'/>
                {/* <h1 className='p-5 font-black text-xl text-primary'>Online <span className='text-secondary'>Coaching</span></h1> */}
            </Link>
            <div className='flex flex-col gap-2 text-lg p-5'>
                <Link href='/dashboard/profile' className='d-block mb-3'>Profile </Link>
                <Link href='/dashboard/my-bookings' className='d-block mb-3'>My Bookings </Link>
            </div>

        </div>
    );
};

export default DashboardSidebar;