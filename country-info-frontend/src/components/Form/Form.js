import React, { Component } from 'react';
import RegionFilter from './RegionFilter';
import SearchBar from './SearchBar';
import "./Form.css"


class Form extends Component {
    constructor(props) {
        super(props);
        this.state = { 

        }
    }
    render() { 
        return ( 
            <form className="search-form">
                <SearchBar />
                <RegionFilter />
            </form>
         );
    }
}
 
export default Form;