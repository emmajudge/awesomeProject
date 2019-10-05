import React, { Component } from "react";
import { Card } from "react-bootstrap";
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

    //Function To Add A Charity To The User's Favorites List
    likeCharity = event => {
        event.preventDefault();
        API.addFavorite({name: event.target.value}).then(response => console.log(response.data));
    }

    render() {
        return (
            this.state.charities.map(item => (
                // map through the data of charities and for each one:
                <div class="container" id="charitybox"><Card className="charityapp">
                    <div><button align="right" class="likeBtn" id={item._id} value={item.name} onClick={this.likeCharity}>Like</button></div>
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