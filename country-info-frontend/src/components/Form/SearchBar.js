import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { 

        }
    }
    render() { 
        return ( 
            <input className="search-bar shadow" placeholder="Search for a country..."></input>
         );
    }
}
 
export default SearchBar;