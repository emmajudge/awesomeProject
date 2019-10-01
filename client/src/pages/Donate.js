import React, { Component } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import DropdownButton from "react-bootstrap/DropdownButton";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
//import all other relevant react components once built

class Donate extends Component {
    state = {
        userID: "",
        donations: [{
            charity: "",
            amount: 0
        }],
        charity: "",
        amount: 0,
        cardNumber: 0
    };

    // call necessary functions to load page data and event handling
    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.title && this.state.authors) {
          API.saveBook({
            title: this.state.title,
            authors: this.state.authors,
            description: this.state.description,
            image: this.state.image,
            link: this.state.link
          })
            .then(res => this.loadBooks())
            .catch(err => console.log(err));
        }
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
    };
    
    validateCardNumber = event => {
        event.preventDefault();
        var cardNumber = this('#cardNumber').val();
        //Test the length, and use a regex to test 
        //that there are 16 numbers
        if (cardNumber.length < 16 || !/[0-9]{16}/.test(cardNumber)) {
            //Invalid credit card number do error code here
            prompt("Invalid credit card number. Please try again.")
        } else {
            // handleInputChange();
        }
    }

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-6">
                        <h1>Donate Now!</h1>

                        <form>
                            <DropdownButton id="charitySelect" title="Select Charity" value={this.state.charity}>
                                <DropdownButton.Item href="#/path-1">Feeding America</DropdownButton.Item>
                                <DropdownButton.Item href="#/path-1">St. Jude Children’s Research Hospital</DropdownButton.Item>
                                <DropdownButton.Item href="#/path-1">Nature Conservancy</DropdownButton.Item>
                                <DropdownButton.Item href="#/path-1">Planned Parenthood</DropdownButton.Item>
                                <DropdownButton.Item href="#/path-1">Feed the Children</DropdownButton.Item>
                                <DropdownButton.Item href="#/path-1">Gentle Barn</DropdownButton.Item>
                                <DropdownButton.Item href="#/path-1">Doctors Without Borders</DropdownButton.Item>
                                <DropdownButton.Item href="#/path-1">Make-A-Wish Foundation of America</DropdownButton.Item>
                                <DropdownButton.Item href="#/path-1">American Kidney Fund</DropdownButton.Item>
                                <DropdownButton.Item href="#/path-1">World Wildlife Fund</DropdownButton.Item>
                            </DropdownButton>

                            <Input
                                value={this.state.cardNumber}
                                onChange={this.validateCardNumber}
                                name="cardNumber"
                                id="cardNumber"
                                maxlength="16"
                                placeholder="Card Number"
                            />

                            <Input
                                value={this.state.authors}
                                onChange={this.handleInputChange}
                                name="authors"
                                placeholder="Author (required)"
                            />

                            <FormBtn
                                disabled={!(this.state.authors && this.state.title)}
                                onClick={this.handleFormSubmit}
                            >
                                Submit Payment
              </FormBtn>
                        </form>
                    </Col>
                </Row>
            </Container>
        );
    }
};

export default Donate;