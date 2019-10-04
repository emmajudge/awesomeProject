import React, {Component} from "react";
import {Input, FormBtn, TextArea} from "../components/Form";
import { Container } from "../components/Grid";
import API from "../utils/API";
import {Link, Redirect} from "react-router-dom";
var test = "";
class Account extends Component {
    state = {
        favoriteCharities: [],  
        username: "",
        password: "",
        amountDonated: 0
    }
    componentDidMount() {
        this.viewAccount();
    }
    viewAccount = event => {
        API.viewAccount()
        .then(response => this.setState({username: response.data.username, amountDonated: response.data.amountDonated, favoriteCharities: response.data.favoriteCharities}))
    }
    refresh = event => {
        window.location.reload();
    }
    handleInputChange = event => {
        const {name, value } = event.rarget;
        this.setState({[name]: value});
    };
    render() {
        return (
            <Container>
                <h1 value= {this.state.username} onChange={this.handleInputChange}>{this.state.username}</h1>
                <h3 value={this.state.amountDonated} onChange={this.handleInputChange}>Amount Donated: $ {this.state.amountDonated}</h3>
                <div><h1>{this.state.favoriteCharities.map((item, index) => (<span className="test" key={index}>{item} </span>))}</h1></div>
                {/* <h3 onChange={this.handleInputChange}>{this.state.favoriteCharities[0]}</h3> */}
                <button onClick={this.refresh}>Refresh</button>
            </Container>
        )
    }
}

export default Account;