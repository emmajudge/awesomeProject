import React, {Component} from "react";
import {Input, FormBtn} from "../components/Form";
import { Container } from "../components/Grid";
import "../components/Login/style.css";
import API from "../utils/API";

class Login extends Component {
    state = {
        usernameRender: "",
        passwordRender: ""
    }

    createLogin = event => {
        event.preventDefault();
        API.createLogin({username: this.state.usernameRender, password: this.state.passwordRender})
        .then(response => alert(response.data));
        window.location.assign("/");
    }

    handleInputChange = event => {
        const {name, value} = event.target;
        this.setState({ [name]: value   });
    }
    
    render() {
        return (
            <Container fluid className="loginPage">
                <form>
                    <Input
                        value = {this.state.usernameRender}
                        onChange = {this.handleInputChange}
                        name = "usernameRender"
                        type = "input"
                        placeholder = "Username"
                    />

                    <Input
                        value = {this.state.passwordRender}
                        onChange = {this.handleInputChange}
                        name = "passwordRender"
                        type = "password"
                        placeholder = "Password"
                    />

                    <FormBtn
                        onClick = {this.createLogin}
                    >Login</FormBtn>
                    <a href="/create">Sign Up</a>
                </form>
            </Container>
        )
    }
}

export default Login;
