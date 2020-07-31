import React from "react";
import { Container, Row, Col } from "react-bootstrap/";
import Sidebar from "./sidebar/Chat_Sidebar";

export default function Chat() {
  return (
    <Container fluid>
      <Row>
        <Col lg="3">
          <Sidebar />
        </Col>
        <Col lg="9">1 of 1</Col>
      </Row>
    </Container>
  );
}
