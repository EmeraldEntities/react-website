import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Masthead = () => {
  return (
    <header className="masthead">
      <Container fluid>
        <Row>
          <img src="./public/assets/emerald.png" className="mb-6" alt="" />
          <Col>
            <h1>Hi.</h1>
            <p>I'm Joseph Wang</p>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Masthead;
