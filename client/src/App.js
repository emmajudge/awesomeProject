// import React from "react";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Donate from "./pages/Donate";
import FeaturedArticles from "./pages/FeaturedArticles";
import Books from "./pages/Books";
import Header from "./components/Navbar/index";
import Charity from "./components/Charity";
import "./App.css";
import { Jumbotron, Card } from "react-bootstrap";
import Create from "./pages/Create";
import Account from "./pages/Account";
import Login from "./pages/Login";
import ImageSlides from "./components/Carousel";
import UpdateFundsJumbotron from "./components/Counter";

function App() {
  // const [user, setUsers] = useState([
  //   {
  //     // example before database info kicks in
  //     id: 0,
  //     name: "Feeding America",
  //     image:
  //       "http://seekvectorlogo.com/wp-content/uploads/2018/02/feeding-america-vector-logo.png",
  //     description:
  //       "A nationwide network of more than 200 food banks and food rescue organizations. Feeding America is the nation's leading hunger-relief charity.",
  //     website: "https://www.feedingamerica.org",
  //     liked: false
  //   }
  // ]);

  // add website routes

  const handleLikeClick = id => {
    console.log("i need to make a database call", id);
    //   change liked flag with given id
  };

  return (
    <Router>
      <div>
        <Header />
        {/* <Card className="charityapp">
          {user.map(user => (
            <Charity
              id={user.id}
              handleLike={handleLikeClick}
              liked={user.liked}
              name={user.name}
              image={user.image}
              description={user.description}
              website={user.website}
            />
          ))}
        </Card> */}
        <Switch>
          <Route exact path="/donate" component={Donate} />
          <Route exact path="/viewFeatured" component={FeaturedArticles} />
          <Route exact path="/create" component={Create} />
          <Route exact path="/mydashboard" component={Account} />
          <Route exact path="/login" component={Login} />
        </Switch>
        <ImageSlides />
        <UpdateFundsJumbotron />
      </div>
    </Router>
  );
}

export default App;
