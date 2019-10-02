import React, {Component} from "react";
import {Input, FormBtn} from "../components/Form";
import { Container } from "../components/Grid";
import API from "../utils/API";
import {Link, Redirect} from "react-router-dom";

class Account extends Component {
    state = {
        name: "",
        amountDonated: 0
    }
    componentDidMount() {

        this.viewAccount();
    }
    viewAccount = () => {
        console.log("viewAccount");
        API.viewAccount()
        .then(response => this.setState({name: response.data.username}))
        .catch(error => console.log(error));
    }
    render() {
        return (
            <Container>
                <p>{this.state.name}</p>
                <button onClick={this.viewAccount}>View</button>
            </Container>
        )
    }
}

export default Account;