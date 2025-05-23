import React from 'react';
import './Hero.scss';
import heroImg from '../../assets/hero-img.png';

import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';

import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';

import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';


function Hero() {

    const { theme, toggleTheme } = useTheme();

    const themeIcon = theme === 'light' ? sun : moon;
    const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

    return <section id="hero" className="container" >
        <div className="content-hero">
            
            <div className="info">
                <h1>
                    Do Van Nhien
                </h1>
                <h2>Frontend Developer</h2>
                <span>
                    <a href="https://twitter.com/" target="_blank">
                        <img src={twitterIcon} alt="Twitter icon" />
                    </a>
                    <a href="https://github.com/" target="_blank">
                        <img src={githubIcon} alt="Github icon" />
                    </a>
                    <a href="https://Linkedin.com/" target="_blank">
                        <img src={linkedinIcon} alt="Linkedin icon" />
                    </a>

                </span>
                <p className="description">
                    With a passion for developing modern React web apps for commercial businesses.
                </p>
                <a href={CV} download>
                    <button className="hover" download>
                        Resume
                    </button>
                </a>
            </div>
            <div className="colorModeContainer">
                <img className="hero" src={heroImg} alt="Profile picture of Nhien" />

                <img
                    className="colorMode"
                    src={themeIcon}
                    alt="Color mode icon"
                    onClick={toggleTheme}
                />
            </div>
        </div>


    </section>
}

export default Hero