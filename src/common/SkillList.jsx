import React from 'react'

function SkillList({src, skill}) {
    return (
        <span>
            <img src={src} 
            alt="Checkmark icon" className='img-skill'/>
            <p>{skill}</p>
        </span>
    )
}

export default SkillList