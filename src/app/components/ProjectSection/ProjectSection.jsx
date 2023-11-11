"use client"
import React, { useState } from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import ProjectTag from '../ProjectTag/ProjectTag';


const projectData = [
    {
        id: 1,
        title: 'Full-Stack Roadmap',
        description:'Project 1 description',
        image:'/projectImg/1.png',
        tag: ['All', 'Web']
    },
    {
        id: 2,
        title: 'Full-Stack Roadmap',
        description:'Project 1 description',
        image:'/projectImg/2.png',
        tag: ['All', 'Web']
    },
    {
        id: 3,
        title: 'Full-Stack Roadmap',
        description:'Project 1 description',
        image:'/projectImg/3.png',
        tag: ['All', 'Web']
    },
    {
        id: 4,
        title: 'Full-Stack Roadmap',
        description:'Project 1 description',
        image:'/projectImg/4.png',
        tag: ['All', 'Web']
    },
    {
        id: 5,
        title: 'Full-Stack Roadmap',
        description:'Project 1 description',
        image:'/projectImg/5.png',
        tag: ['All', 'Mobile']
    },
    {
        id: 6,
        title: 'Full-Stack Roadmap',
        description:'Project 1 description',
        image:'/projectImg/6.png',
        tag: ['All', 'Web']
    },
]

const ProjectSection = () => {
    const [tag, setTag]= useState("All");
    const handleTagChange = (newTag) =>{
        setTag(newTag);
    }

    const filerProjects = projectData.filter((project)=> project.tag.includes(tag))

    return (
        <div className='sm:py-16' id='projects'>
            <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8'>Projects</h2>
            <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
                
               <ProjectTag onClick={handleTagChange} name= "All" isSelected={tag === "All"}></ProjectTag>
               <ProjectTag onClick={handleTagChange} name= "Web" isSelected={tag === "Web"}></ProjectTag>
               <ProjectTag onClick={handleTagChange} name= "Mobile" isSelected={tag === "Mobile"}></ProjectTag>
            </div>
            <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
                {
                    filerProjects.map(project=><ProjectCard
                    key={project.id}
                    project={project}></ProjectCard>)
                }
            </div>
        </div>
    );
}; 

export default ProjectSection;