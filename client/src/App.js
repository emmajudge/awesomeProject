import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Donate from "./pages/Donate";
import FeaturedArticles from "./pages/FeaturedArticles";
import Books from "./pages/Books";
import Header from "./components/Navbar/index";
import Charity from "./pages/Charity";
import "./App.css";
import { Jumbotron, Card } from "react-bootstrap";
import ImageSlides from "./components/Carousel";


function App() {
  return (
    <Router>
      <div>
        <Header />
        <ImageSlides />
        <Switch>
          <Route exact path="/donate" component={Donate} />
          <Route exact path="/viewFeatured" component={FeaturedArticles} />
          <Route exact path="/books" component={Books} />
          <Route exact path="/" component={Charity} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
