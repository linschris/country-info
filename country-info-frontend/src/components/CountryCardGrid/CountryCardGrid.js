import React, { Component } from 'react';
import CountryCard from '../CountryCard/CountryCard';
import './CountryCardGrid.css'


class CountryCardGrid extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            countriesArray: ["1", "1", "1", "1", "1"]
        }
    }
    render() { 
        return ( 
            <div id="country-card-grid">
                {this.state.countriesArray.map(country => {
                    return <CountryCard />
                })}
            </div>
         );
    }
}
 
export default CountryCardGrid;