import React, { Component } from 'react';


class RegionFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <select name="region" className="region-filter shadow">
                <option value="" defaultValue>Filter By Region</option>
                <option value="Africa">Africa</option>
                <option value="Africa">America</option>
                <option value="Africa">Asia</option>
                <option value="Africa">Europe</option>
                <option value="Africa">Oceania</option>
            </select>
        );
    }
}
 
export default RegionFilter;