import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Donate from "./pages/Donate";
import FeaturedArticles from "./pages/FeaturedArticles";
import Header from "./components/Navbar/index";
import Charity from "./pages/Charity";
import "./App.css";
import Create from "./pages/Create";
import Account from "./pages/Account";
import Login from "./pages/Login";
import ImageSlides from "./components/Carousel";
import UpdateFundsJumbotron from "./components/Counter";
import BottomNav from "./components/Footer";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/donate" component={Donate} />
          <Route exact path="/viewFeatured" component={FeaturedArticles} />
          <Route exact path="/create" component={Create} />
          <Route exact path="/mydashboard" component={Account} />
          <Route exact path="/login" component={Login} />
        </Switch>
        <ImageSlides />
        <UpdateFundsJumbotron />
        <Charity/>
        <BottomNav />
      </div>
    </Router>
  );
}

export default App;
