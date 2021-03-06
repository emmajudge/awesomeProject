import React from "react";
import "./style.css";
import { Navbar, NavItem, NavDropdown, MenuItem, Nav, Form, FormControl, Button } from 'react-bootstrap';


function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">Awesome Project</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/donate">Donate<i class="fas fa-donate"></i></Nav.Link>
          <NavDropdown title="My Account" id="basic-nav-dropdown">
            <NavDropdown.Item href="/mydashboard">My Dashboard</NavDropdown.Item>
            <NavDropdown.Item href="/login">Log In</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;