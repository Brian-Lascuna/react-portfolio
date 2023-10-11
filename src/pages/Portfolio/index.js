// Portfolio page HTML
import React from "react";
import Project from "../../components/Project";
//import './portfolio.css';

import nutriplannerImg from '../../assets/nutriplanner1.png';
import fashionForecastImg from '../../assets/fashionForecast.png';
import notetakerImg from '../../assets/notetaker.png';

const Portfolio = () => {
    return (
        <React.Fragment>
            <div className="flex-auto flex-col place-content-center justify-between mt-8 mx-8 portfolio-container">
                <Project title="NutriPlanner Fitness App" github="https://github.com/Brian-Lascuna/activeLife" deployed="https://nutriplanner-activelife-app-59fac597143b.herokuapp.com/" bgImg={nutriplannerImg}/>
                <Project title="Fashion Forecast | Weather Dashboard App" github="https://github.com/Brian-Lascuna/fashion-forecast" deployed="https://brian-lascuna.github.io/fashion-forecast/" bgImg={fashionForecastImg}/>
                <Project title="Note Taker App" github="https://github.com/Brian-Lascuna/note-taker" deployed="https://github.com/Brian-Lascuna/note-taker" bgImg={notetakerImg}/>
            </div>
        </React.Fragment>
    )
}

export default Portfolio;