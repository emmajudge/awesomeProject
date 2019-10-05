//Dependecies
import React, {Component} from "react";
import {Input, FormBtn} from "../components/Form";
import { Container } from "../components/Grid";
import API from "../utils/API";

class Create extends Component {
    state = {
        username: "",
        firstName: "",
        password: ""
    }

    checkLogin = event => {
        event.preventDefault();
        API.checkLogin({username: this.state.username, firstName: this.state.firstName, password: this.state.password});
        window.location.assign("/login");
    }

    handleInputChange = event => {
        const {name, value} = event.target;
        this.setState({ [name]: value   });
    }

    render() {
        return (
            <Container fluid>
                <form>
                    <Input
                        value = {this.state.username}
                        onChange = {this.handleInputChange}
                        name = "username"
                        type = "input"
                        placeholder = "Username"
                    />
                    <Input
                        value = {this.state.firstName}
                        onChange = {this.handleInputChange}
                        name = "firstName"
                        type = "input"
                        placeholder = "First Name"
                    />
                    <Input
                        value = {this.state.password}
                        onChange = {this.handleInputChange}
                        name = "password"
                        type = "password"
                        placeholder = "Enter Password"
                    />
                    <FormBtn
                        onClick = {this.checkLogin}
                    >Sign Up</FormBtn>
                    <button></button>
                </form>
            </Container>
        )
    }
}

export default Create;
