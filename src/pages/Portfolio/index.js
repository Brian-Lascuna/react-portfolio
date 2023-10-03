// Portfolio page HTML
import React from "react";
import Project from "../../components/Project";
//import './portfolio.css';

const Portfolio = () => {
    return (
        <React.Fragment>
            <div className="flex-auto flex-col place-content-center justify-between mt-8 mx-8 portfolio-container">
                <Project title="NutriPlanner Fitness App" github="https://github.com/Brian-Lascuna/activeLife" deployed="https://nutriplanner-activelife-app-59fac597143b.herokuapp.com/" />
                <Project title="Fashion Forecast" github="https://github.com/Brian-Lascuna/fashion-forecast" deployed="https://brian-lascuna.github.io/fashion-forecast/"/>
                <Project title="Book Search Engine" github="https://github.com/Brian-Lascuna/book-search-engine" deployed="https://tranquil-bastion-66441.herokuapp.com/"/>
            </div>
        </React.Fragment>
    )
}

export default Portfolio;