import React from 'react'
import checkMarkIconLight from '../../assets/checkmark-light.svg'
import checkMarkIconDark from '../../assets/checkmark-dark.svg'
import SkillList from '../../common/SkillList'
import '../Skills/Skills.scss';
import { useTheme } from '../../common/ThemeContext';


function Skills() {
    const { theme } = useTheme();
    const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;
    return <section className="container" id="skills">
        <h1 className='sectionTitle'>Skills</h1>
        <div className="content-skill">
            <div className="skillList">
                <div><SkillList src={checkMarkIcon} skill="HTML" /></div>
                <div><SkillList src={checkMarkIcon} skill="CSS" /></div>

                <div><SkillList src={checkMarkIcon} skill="Java Script" /></div>
                <div> <SkillList src={checkMarkIcon} skill="TypeScript" /></div>
                <div><SkillList src={checkMarkIcon} skill="Node" /></div>
            </div>
            <hr />
            <div className="skillList">
                <div><SkillList src={checkMarkIcon} skill="React" /></div>
                <div><SkillList src={checkMarkIcon} skill="Angular" /></div>
                <div><SkillList src={checkMarkIcon} skill="Vue" /></div>
                <div><SkillList src={checkMarkIcon} skill="Tailwin Css" /></div>

            </div>
            <hr />
            <div className="skillList">
                <div><SkillList src={checkMarkIcon} skill="Redux" /></div>
                <div><SkillList src={checkMarkIcon} skill="Laravel" /></div>
                <div><SkillList src={checkMarkIcon} skill="Git" /></div>
                <div><SkillList src={checkMarkIcon} skill="Boostrap" /></div>
            </div>
        </div>

    </section>
}

export default Skills