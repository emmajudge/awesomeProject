import React, {Component} from "react";
import {Input, FormBtn} from "../components/Form";
import { Container } from "../components/Grid";
import API from "../utils/API";
import {Link} from "react-router-dom";

class Login extends Component {
    state = {
        usernameRender: "",
        passwordRender: ""
    }

    createLogin = event => {
        event.preventDefault();
        console.log(this.state);
        API.createLogin({username: this.state.usernameRender, password: this.state.passwordRender})
        .then(response => alert(response.data));
        // window.location.href("/");
        
    }
    //Save For Create Page
    // checkLogin = event => {
    //     event.preventDefault();
    //     console.log("Check Login Event)");
    //     API.checkLogin({username: this.state.usernameRender, password: this.state.passwordRender});
    //     window.location.reload();
    // }
    // getAmount = event => {
    //     event.preventDefault();
    //     API.getAmount().then(window.location.reload());
    // }
    logUser = event => {
        event.preventDefault();
        API.logoutUser({username: this.state.usernameRender});
        window.location.assign("/");
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
                    {/* <FormBtn
                        onClick = {this.checkLogin}
                    >Sign Up</FormBtn> */}
                </form>
                {/* <button className="amount" onClick={this.logUser}>Amount</button> */}
                {/* <button className="amount" onClick={this.getAmount}>Amount</button> */}
                {/* <Link to={"/books"}>Test</Link> */}
            </Container>
        )
    }
}

export default Login;
