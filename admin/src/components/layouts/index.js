import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap/";
import {connect} from 'react-redux'
import {Switch, Route } from "react-router-dom";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import routes from "../../routes";

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
              <div className="col-right-content">
                <Switch>
                    {routes.map((route, index) => (
                      <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        children={<route.component/>}
                      />
                    ))}
                </Switch>
              </div>
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