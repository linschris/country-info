import NavBar from "../NavBar/NavBar";
import React, { Component } from 'react';
import CountryCard from "../CountryCard/CountryCard";
import CountryCardGrid from "../CountryCardGrid/CountryCardGrid";
import Form from "../Form/Form";

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = { 

        }
    }
    render() { 
        return ( 
            <>
            <NavBar />
            {/* <CountryCard /> */}
            <Form />
            <CountryCardGrid />
            </>
            //Navbar, with light/dark mode selector
            //SearchBar
            //FilterBar
            //Country Cards
        );
    }
}
 
export default HomePage;