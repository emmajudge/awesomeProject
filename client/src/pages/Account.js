import React, {Component} from "react";
import {Input, FormBtn, TextArea} from "../components/Form";
import { Container } from "../components/Grid";
import API from "../utils/API";
import {Link, Redirect} from "react-router-dom";

class Account extends Component {
    state = {
        favoriteCharites: [],  
        username: "Test",
        password: "",
        amountDonated: 0,
    }
    componentDidMount() {

        // this.viewAccount();
    }
    viewAccount = event => {
        event.preventDefault();
        console.log("viewAccount");
        API.viewAccount()
        .then(response => console.log(response));
        // .then(response => this.setState({username: response.data}))
        // // .then(found => console.log(found.data))
        // .catch(error => console.log(error));
        // this.setState({name: "Apple"});
        // console.log(this.state.name);
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
                <p value= {this.state.username} onChange={this.handleInputChange}>Apple</p>
                <button onClick={this.viewAccount}>View</button>
                <button onClick={this.refresh}>Refresh</button>
            </Container>
        )
    }
}

export default Account;