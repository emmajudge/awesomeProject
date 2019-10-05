import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../components/Navbar/index";
import { Jumbotron, Card } from "react-bootstrap";
import ImageSlides from "../components/Carousel/index";
import "../components/Charity/style.css"
import API from "../utils/API";


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

    likeCharity = event => {
        event.preventDefault();
        // console.log(event.target.value);
        API.addFavorite({name: event.target.value}).then(response => console.log(response.data));
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
                {/* <button class="donateNow">Like
                    <a href="/donate/"></a>
                </button> */}
                <button className="donateNow" id={item._id} value={item.name} onClick={this.likeCharity}>Like
                    {/* <a href="/donate/"></a> */}
                </button>

            </Card>
            ))
            
        );
    }
}

export default Charity;
