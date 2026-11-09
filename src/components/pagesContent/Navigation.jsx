import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

export default function Navigation(props) {
  return (
    <>
      <Navbar style={{ fontWeight: "bold" }}>
        <Container>
          <Navbar.Brand href="#home">Wion</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contacts">Contacts</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
