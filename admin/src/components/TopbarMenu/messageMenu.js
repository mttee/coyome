import React, { Component } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap/";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import LinkIcon from '@material-ui/icons/Link';

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
        <div className="message-title">
          My Messages
          <span>5</span>
        </div>
        <div className="message-list-item">
          <Dropdown.Item href="#/action-1" className="message-item">
            <ListItem>
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" onError={(e)=>{e.target.onerror = null; e.target.src="/img/default/default-avatar.jpg"}}/>
            </ListItemAvatar>
            <ListItemText primary="Admin Team" secondary="Just see my new admin!" />
          </ListItem>
          </Dropdown.Item>
          <Dropdown.Item href="#/action-1" className="message-item">
            <ListItem>
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/2.jpg" onError={(e)=>{e.target.onerror = null; e.target.src="/img/default/default-avatar.jpg"}}/>
            </ListItemAvatar>
            <ListItemText primary="Customer" secondary="Just see my new admin!" />
          </ListItem>
          </Dropdown.Item>
          <Dropdown.Item href="#/action-1" className="message-item">
            <ListItem>
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/3.jpg" onError={(e)=>{e.target.onerror = null; e.target.src="/img/default/default-avatar.jpg"}}/>
            </ListItemAvatar>
            <ListItemText primary="User" secondary="Just see my new admin!" />
          </ListItem>
          </Dropdown.Item>
        </div>
        <a href="#/notification" className="message-bottom align-self-end">See All Messages</a>
      </DropdownButton>
    );
  }
}
