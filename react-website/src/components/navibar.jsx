import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const Navibar = () => {
  return (
    <Navbar className="p-2" bg="dark" variant="dark" fixed="top">
      <Navbar.Brand href="#page-top">Home</Navbar.Brand>
      <Nav className="justify-content-end ml-auto">
        <Nav.Link disabled href="#about" className="mx-1">
          About
        </Nav.Link>
        <Nav.Link disabled href="#portfolio" className="mx-1">
          Portfolio
        </Nav.Link>
        <Nav.Link disabled href="#contact" className="mx-1">
          Contact
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Navibar;
