import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap/";
import {connect} from 'react-redux'
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";

import Profile from "../../containers/UserManager/Profile"

class index extends Component {
  render() {
    return (
      <React.Fragment>
        <Container fluid>
          <Row>
            <Col className="nav-top">
              <Topbar />
            </Col>
          </Row>
          <Row>
            <Col className={`${this.props.isToggle? 'minimenu' :''} content-col-left`}>
              <Sidebar />
            </Col>
            <Col>
              <Profile/>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isToggle: state.Layout.sidebarToggle
  }
}

export default connect(mapStateToProps)(index)