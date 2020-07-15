import React, { Component } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap/";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default class messageMenu extends Component {
  render() {
    return (
      <DropdownButton
        id="dropdown-basic-button"
        className="envelopeIcon"
        title={
          <FontAwesomeIcon icon={faEnvelope} />
        }
      >
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </DropdownButton>
    );
  }
}
