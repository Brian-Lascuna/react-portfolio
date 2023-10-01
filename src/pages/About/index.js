// Homepage/About HTML
import React from "react";
import profPic from "../../assets/canvasprofEnhanced.png";
import badge from "../../assets/full-stack-developer.png";
import cert from "../../assets/ucdavis_cert.png";
import './about.css';

const About = () => {
    return (
        <React.Fragment>
            <div className="flex justify-center about-container">
                <div className="flex flex-col items-start w-screen mx-6 bg-white border-4 border-black rounded-lg shadow md:flex-row dark:border-gray-700 dark:bg-gray-800 aboutColor">
                    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg prof-img" src={profPic} alt="profile-picture"/>
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">About Me</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            Hi, my name is Brian Lascuna and I'm an aspiring programmer and full stack developer striving to learn more within the industry and challenge myself, whether it be develpment technologies 
                            or techniques within development. I've been studying Computer Science for almost 5 years and currently am proficient in C++, Python, and Javascript. I obtained a Certificate of Completion 
                            for Full Stack Web Development from a certificate program accredited by UC Davis and through this I have also picked up proficiencies in web development technologies such as MySQL, Mongo, 
                            Express, and React among others. I have excellent critical thinking skills to help tackle difficult situations and overcome any challenge during development and have confidence in my ability 
                            to quickly learn and master new skills. I'm an all around team player, willing to adapt to any role to ensure the project is successful.
                        </p>
                        <a href="https://www.credly.com/badges/1d5faea6-3210-4186-9f56-8538a12bc814/public_url" target="_blank" className="course-badge"><img src={badge} alt="course-badge-pic" /></a>
                    </div>
                </div>
            </div>

            <div className="flex justify-center cert-container">
                <h2 className="cert-text">Certification</h2>
                <img className="cert" src={cert} alt="cert-pic"></img>
            </div>
        </React.Fragment>
    )
}

export default About;