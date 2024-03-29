import React from "react";
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
    const toggleMobileMenu = () => {
        const mobileMenu = document.querySelector('.mobile-menu');
        mobileMenu.classList.toggle('hidden');
    }

    return (
        <nav className="border-gray-200 dark:bg-gray-900 portfolioNav">
            <div className="max-w-screen-xl me-0 md:flex flex-wrap items-center p-4">
                <Link to="/react-portfolio" className="flex items-center">
                    <span className="self-center text-4xl font-semibold whitespace-nowrap dark:text-white">Brian Lascuna</span>
                </Link>
                <button type="button" onClick={toggleMobileMenu} className="inline-flex items-center float-right relative bottom-9 p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false" aria-label="Toggle navigation">
                <span className="sr-only">Open main menu</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                </svg>
                </button>

                {/* Mobile Menu */}
                <div className="hidden md:hidden mobile-menu">
                    <ul className="font-medium flex flex-col text-center mt-3 space-y-4">
                        <li>
                        <Link to="/react-portfolio">About</Link>
                        </li>
                        <li>
                        <Link to="/portfolio">Portfolio</Link>
                        </li>
                        <li>
                        <Link to="/contact">Contact</Link>
                        </li>
                        <li>
                        <Link to="/resume">Resume</Link>
                        </li>
                    </ul>
                </div>

                <div className="hidden w-full md:block md:w-auto nav-container">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 ml-8 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 navColor">
                        <li>
                        <Link to="/react-portfolio" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</Link>
                        </li>
                        <li>
                        <Link to="/portfolio" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Portfolio</Link>
                        </li>
                        <li>
                        <Link to="/contact" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</Link>
                        </li>
                        <li>
                        <Link to="/resume" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Resume</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Navbar;