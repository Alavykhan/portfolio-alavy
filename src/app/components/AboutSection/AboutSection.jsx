"use client"
import Image from 'next/image';
import React, { useState, useTransition } from 'react';
import TabButton from '../TabButton/TabButton';

const AboutSection = () => {
    const [tab, setTab] = useState('skills');
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) =>{
        startTransition (()=>{
            setTab(id);
        })
    }

    return (
        <section className='text-white'>
           <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 x:gap-16 sm:py-16 xl:px-16'>
                <Image src='/about-image.png' width={500} height={500} alt='about me image'/>
                <div>
                    <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
                    <p className='text-base md:text-lg'>I'm a passionate and creative Frontend Developer with a knack for turning design concepts into seamless, interactive web experiences. My journey in the world of coding began with a fascination for blending aesthetics and functionality. Over a year, I've honed my skills in crafting elegant and user-centric websites that look great and provide exceptional user experiences.</p>
                    <div className='flex flex-row mt-8'>
                        <TabButton selectTab={()=>handleTabChange('skills')} active= {tab === "skills"}>
                            {" "}
                            Skills{" "}
                        </TabButton>
                        <TabButton selectTab={()=>handleTabChange('education')} active= {tab === "education"}>
                            {" "}
                            Eduction{" "}
                        </TabButton>
                        <TabButton selectTab={()=>handleTabChange('certifications')} active= {tab === "certifications"}>
                            {" "}
                            Certifications{" "}
                        </TabButton>
                    </div>
                </div>
           </div>
        </section>
    );
};

export default AboutSection;