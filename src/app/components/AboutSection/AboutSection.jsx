"use client"
import Image from 'next/image';
import React, { useState, useTransition } from 'react';
import TabButton from '../TabButton/TabButton';


const TabData=[
    {
        title: 'Skills',
        id:'skills',
        content: (
            <ul className='list-disc pl-2'>
                <li>Next.js</li>
                <li>React</li>
                <li>JavaScript</li>
                <li>Express</li>
                <li>Node.js</li>
                <li>Tailwind</li>
            </ul>
        )
    }, 
    {
        title: 'Education',
        id:'education',
        content: (
            <ul className='list-disc pl-2'>
                <li>Frontend Development Course by Programming Hero</li>
                <li>Bachelor of Business Administration </li>
            </ul>
        )
    }, 
    {
        title: 'Experience',
        id:'experience',
        content: (
            <ul className='list-disc pl-2'>
                <li>Doing freelance job from from January 2022 onwards</li>
                <li>Worked as a communication manager in an advertising agency, from 2017-2021</li>
            </ul>
        )
    }, 
]


const AboutSection = () => {
    const [tab, setTab] = useState('skills');
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) =>{
        startTransition (()=>{
            setTab(id);
        })
    }

    return (
        <section className='text-white' id='about'>
           <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 x:gap-16 sm:py-16 '>
                <Image src='/about-image.png' width={500} height={500} alt='about me image'/>
                <div className=' mt-4 md:mt-0 text-left flex flex-col h-full'>
                    <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
                    <p className='text-base md:text-lg text-justify'>I'm a passionate and creative Frontend Developer with a knack for turning design concepts into seamless, interactive web experiences. My journey in the world of coding began with a fascination for blending aesthetics and functionality. Over a year, I've honed my skills in crafting elegant and user-centric websites that look great and provide exceptional user experiences.</p>
                    <div className='flex flex-row mt-8'>
                        <TabButton selectTab={()=>handleTabChange('skills')} active= {tab === "skills"}>
                            {" "}
                            Skills{" "}
                        </TabButton>
                        <TabButton selectTab={()=>handleTabChange('education')} active= {tab === "education"}>
                            {" "}
                            Eduction{" "}
                        </TabButton>
                        <TabButton selectTab={()=>handleTabChange('experience')} active= {tab === "experience"}>
                            {" "}
                            Experience{" "}
                        </TabButton>
                    </div>
                    <div className='mt-8'>
                        {
                            TabData.find((t)=>t.id === tab).content
                        }
                    </div>
                </div>
           </div>
        </section>
    );
};

export default AboutSection;