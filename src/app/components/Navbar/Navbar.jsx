"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import NavLink from '../NavLink/NavLink';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import MenuOverlay from '../MenuOverlay/MenuOverlay';
const navLink=[
    {
        title:"About",
        path:"#about",
    },
    {
        title:"Projects",
        path:"#projects",
    },
    {
        title:"Contact",
        path:"#Contact",
    },
]

const Navbar = () => {
    const [navbarOpen, setNavbarOpen]= useState(false);
    return (
        <nav className='fixed border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100'>
            <div className='flex lg:py-4 flex-wrap items-center justify-between mx-auto px-8 py-4 md:px-16 lg:px-36 lg:py-4'>
                <Link href='/' className='text-4xl text-white font-semibold'><img className='w-16 h-16' src="/image/alavy-2.png" alt="" /></Link>
                <div className=' mobile-menu block md:hidden'>
                    {
                        !navbarOpen?(
                            <button onClick={()=>setNavbarOpen(true)} className='flex items-center px-3 py-2 border rounded border-slate-200 hover:border-white'><Bars3Icon className="h-6 w-6 text-slate-200 hover:text-white" /></button>
                        ):(
                            <button onClick={()=>setNavbarOpen(false)} className='flex items-center px-3 py-2 border rounded border-slate-200 hover:border-white'><XMarkIcon className="h-6 w-6 text-slate-200 hover:text-white" /></button>
                        )
                    }
                </div>
                <div className='menu hidden md:block md:w-auto' id='navbar'>
                    <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0 font-semibold'>
                      {
                         navLink.map((link, index)=>(
                            <li key={index}>
                                <NavLink href={link.path} title={link.title}></NavLink>
                            </li>
                         ))
                      }
                    </ul>
                </div>
            </div>
            {
                navbarOpen? <MenuOverlay links={navLink} />: null
            }
        </nav>
    );
};

export default Navbar;