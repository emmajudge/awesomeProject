import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../components/Navbar/index";
import { Jumbotron, Card, Grid } from "react-bootstrap";
import ImageSlides from "../components/Carousel/index";
import "../components/Charity/index.js"
import "../components/Charity/style.css";

class Charity extends Component {

    state = {
        charities: []
    }

    componentDidMount() {

        //calling database 
        //fetch
        //setState to have the data
        fetch('/api/donation')
            .then(response => response.json())
            .then(items => this.setState({ charities: items }));
    }

    render() {
        return (
            this.state.charities.map(item => (
                // map through the data of charities and for each one:
                <div class="container" id="charitybox"><Card className="charityapp">
                    <div><button align="right" class="likeBtn">Like</button></div>
                    <h class="brand">Charity Name:</h>
                    <h class="label">{item.name}</h>
                    <h class="title">Logo: </h>
                    <h class="info"><img class="logos" src={item.image}></img></h>
                    <hr></hr>
                    <h class="title">Mission: </h>
                    <h class="info">{item.description}</h>
                    <h class="title">Website: </h>
                    <h class="info"><a href={item.link}>{item.name}</a></h>
                    <h class="title">Donations Made: </h>
                    <h class="info">$ {item.donation}</h>
                </Card>
                </div>
            ))
        )
    }
};

export default Charity;