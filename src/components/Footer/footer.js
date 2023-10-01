import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import './footer.css';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <div className="flex justify-center footer-container" >
            <div className="flex flex-row items-center text-5xl socials-container">
                <a href="https://www.linkedin.com/in/brian-lascuna-90669823a/" target="_blank"><FontAwesomeIcon icon={faLinkedin} className="hover:text-blue-600 social-icon"></FontAwesomeIcon></a>
                <a href="https://github.com/Brian-Lascuna" target="_blank"><FontAwesomeIcon icon={faGithub} className="hover:text-gray-600 social-icon"></FontAwesomeIcon></a>
                <a href="/contact"><FontAwesomeIcon icon={faEnvelope} className="hover:text-white social-icon"></FontAwesomeIcon></a>
            </div>
        </div>
    )
}

export default Footer;