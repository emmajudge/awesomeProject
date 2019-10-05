import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import ModalHeader from "react-bootstrap/ModalHeader";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import API from "../utils/API";
import { Formik, Field } from "formik";
import * as yup from "yup";

const paymentSchema = yup.object().shape({
    charityName: yup.string()
        .required("Please select an organization!"),
    fullName: yup.string()
        .min(2, 'Too Short!')
        .max(70, 'Too Long!')
        .required("name is a required field"),
    email: yup.string()
        .email("invalid email")
        .required("email is a required field"),
    donationAmount: yup.number()
        .moreThan(0.99, 'Please donate at least $1')
        .required("donation amount is a required field"),
    cardNumber: yup.number()
        .moreThan(1111111111111111, 'Please enter a valid credit card number')
        .required("credit card number is a required field"),
    cvc: yup.number()
        .moreThan(111, 'Invalid, please try again')
        .required("CVC is a required field"),
    address: yup.string()
        .min(2, 'Too Short!')
        .max(70, 'Too Long!')
        .required("address is a required field"),
    address2: yup
        .string(),
    city: yup.string()
        .min(2, 'Too Short!')
        .max(70, 'Too Long!')
        .required("city is a required field"),
    state: yup.string()
        .min(2, 'Too Short!')
        .max(70, 'Too Long!')
        .required("state is a required field"),
    zip: yup.string()
        .min(5, 'Too Short!')
        .required("zip is a required field"),
    populate: yup.bool(),
});

// https://react-bootstrap.github.io/components/modal/#modal-body-props

class Donate extends Component {
    state = {
        username: "",
        name: "",
        donation: 0
    };

addDonation = event => {
    event.preventDefault();
    console.log(event.target);
    API.addDonation({name: event.target.dataset.charityname, username: event.target.dataset.fullname, donation: event.target.dataset.donationamount})
    .then(API.addDonateUser({amountDonated: event.target.dataset.donationamount}))
    .then(alert("Thank you for donating!"))
    .then(window.location.reload());
}

handleInputChange = event => {
    const {name, value} = event.target;
    this.setState({ [name]: value});
}
////////////////////////////////////////////////////////////////////////////

