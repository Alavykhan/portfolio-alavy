import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';


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
        tag: ['All', 'Web']
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
    return (
        <div>
            <h2>Projects</h2>
            <div>
                {
                    projectData.map(project=><ProjectCard
                    key={project.id}
                    project={project}></ProjectCard>)
                }
            </div>
        </div>
    );
};

export default ProjectSection;