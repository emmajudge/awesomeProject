import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../components/Navbar/index";
import { Jumbotron, Card } from "react-bootstrap";
import ImageSlides from "../components/Carousel/index";
import "../components/Charity/style.css"



class Charity extends Component {
    state = {
       charities: []
    }

    componentDidMount(){
        
        //calling database 
        //fetch
        //setState to have the data
        fetch('/api/donation')
        .then(response => response.json())
        .then(items =>this.setState({charities: items})); 
    }

    render() {
        return (
            // map throug the data of charities and for each oneo:
            this.state.charities.map( item => (
                <Card className="charityapp">
                {item.name}
                <br></br>
                {item.image}
                <br></br>
                {item.description}
                <br></br>
                {item.link}
                <br></br>
                {item.donation}
                <button class="donateNow">Like
                    <a href="/donate/"></a>
                </button>

            </Card>
            ))
            
        );
    }
}

export default Charity;
