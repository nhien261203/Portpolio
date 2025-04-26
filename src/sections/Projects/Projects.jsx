import ProjectCard from '../../common/ProjectCard';
import '../Projects/Projects.scss';
import React from 'react';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';


function Projects() {
    return (
        <section id="projects" className='container'>
            <h1 className='sectionTitle'>Projects</h1>
            <div className="projectsContainer">
                <div>
                    <ProjectCard
                        src={viberr}
                        link="https://github.com/nhien261203/home-Tantg"
                        h3="Vibber"
                        p="Landing"
                    />
                </div>


                <div>
                    <ProjectCard
                        src={freshBurger}
                        link="https://github.com/nhien261203/home-Tantg"
                        h3="Fresh Burger"
                        p="Hamburger Restaurant"
                    />
                </div>
                <div>
                    <ProjectCard
                        src={hipsster}
                        link="https://github.com/nhien261203/home-Tantg"
                        h3="Hipsster"
                        p="Glasses Shop"
                    />
                </div>

                <div>
                    <ProjectCard
                        src={fitLift}
                        link="https://github.com/nhien261203/home-Tantg"
                        h3="FitLift"
                        p="Fitness App"
                    />
                </div>

            </div>
        </section>
    );

}

export default Projects


