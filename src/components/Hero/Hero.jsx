import React from "react";
import "./Hero.css";
import { CV, githubIcon, heroImg, linkedinIcon, moon, sun, twitterIcon } from "../../assets";
import { useTheme } from "../../common/ThemeContext";
const Hero = () => {
    const {theme,toggleTheme}=useTheme();

const themeIcon= theme==='light'?sun:moon;
// const themeIcon= sun
    return (
        <section id="hero">
            <div className="colorModeContainer">
                <img className="hero" src={heroImg} alt="profile photo" />
                <img
                    className="colorMode"
                    src={themeIcon}
                    alt="colorMode icon"
                    onClick={toggleTheme}
                />
            </div>
            <div className="info">
                <h1>Puneet Uttam</h1>
                <h2>Frontend Developer</h2>
                <span>
                    <a href="https://twitter.com" target="_blank">
                        <img src={twitterIcon} alt="" />
                    </a>

                    <a href="https://github.com" target="_blank">
                        <img src={githubIcon} alt="" />
                    </a>

                    <a href="https://linkedin.com" target="_blank">
                        <img src={linkedinIcon} alt="" />
                    </a>
                </span>
                <p>
                    With a passion of developing modern React web apps for commerical bussiness
                </p>

                <a href={CV} download>
                    <button className="hover" >Resume</button>
                </a>
            </div>
        </section>
    );
};

export default Hero;
