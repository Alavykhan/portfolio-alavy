"use client"
import React from 'react';
import dynamic from "next/dynamic";


const achievementList = [
    {
        metric: 'Projects', 
        value: '100',
        postfix: '+'
    },
    {
        prefix: '~',
        metric: 'User', 
        value: '100,000',
    },
    {
        metric: 'Awards', 
        value: '10',
    },
    {
        metric: 'Years', 
        value: '5',
    },
]


const AchievementsSection = () => {
    return (
        <div className='py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
            <div className='border-[#33353F] border rounded-md py-8 px-16 flex flex-row items-center justify-between'>
            {
                achievementList.map((achievement, index)=>{
                    return(
                        <div key={index} className='flex flex-col items-center justify-center mx-4'>
                             <h2 className="text-white text-4xl font-bold flex flex-row">
                              {achievement.value}
                            </h2>
                            <p className='text-[#ADB7BE] text-base'>{achievement.metric}</p>
                        </div>
                    )
                })
            }
            </div>
        </div>
    );
};

export default AchievementsSection;