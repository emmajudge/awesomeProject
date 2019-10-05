//Dependecies
import React, {Component} from "react";
import { Container } from "../components/Grid";
import API from "../utils/API";
import "../../src/components/Account/style.css";

class Account extends Component {

    //Sets Default Values To Be Updated If They Exist
    state = {
        favoriteCharities: [],  
        username: "",
        amountDonated: 0
    }

    //When The Page Loads, Calls The View Account Method In Order To See The Information
    componentDidMount() {
        this.viewAccount();
    }
    
    //This Calls The API And Gets The Infomation Of The Currently Logged In User
    viewAccount = event => {
        API.viewAccount()
        .then(response => this.setState({username: response.data.username, amountDonated: response.data.amountDonated, favoriteCharities: response.data.favoriteCharities}))
    }

    //Logs Out The Current User Abd Sends Them To The Homepage
    logout = event => {
        event.preventDefault();
        API.logoutUser({username: this.state.username}).then(window.location.assign("/"));
    }

    //On Any Input Change, Reflect The Changes
    handleInputChange = event => {
        const {name, value } = event.rarget;
        this.setState({[name]: value});
    };

    //Renders The Account Page
    render() {
        return (
            <Container>
                <div className="text-center">
                <h1 value= {this.state.username} onChange={this.handleInputChange}>{this.state.username}</h1>
                <h3 value={this.state.amountDonated} onChange={this.handleInputChange}>Amount Donated: $ {this.state.amountDonated}</h3>
                <div><h1>{this.state.favoriteCharities.map((item, index) => (<span className="test" key={index}>|{item} | </span>))}</h1></div>
                <button onClick={this.logout}>Logout</button>
                </div>
            </Container>
        )
    }
}

export default Account;