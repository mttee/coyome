import React, { Component } from "react";
import { DropdownButton, Dropdown, Image } from "react-bootstrap/";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCog,
  faUserCircle,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";

import {LocalStorageKeys} from "../../constants/index"
import { createHashHistory } from 'history'

export const history = createHashHistory()

export default class profileMenu extends Component {

  Logout = () => {
    localStorage.removeItem(LocalStorageKeys.ACCESS_TOKEN);
    history.push("/");
  } 

  render() {
    return (
      <DropdownButton
        id="dropdown-basic-button"
        title={
          <div>
            <Image
              src="https://media-a.laodong.vn/Storage/NewsPortal/2020/3/12/790444/My-Nhan-Redvelvet5.jpg"
              onError={(e)=>{e.target.onerror = null; e.target.src="/img/default/default-avatar.jpg"}}
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
        <Dropdown.Item onClick={ this.Logout}>
          <FontAwesomeIcon icon={faSignOutAlt} /> Logout
        </Dropdown.Item>
      </DropdownButton>
    );
  }
}
