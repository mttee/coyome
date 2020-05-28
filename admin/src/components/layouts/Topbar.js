import React, { Component } from "react";
import { Navbar, Nav} from "react-bootstrap/";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import SearchMenu from "../TopbarMenu/searchMenu";
import ProfileMenu from "../TopbarMenu/profileMenu";
import NotificationMenu from "../TopbarMenu/notificationMenu";
import MessageMenu from '../TopbarMenu/messageMenu';

export default class Topbar extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="topbar">
          <Navbar expand="lg" bg="dark" variant="dark">
            <Navbar.Brand className="topbar-menu" href="#home">Coyome</Navbar.Brand>
            <Nav className="mr-auto h-auto">
              <div className="topbar-icon-menu">
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
