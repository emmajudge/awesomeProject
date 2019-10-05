import React, { Component } from "react";
import { Card } from "react-bootstrap";
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

    //Function To Add A Charity To The User's Favorites List
    likeCharity = event => {
        event.preventDefault();
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
                <button className="donateNow" id={item._id} value={item.name} onClick={this.likeCharity}>Favorite</button>
            </Card>
            ))
            
        );
    }
}

export default Charity;
