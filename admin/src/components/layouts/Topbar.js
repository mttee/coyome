import React, { Component } from "react";
import { connect } from 'react-redux';
import { Navbar, Nav} from "react-bootstrap/";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import SearchMenu from "../TopbarMenu/searchMenu";
import ProfileMenu from "../TopbarMenu/profileMenu";
import NotificationMenu from "../TopbarMenu/notificationMenu";
import MessageMenu from '../TopbarMenu/messageMenu';
import {sidebarToggle} from '../../store/actions'

class Topbar extends Component {
  constructor(props){
    super(props);
  }

  sidebarToggle(){
    this.props.sidebarToggle();
  }


  render() {
    return (
      <React.Fragment>
        <div className="topbar">
          <Navbar expand="lg" bg="dark" variant="dark">
            <Navbar.Brand className="topbar-menu" href="#home">Coyome</Navbar.Brand>
            <Nav className="mr-auto h-auto">
              <div className="topbar-icon-menu" onClick={this.sidebarToggle.bind(this)}>
                <FontAwesomeIcon icon={faBars} /> 
              </div>
              <SearchMenu />
            </Nav>
            <Nav>
              <MessageMenu/>
              <NotificationMenu />
              <ProfileMenu />
            </Nav>
          </Navbar>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    state: state
  }
}

export default connect(mapStateToProps, {sidebarToggle})(Topbar);