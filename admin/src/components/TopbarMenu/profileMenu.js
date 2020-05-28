import React, { Component } from "react";
import { DropdownButton, Dropdown, Image } from "react-bootstrap/";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCog,
  faUserCircle,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";

export default class profileMenu extends Component {
  render() {
    return (
      <DropdownButton
        id="dropdown-basic-button"
        title={
          <div>
            <Image
              src="https://media-a.laodong.vn/Storage/NewsPortal/2020/3/12/790444/My-Nhan-Redvelvet5.jpg"
              roundedCircle
            />
            Admin
          </div>
        }
        size="sm"
      >
        <Dropdown.Item href="#/action-1">
          <FontAwesomeIcon icon={faUserCircle} /> Profile
        </Dropdown.Item>
        <Dropdown.Item href="#/action-2">
          <FontAwesomeIcon icon={faCog} /> Setting
        </Dropdown.Item>
        <Dropdown.Item href="#/action-3">
          <FontAwesomeIcon icon={faSignOutAlt} /> Logout
        </Dropdown.Item>
      </DropdownButton>
    );
  }
}
