import React from "react";
import { Link } from 'react-router-dom';
//import './project.css';

const Project = (props) => {

    return (
        <div className="relative rounded-lg border-4 border-black bg-white p-6 my-4 h-80 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 project-card">
            <h5
                className="mb-2 text-3xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                {props.title}
            </h5>
            <div className="absolute bottom-4 right-3">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-1 rounded">
                    More Info
                </button>
                <Link to={props.github}>
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-1 rounded">
                    Github
                </button>
                </Link>
                <Link to={props.deployed}>
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-1 rounded">
                    View App
                </button>
                </Link>
            </div>
        </div>
    )
}

export default Project;