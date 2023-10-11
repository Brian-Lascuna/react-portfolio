import React from "react";
import { Link } from 'react-router-dom';
import './project.css';

const Project = (props) => {

    return (
        <div className="relative rounded-lg border-4 border-black p-6 my-4 h-80 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
            <img src={props.bgImg} className="absolute inset-0 w-full h-full object-cover"></img>
            <div className="absolute inset-0 w-full h-full bg-cambridgeBlue bg-opacity-70"></div>
            <h5 className="absolute top-2 mb-2 text-4xl md:text-5xl font-medium font-bold leading-tight text-white project-title">
                {props.title}
            </h5>
            <div className="absolute bottom-4 right-3">
                <Link to={props.github} target="_blank">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-1 rounded">
                    Github
                </button>
                </Link>
                <Link to={props.deployed} target="_blank">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-1 rounded">
                    View App
                </button>
                </Link>
            </div>
        </div>
    )
}

export default Project;