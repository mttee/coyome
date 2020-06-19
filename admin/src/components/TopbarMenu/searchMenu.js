import React, { Component } from "react";
import { InputGroup, FormControl, Button, DropdownButton} from "react-bootstrap/";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default class searchMenu extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="search-desktop">
          <InputGroup className="nav-search">
            <FormControl placeholder="Search..." />
            <InputGroup.Append>
              <Button variant="outline-secondary">
                <FontAwesomeIcon icon={faSearch} />
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </div>

        <div className="search-mobile">
          <DropdownButton
            id="dropdown-basic-button"
            title={
              <FontAwesomeIcon icon={faSearch} />
            }
          >
            <InputGroup className="nav-search-mobile">
            <FormControl placeholder="Search..." />
            <InputGroup.Append>
              <Button variant="outline-secondary">
                <FontAwesomeIcon icon={faSearch} />
              </Button>
            </InputGroup.Append>
          </InputGroup>
          </DropdownButton>
        </div>
      </React.Fragment>
    );
  }
}
