"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const pdf = 'http://localhost:3000/resume.pdf'

const HeroSection = () => {
    const downloadFile = (url)=>{
        const fileName = url.split('/').pop();
        const aTag = document.createElement('a');
        aTag.href = url;
        aTag.setAttribute('download', fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
    }
    return (
        <section className='lg:py-16'>
           <div className='grid grid-cols-1 sm:grid-cols-12'>
                <div className='col-span-7 place-self-center text-center sm:text-left'>
                <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-7xl font-extrabold'><span className='text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400'>Hello, I'm {" "}</span>
                <br />
                <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'Alavy Khan',
                            1000, // wait 1s before replacing "Mice" with "Hamsters"
                            'Frontend Developer',
                            1000,
                            'Software Developer',
                            1000,
                        ]}
                        wrapper="span"
                        speed={5}
                        repeat={Infinity}
                        />
                    </h1>
                    <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>I'm a passionate and creative Frontend Developer with a knack for turning design concepts into seamless, interactive web experiences.</p>
                    <div>
                    <Link href='https://www.upwork.com/freelancers/~01ce5a15fac94d482a' target='blank'><button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 text-black bg-gradient-to-br from-white to-gray-300 text-black font-semibold hover:bg-slate-200'>Hire Me</button></Link>
                        
                        <button onClick={()=>{downloadFile(pdf)}} className='px-1 py-1 w-full sm:w-fit rounded-full  bg-gradient-to-br from-white to-gray-300 hover:bg-slate-800 text-white mt-3'><span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Download CV</span></button>
                    </div>
                </div>
           <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
                <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
                <Image
                    src='/image/alavy-khan-dev.png'
                    alt='hero image'
                    className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                    width={300}
                    height={300}
                    />
                </div>

           </div>
           </div>
        </section>
    );
};

export default HeroSection;