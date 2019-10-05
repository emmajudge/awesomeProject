import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { SocialIcon } from 'react-social-icons';
import "./style.css";
class BottomNav extends Component {
  state = {};
  render() {
    return (
      <div>
        <Nav className="justify-content-center" activeKey="/home">
          <Nav.Item>
            <Nav.Link href="/home">Contact us</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="link-1">Legal Terms</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="link-2">Link</Nav.Link>
          </Nav.Item>
          <Nav.Item>
          </Nav.Item>
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