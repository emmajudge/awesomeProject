import React, {Component} from "react";
import {Input, FormBtn} from "../components/Form";
import { Container } from "../components/Grid";
import API from "../utils/API";
import {Link} from "react-router-dom";

class Create extends Component {
    state = {
        username: "",
        firstName: "",
        password1: "",
        password2: ""
    }

    // createLogin = event => {
    //     event.preventDefault();
    //     console.log(this.state);
    //     API.createLogin({username: this.state.usernameRender, password: this.state.passwordRender})
    //     .then(response => alert(response.data));
    //     // window.location.href("/");
    // }
    // Save For Create Page
    checkLogin = event => {
        event.preventDefault();
        console.log("Check Login Event)");
        API.checkLogin({username: this.state.username, firstName: this.state.firstName, password1: this.state.password1, password2: this.state.password2});
        window.location.assign("/login");
    }
    // getAmount = event => {
    //     event.preventDefault();
    //     API.getAmount().then(window.location.reload());
    // }
    // logUser = event => {
    //     event.preventDefault();
    //     API.logoutUser({username: this.state.usernameRender});
    // }
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
                        value = {this.state.password1}
                        onChange = {this.handleInputChange}
                        name = "password1"
                        type = "password"
                        placeholder = "Enter Password"
                    />
                    <Input
                        value = {this.state.password2}
                        onChange = {this.handleInputChange}
                        name = "password2"
                        type = "password"
                        placeholder = "Verify Password"
                    />
                    {/* <FormBtn
                        onClick = {this.createLogin}
                    >Login</FormBtn> */}
                    <FormBtn
                        onClick = {this.checkLogin}
                    >Sign Up</FormBtn>
                </form>
                {/* <button className="amount" onClick={this.logUser}>Amount</button> */}
                {/* <button className="amount" onClick={this.getAmount}>Amount</button> */}
                {/* <Link to={"/books"}>Test</Link> */}
            </Container>
        )
    }
}

export default Create;
