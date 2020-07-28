import React, { Component } from "react";
import { connect } from "react-redux";
import MetisMenu from "react-metismenu-router";
import menuCofig from "../../config/menu.config";

class Sidebar extends Component {
  render() {
    return (
      <React.Fragment>
        <div
          className={`${
            this.props.isToggle ? "minimenu" : ""
          } sidebar-auto-scroll`}
        >
          <MetisMenu
            content={menuCofig.menu}
            className="side-bar"
            activeLinkFromLocation
          />
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isToggle: state.Layout.sidebarToggle,
  };
};

export default connect(mapStateToProps)(Sidebar);
