import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap/";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";

export default class index extends Component {
  render() {
    return (
      <React.Fragment>
        <Container fluid>
          <Row>
            <Col className="">
              <Topbar />
            </Col>
          </Row>
          <Row>
            <Col className="content-col-left">
              <Sidebar />
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}
