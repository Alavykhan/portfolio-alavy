import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <footer className='footer pb-0 mb-0 border border-y-[#33353F] border-l-transparent border-r-transparent'>
            <div className='container py-4 flex justify-between items-center'>
            <Link href='/' className='text-4xl text-white font-semibold'><img className='w-16 h-16' src="/image/alavy-2.png" alt="" /></Link>
            <p className='text-slate-600 font-light text-sm'>All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;