// Homepage HTML
import React from "react";
import Project from "../../components/Project";
//import './portfolio.css';

const Portfolio = () => {
    return (
        <React.Fragment>
            <div className="flex-auto flex-col place-content-center justify-between mt-8 mx-8 portfolio-container">
                <Project repo="https://github.com/Brian-Lascuna/book-search-engine"/>
                <Project />
                <Project />
                <Project />
                <Project />
                <Project />
            </div>
        </React.Fragment>
    )
}

export default Portfolio;