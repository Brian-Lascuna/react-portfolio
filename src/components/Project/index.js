import React from "react";
import { Link } from 'react-router-dom';
import { Octokit } from 'octokit';
import { createTokenAuth } from "@octokit/auth-token";
//import './project.css';

const Project = (props) => {
    /* const fetchRepo = async (repository) => {

        const octokit = new Octokit({
            auth: authentication
        });

        const repoURL = await octokit.request('GET /repos/{owner}/{repo}', {
            owner: 'Brian-Lascuna',
            repo: repository,
            headers: {
              'X-GitHub-Api-Version': '2022-11-28'
            }
          });

        return repoURL;
    }

    if (props.repo) {
        const projectRepoURL = props.repo.split('/');
        const projectRepo = projectRepoURL[projectRepoURL.length - 1]
        const projectRepoData = fetchRepo(projectRepo);
    } */

    return (
        <div
        className="block rounded-lg bg-white p-6 my-4 h-80 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 project-card">
            <h5
                className="mb-2 text-3xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                Project Title
            </h5>
            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                Project Description
            </p>
        </div>
    )
}

export default Project;