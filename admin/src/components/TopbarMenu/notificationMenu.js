import React, { Component } from "react";
import { DropdownButton, Dropdown, Badge } from "react-bootstrap/";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

export default class notificationMenu extends Component {
  render() {
    return (
      <DropdownButton
        id="dropdown-basic-button"
        className="notification-icon"
        title={
          <div>
            <FontAwesomeIcon icon={faBell} />
            <Badge pill variant="danger">
              10
            </Badge>{" "}
          </div>
        }
      >
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </DropdownButton>
    );
  }
}