    render() {

        return (
            <Container fluid>
                <Row>
                    <Col md="8">
                        <h1>Donate Now!</h1>
                        <Formik
                            validationSchema={paymentSchema}
                            initialValues={{
                                charityName: "",
                                fullName: "",
                                email: "",
                                donationAmount: "",
                                cardNumber: "",
                                cvc: "",
                                address: "",
                                address2: "",
                                city: "",
                                state: "",
                                zip: ""
                            }}
                            onSubmit={console.log}
                        >
                            {({
                                handleSubmit,
                                isSubmitting,
                                handleChange,
                                handleBlur,
                                values,
                                touched,
                                isValid,
                                errors,
                                status
                            }) => (
                                    <Form noValidate onSubmit={handleSubmit}>
                                        <Form.Group controlId="charityName">
                                            <Field name="charityName" component="select" placeholder="Select Organization">
                                                <option>Select Organization</option>
                                                <option value="Gentle Barn">Gentle Barn</option>
                                                <option value="American Kidney Fund">American Kidney Fund</option>
                                                <option value="Doctors Without Borders">Doctors Without Borders</option>
                                                <option value="Feeding America">Feeding America</option>
                                                <option value="Feed the Children">Feed the Children</option>
                                                <option value="Make-A-Wish Foundation of America">Make-A-Wish Foundation of America</option>
                                                <option value="Nature Conservancy">Nature Conservancy</option>
                                                <option value="Planned Parenthood">Planned Parenthood</option>
                                                <option value="St. Jude Children’s Research Hospital">St. Jude Children’s Research Hospital</option>
                                                <option value="World Wildlife Fund">World Wildlife Fund</option>
                                            </Field>
                                        </Form.Group>
                                        <Form.Row>
                                            <Form.Group as={Col} controlId="validationFormik01">
                                                <Form.Label>Full Name (as it appears on your credit card)</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="First Last"
                                                    name="fullName"
                                                    value={values.fullName}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    isValid={touched.fullName && !errors.fullName}
                                                    isInvalid={touched.fullName && !!errors.fullName}
                                                />
                                                <Form.Control.Feedback type="valid">{isValid}</Form.Control.Feedback>
                                                <Form.Control.Feedback type="invalid">
                                                    {errors.fullName}
                                                </Form.Control.Feedback>
                                            </Form.Group>

                                            <Form.Group as={Col} controlId="validationFormik02">
                                                <Form.Label>Email</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Enter email"
                                                    name="email"
                                                    value={values.email}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    isValid={touched.email && !errors.email}
                                                    isInvalid={touched.email && !!errors.email}
                                                />
                                                <Form.Control.Feedback type="valid">{isValid}</Form.Control.Feedback>
                                                <Form.Control.Feedback type="invalid">
                                                    {errors.email}
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                        </Form.Row>

                                        <Form.Row>
                                            <Form.Group as={Col} controlId="validationFormik05">
                                                <Form.Label>Donation Amount (USD)</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="$"
                                                    name="donationAmount"
                                                    value={values.donationAmount}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    isValid={touched.donationAmount && !errors.donationAmount}
                                                    isInvalid={touched.donationAmount && !!errors.donationAmount}
                                                />
                                                <Form.Control.Feedback type="valid">{isValid}</Form.Control.Feedback>
                                                <Form.Control.Feedback type="invalid">
                                                    {errors.donationAmount}
                                                </Form.Control.Feedback>
                                            </Form.Group>

                                            <Form.Group as={Col} controlId="validationFormik06">
                                                <Form.Label>Credit Card Number</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="0000 1111 2222 3333"
                                                    name="cardNumber"
                                                    value={values.cardNumber}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    isValid={touched.cardNumber && !errors.cardNumber}
                                                    isInvalid={touched.cardNumber && !!errors.cardNumber}
                                                />
                                                <Form.Control.Feedback type="valid">{isValid}</Form.Control.Feedback>
                                                <Form.Control.Feedback type="invalid">
                                                    {errors.cardNumber}
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                            <Form.Group as={Col} controlId="validationFormik07">
                                                <Form.Label>CVC</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="000"
                                                    name="cvc"
                                                    value={values.cvc}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    isValid={touched.cvc && !errors.cvc}
                                                    isInvalid={touched.cvc && !!errors.cvc}
                                                />
                                                <Form.Control.Feedback type="valid">{isValid}</Form.Control.Feedback>
                                                <Form.Control.Feedback type="invalid">
                                                    {errors.cvc}
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                        </Form.Row>

                                        <Form.Group controlId="validationFormik03">
                                            <Form.Label>Address</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="1234 Main St"
                                                name="address"
                                                value={values.address}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                isValid={touched.address && !errors.address}
                                                isInvalid={touched.address && !!errors.address}
                                            />
                                            <Form.Control.Feedback type="valid">{isValid}</Form.Control.Feedback>
                                            <Form.Control.Feedback type="invalid">
                                                {errors.address}
                                            </Form.Control.Feedback>
                                        </Form.Group>

                                        <Form.Group controlId="validationFormik04">
                                            <Form.Label>Address 2</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Apartment, studio, or floor"
                                                name="address2"
                                                value={values.address2}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                isValid={touched.address2 && !errors.address2}
                                                isInvalid={touched.address2 && !!errors.address2}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.address2}
                                            </Form.Control.Feedback>
                                        </Form.Group>

                                        <Form.Row>
                                            <Form.Group as={Col} controlId="validationFormik05">
                                                <Form.Label>City</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="City"
                                                    name="city"
                                                    value={values.city}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    isValid={touched.city && !errors.city}
                                                    isInvalid={touched.city && !!errors.city}
                                                />
                                                <Form.Control.Feedback type="valid">{isValid}</Form.Control.Feedback>
                                                <Form.Control.Feedback type="invalid">
                                                    {errors.city}
                                                </Form.Control.Feedback>
                                            </Form.Group>

                                            <Form.Group as={Col} controlId="validationFormik06">
                                                <Form.Label>State</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="State"
                                                    name="state"
                                                    value={values.state}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    isValid={touched.state && !errors.state}
                                                    isInvalid={touched.state && !!errors.state}
                                                />
                                                <Form.Control.Feedback type="valid">{isValid}</Form.Control.Feedback>
                                                <Form.Control.Feedback type="invalid">
                                                    {errors.state}
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                            <Form.Group as={Col} controlId="validationFormik07">
                                                <Form.Label>Zip</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Zip"
                                                    name="zip"
                                                    value={values.zip}
                                                    onChange={handleChange}
                                                    // value = {this.state.donation}
                                                    // onChange = {this.handleInputChange}
                                                    onBlur={handleBlur}
                                                    isValid={touched.zip && !errors.zip}
                                                    isInvalid={touched.zip && !!errors.zip}
                                                />
                                                <Form.Control.Feedback type="valid">{isValid}</Form.Control.Feedback>
                                                <Form.Control.Feedback type="invalid">
                                                    {errors.zip}
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                        </Form.Row>

                                        <Form.Group id="formGridCheckbox">
                                            <Form.Check type="checkbox" disabled label="Populate billing information from profile" />
                                        </Form.Group>

                                        <Button type="submit" data-donationamount={values.donationAmount} data-fullname={values.fullName} data-charityname={values.charityName} onClick={this.addDonation}>Proceed</Button>
                                    </Form>
                                )}
                        </Formik>
                    </Col>
                </Row>
            </Container >
        );
        // }
    }
    // }
};

export default Donate;