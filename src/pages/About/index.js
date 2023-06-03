// Homepage HTML
import React from "react";
import profPic from "../../assets/canvasprofEnhanced.png";
import './about.css';

const About = () => {
    return (
        <React.Fragment>
            <div className="max-w-sm w-full lg:max-w-full lg:flex items-center items-stretch place-content-center about-container">
                <div className="h-96 lg:h-auto lg:w-96 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden p-4 prof-container">
                    <img className="rounded-full w-96 h-96 prof-img" src={profPic} alt="self portrait" />
                </div>
                <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal about-text">
                    <div className="mb-8">
                        <div className="text-gray-900 font-bold text-3xl mb-2">About Me</div>
                        <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default About;