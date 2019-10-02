import React from "react";
// import { Link } from "react-router-dom";
import "./style.css";
import { Navbar, NavItem, NavDropdown, MenuItem, Nav, Form, FormControl, Button } from 'react-bootstrap';


function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Awesome Project</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/donate">Donate</Nav.Link>
          <NavDropdown title="My Account" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">My Dashboard</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">My profile</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Log Out</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;