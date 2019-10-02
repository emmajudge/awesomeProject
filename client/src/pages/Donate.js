import React, { Component } from "react";
import API from "../utils/API";
// import { Link } from "react-router-dom";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
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
                            <DropdownButton id="charitySelect" title="Select Charity">
                                <Dropdown.Item value="Feeding America">Feeding America</Dropdown.Item>
                                <Dropdown.Item value="St. Jude Children’s Research Hospital">St. Jude Children’s Research Hospital</Dropdown.Item>
                                <Dropdown.Item value="Nature Conservancy">Nature Conservancy</Dropdown.Item>
                                <Dropdown.Item value="Planned Parenthood">Planned Parenthood</Dropdown.Item>
                                <Dropdown.Item value="Feed the Children">Feed the Children</Dropdown.Item>
                                <Dropdown.Item value="Gentle Barn">Gentle Barn</Dropdown.Item>
                                <Dropdown.Item value="Doctors Without Borders">Doctors Without Borders</Dropdown.Item>
                                <Dropdown.Item value="Make-A-Wish Foundation of America">Make-A-Wish Foundation of America</Dropdown.Item>
                                <Dropdown.Item value="American Kidney Fund">American Kidney Fund</Dropdown.Item>
                                <Dropdown.Item value="World Wildlife Fund">World Wildlife Fund</Dropdown.Item>
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