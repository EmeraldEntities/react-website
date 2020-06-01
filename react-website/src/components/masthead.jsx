import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const Masthead = () => {
  return (
    <header className="masthead">
      <Container fluid>
        <Row className="mt-5">
          <Col>
            <Image roundedCircle src="./assets/emerald.png" alt="" />
          </Col>
        </Row>
        <Row>
          <Col>
            <h1>Hi.</h1>
            <h3>I'm Joseph Wang.</h3>
            <p>I play games and stuff</p>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Masthead;
