import React, { Component } from "react";
import { DropdownButton, Dropdown} from "react-bootstrap/";
import Badge from '@material-ui/core/Badge';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

export default class notificationMenu extends Component {
  render() {
    return (
      <DropdownButton
        id="dropdown-basic-button"
        className="notification-icon"
        title={
          <Badge color="secondary" variant="dot">
            <FontAwesomeIcon icon={faBell} />
          </Badge>
        }
      >
        <div className="notification-title">
          Notifications
          <span>10</span>
        </div>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </DropdownButton>
    );
  }
}
