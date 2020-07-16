import React, { Component } from "react";
import { DropdownButton, Dropdown} from "react-bootstrap/";
import Badge from '@material-ui/core/Badge';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import LinkIcon from '@material-ui/icons/Link';
import DateRangeIcon from '@material-ui/icons/DateRange';
import SettingsIcon from '@material-ui/icons/Settings';
import MailIcon from '@material-ui/icons/Mail';

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
        <div className="notification-list-item">
          <Dropdown.Item href="#/action-1" className="notification-item">
            <ListItem>
            <ListItemAvatar>
            <Avatar variant="rounded">
              <LinkIcon />
            </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Launch Admin" secondary="Just see my new admin!" />
          </ListItem>
          </Dropdown.Item>

          <Dropdown.Item href="#/action-1" className="notification-item">
            <ListItem>
            <ListItemAvatar>
            <Avatar variant="rounded">
              <DateRangeIcon />
            </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Event Today" secondary="Just a reminder that you have event." />
          </ListItem>
          </Dropdown.Item>

          <Dropdown.Item href="#/action-1" className="notification-item">
            <ListItem>
            <ListItemAvatar>
            <Avatar variant="rounded">
              <SettingsIcon />
            </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Settings" secondary="You can customize this template as you want." />
          </ListItem>
          </Dropdown.Item>

          <Dropdown.Item href="#/action-1" className="notification-item">
            <ListItem>
            <ListItemAvatar>
            <Avatar variant="rounded">
              <MailIcon />
            </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Check Email" secondary="Just check my admin!" />
          </ListItem>
          </Dropdown.Item>
        </div>

        <a href="#/notification" className="notification-bottom align-self-end">View All</a>
      </DropdownButton>
    );
  }
}
