import React from 'react';
import NavLink from '../NavLink/NavLink';
const MenuOverlay = ({links}) => {
    return (
        <ul className='flex flex-col py-4 items-center md:hidden text-lg font-semibold'>
            {
                links.map((link, index)=>(
                    <li key={index}>
                        <NavLink href={link.path} title={link.title}></NavLink>
                    </li>
                    
                ))
            }
        </ul>
    );
};

export default MenuOverlay;