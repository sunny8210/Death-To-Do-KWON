import React from "react";
import logo from '../images/logo.png'
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import Button from 'react-bootstrap/Button'

export default function Navtop() {
  return (
      <Navbar bg="transparent" expand="lg">
        <Container>
          <Navbar.Brand href="#home"><img src={logo} alt=""/></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#tokenomics">Tokenomics</Nav.Link>
              <Nav.Link href="#roadmap">Roadmap</Nav.Link>
              <Nav.Link href="#audit">Audit</Nav.Link>
              <Nav.Link><Button variant="outline-warning">Staking App</Button></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}
