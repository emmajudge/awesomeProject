import React, {Component} from "react";
import {Input, FormBtn} from "../components/Form";
import { Container } from "../components/Grid";
import API from "../utils/API"

class Logins extends Component {
    state = {
        usernameRender: "",
        passwordRender: ""
    }
////////////////////////////////////////////////////////////////////////////////////////
    createLogin = event => {
        event.preventDefault();
        console.log(this.state);
        API.createLogin({username: this.state.usernameRender, password: this.state.passwordRender});
    }
    checkLogin = event => {
        event.preventDefault();
        console.log(this.state);
        API.checkLogin({username: this.state.usernameRender, password: this.state.passwordRender});
    }
    handleInputChange = event => {
        const {name, value} = event.target;
        this.setState({ [name]: value   });
    }
///////////////////////////////////////////////////////////////////////////////////////
    render() {
        return (
            <Container fluid>
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
                    >Sign Up</FormBtn>
                    <FormBtn
                        onClick = {this.checkLogin}
                    >Login</FormBtn>
                </form>
            </Container>
        )
    }
}

export default Logins;
