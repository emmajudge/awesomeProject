import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";
import { SocialIcon } from 'react-social-icons';
import "./style.css";
class BottomNav extends Component {
  state = {};
  render() {
    return (
      <div>
        <Nav className="justify-content-center" activeKey="/home">
        </Nav>
        <Nav className="justify-content-center">
          <div className="social-icons"><SocialIcon fgColor="white" url="http://twitter.com/" /></div>
          <div className="social-icons"><SocialIcon fgColor="white" url="http://facebook.com/" /></div>
          <div className="social-icons"><SocialIcon fgColor="white" url="http://linkedin.com/" /></div>
          <div className="social-icons"><SocialIcon fgColor="white" url="http://instagram.com/" /></div>
        </Nav>
        
      </div>
    );
  }
}
export default BottomNav;