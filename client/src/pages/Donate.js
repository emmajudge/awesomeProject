import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import ModalHeader from "react-bootstrap/ModalHeader";
//import Modal from "react-bootstrap/Modal";
//import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import API from "../utils/API";
import { Formik, Field } from "formik";
import * as yup from "yup";

// import API from "../utils/API";
// import { Link } from "react-router-dom";

// let yup = require('yup');

const creditCardSchema = yup.object({
    ccn1: yup
        .array()
        .min(4)
        .of(yup.number().min(0)),
    ccn2: yup
        .array()
        .min(4)
        .of(yup.number().min(0)),
    ccn3: yup
        .array()
        .min(4)
        .of(yup.number().min(0)),
    ccn4: yup
        .array()
        .min(4)
        .of(yup.number().min(0))
});

const billingInfoSchema = yup.object().shape({
    charityName: yup.string(),
    fullName: yup.string()
        .min(2, 'Too Short!')
        .max(70, 'Too Long!')
        .required("name is a required field"),
    email: yup.string()
        .email("invalid email")
        .required("email is a required field"),
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

// await creditCardSchema.isValid({
//     ccn1: [2, 3, 5, 0],
//     ccn2: [2, 3, 5, 0],
//     ccn3: [2, 3, 5, 0],
//     ccn4: [2, 3, 5, 0]
// }); 

// https://react-bootstrap.github.io/components/modal/#modal-body-props

class Donate extends Component {
    state = {
        // userID: "",
        // donations: [{
        //     charity: "",
        //     amount: 0
        // }],
        // charity: "",
        // amount: 0,
        // cardNumber: 0
        username: "",
        name: "",
        donation: 0
    };

    //New Code
////////////////////////////////////////////////////////////////////////////
addDonation = event => {
    event.preventDefault();
    console.log(event.target);
    // console.log(event.target.dataset.charityname);
    // console.log(event.target.dataset.fullname);
    // console.log(event.target.dataset.zip);
    API.addDonation({name: event.target.dataset.charityname, username: event.target.dataset.fullname, donation: event.target.dataset.zip})
    .then(API.addDonateUser({amountDonated: event.target.dataset.zip}))
    .then(alert("Thank you for donating!"))
    .then(window.location.reload());
}

handleInputChange = event => {
    const {name, value} = event.target;
    this.setState({ [name]: value});
}
////////////////////////////////////////////////////////////////////////////

    render() {
        //  const DonationForm = ({ donation, logDonation }) => {
        return (
            <Container fluid>
                <Row>
                    <Col md="8">
                        <h1>Donate Now!</h1>
                        <Formik
                            validationSchema={billingInfoSchema}
                            // initialValues={donation/{
                            initialValues={{
                                charityName: "",
                                fullName: "",
                                email: "",
                                address: "",
                                address2: "",
                                city: "",
                                state: "",
                                zip: ""
                            }}
                            onSubmit={console.log}
                        // https://dev.to/finallynero/comment/7fne
                        // https://jaredpalmer.com/formik/docs/guides/form-submission#submission 
                        // onSubmit={(values,actions) =>{
                        //     dbCall(donation.id, values).then(
                        //         newDonation => {
                        //             actions.setSubmitting(false);
                        //             logDonation(newDonation);
                        //           },
                        //           error => {
                        //             actions.setSubmitting(false);
                        //             actions.setErrors(transformMyRestApiErrorsToAnObject(error));
                        //             actions.setStatus({ msg: 'Set some arbitrary status or data' });
                        //           }
                        //     );
                        // }}
                        >
                            {({
                                handleSubmit,
                                handleChange,
                                handleBlur,
                                values,
                                touched,
                                isValid,
                                errors
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
                                                    isInvalid={!!errors.fullName}
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
                                                    isInvalid={!!errors.email}
                                                />
                                                <Form.Control.Feedback type="valid">{isValid}</Form.Control.Feedback>
                                                <Form.Control.Feedback type="invalid">
                                                    {errors.email}
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
                                                isInvalid={!!errors.address}
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
                                                isInvalid={!!errors.address2}
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
                                                    isInvalid={!!errors.city}
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
                                                    isInvalid={!!errors.state}
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
                                                    isInvalid={!!errors.zip}
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

                                        <Button type="submit" data-zip={values.zip} data-fullname={values.fullName} data-charityname={values.charityName} onClick={this.addDonation}>Proceed</Button>
                                    </Form>
                                )}
                        </Formik>
                    </Col>
                </Row>
            </Container >
        );
    }
    // }
};

export default Donate;