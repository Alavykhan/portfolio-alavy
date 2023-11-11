import React from 'react';

const ProjectTag = ({name, onClick, isSelected}) => {
    const buttonStyles = isSelected? "font-semibold text-black bg-gray-400" : "text-[#ADB7BE] border-slate-600 hover:border-white"
    return (
        <div>
            <button onClick={()=> onClick(name)} className={`${buttonStyles} rounded-lg border-2  px-6 py-3 text-xl cursor-pointer`}>{name}</button>
        </div>
    );
};

export default ProjectTag;