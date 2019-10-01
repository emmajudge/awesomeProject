import React, {Component} from "react";
import {Input, FormBtn} from "../components/Form";
import { Container } from "../components/Grid";
import API from "../utils/API";
import {Link} from "react-router-dom";

class Logins extends Component {
    state = {
        usernameRender: "",
        passwordRender: "",
        test: ""
    }
////////////////////////////////////////////////////////////////////////////////////////
    createLogin = event => {
        event.preventDefault();
        console.log(this.state);
        API.createLogin({username: this.state.usernameRender, password: this.state.passwordRender});
    }
    checkLogin = event => {
        event.preventDefault();
        // console.log(this.state);
        API.checkLogin({username: this.state.usernameRender, password: this.state.passwordRender});
        // .then(console.log("Checked"));
        // API.logInUser({username: this.state.username});
        // console.log("Checked");
    }
    logUser = event => {
        event.preventDefault();
        console.log("In Event");
        // console.log(window.location.href);
        API.logInUser({username: this.state.usernameRender});
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
                <button className="amount" onClick={this.logUser}>Amount</button>
                <Link to={"/books"}>Test</Link>
            </Container>
        )
    }
}

export default Logins;
