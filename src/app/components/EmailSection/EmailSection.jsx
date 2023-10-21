import React from 'react';
import GithubIcon from '../../../../public/image/github-icon.svg';
import LinkedinIcon from '../../../../public/image/linkedin-icon.svg';
import Link from 'next/link';
import Image from 'next/image';

const EmailSection = () => {
    return (
        <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4'>
            <div>
                <h5 className='text-xl font-bold text-white my-2'>Let's Connect</h5>
                <p className='text-[#ADB7BE] mb-4 max-w-md'>I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try best to get back you!</p>
                <div className='social flex flex-row gap-2'>
                    <Link href='https://github.com/Alavykhan' target='blank'><Image src={GithubIcon} alt='github icon'/></Link>
                    <Link href='https://www.linkedin.com/in/alavykhan/' target='blank'><Image src={LinkedinIcon} alt='linkedin icon'/></Link>
                </div>
            </div>
            <div>
                <form className='flex flex-col'>
                <label htmlFor='email' className='text-white block text-sm font-medium mb-2'>Your email</label>
                <input className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full mb-6 p-2.5' type="email" id='email' placeholder='jackson@gmail.com' required />

                <label htmlFor='subject' className='text-white block text-sm font-medium mb-2'>Subject</label>
                <input className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full mb-6 p-2.5' type="text" id='subject' placeholder='Project Name' required />

                <label htmlFor='subject' className='text-white block text-sm font-medium mb-2'>Message</label>
                <textarea className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full mb-6 p-2.5' name="message" id="message" cols="30" rows="5" placeholder='Your message'></textarea>

                <button className='bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full ' type='submit'>Send Message</button>
                </form>
            </div>
        </section>
    );
};

export default EmailSection;