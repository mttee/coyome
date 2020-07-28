import React, { Component } from "react";
import { Badge } from "react-bootstrap/";

export default class EventCustom extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <span>{this.props.title}</span>
        <span className="float-right mr-3">
          <i className="fa fa-window-close"></i>
        </span>
      </div>
    );
  }
}
