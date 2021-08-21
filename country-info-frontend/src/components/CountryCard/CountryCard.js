import React, { Component } from 'react';
import GermanyFlag from './germany-flag.png'
import "./CountryCard.css"


const CountryCard = (props) => {
    return ( 
        <div className="country-card shadow">
            <img className="country-card-img" src={GermanyFlag} alt="No image found."></img>
            <div className="country-card-name">United States Of America</div>
            <div className="country-card-population">Population: 81,770,900</div>
            <div className="country-card-region">Region: Europe</div>
            <div className="country-card-capital">Capital: Berlin</div>
        </div>
    );
}
 
export default CountryCard;