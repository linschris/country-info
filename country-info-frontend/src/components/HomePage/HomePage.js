import NavBar from "../NavBar/NavBar";
import React, { Component } from 'react';
import CountryCard from "../CountryCard/CountryCard";
import CountryCardGrid from "../CountryCardGrid/CountryCardGrid";
import Form from "../Form/Form";

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data: null
        }
    }

    componentDidMount() {
        this.getCountries()
        .then(data => {
            this.setState({ data: data}, function() {
                console.log(this.state.data)
            })
        })
        .catch(err => console.log(err));
    }

    getCountries = async () => {
        const response = await fetch("/countries/all");
        const body = await response.json();
        
        if(response.status !== 200) {
            throw Error(body.message)
        }
        return body;
    }


    render() { 
        
        return ( 
            <>
            <NavBar />
            <Form />
            <CountryCardGrid />
            </>
        );
    }
}
 
export default HomePage;