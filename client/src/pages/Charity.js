import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Books from "./pages/Books";
import Header from "./components/Navbar/index";
import Charity from "./components/Charity";
import "./App.css";
import { Jumbotron } from "react-bootstrap";
import { Container } from "../components/Grid";
import API from "../utils/API";

class Charity extends Component {
  state = {
          id: 0,
      name: "Feeding America",
      image:
        "http://seekvectorlogo.com/wp-content/uploads/2018/02/feeding-america-vector-logo.png",
      description:
        "A nationwide network of more than 200 food banks and food rescue organizations. Feeding America is the nation's leading hunger-relief charity.",
      website: "https://www.feedingamerica.org",
      liked: false
  }
  checkLogin = event => {
    event.preventDefault();
    API.getAmount();
  }
  render() {
      return (
          <Container>
              {/* <Chairty></Chairty> */}
                      <div className= "charityapp">
            {/* <h5 onClick={() => handleLike(id)}>{liked ? 'site is liked' : 'site is not liked'}</h5> */}
            <p>{this.state.website}</p>
            <h1>{name}</h1>
            <p>{image}</p>
            <p>{description}</p>
            <h3>{website}</h3>
            <button onClick={this.getAmount}>Donate Now</button>
        </div>
          </Container>
      )
  }

}

export default Charity;