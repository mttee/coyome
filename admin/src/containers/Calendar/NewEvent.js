import React, { useState, Component } from "react";
import { Button, Modal, Form } from "react-bootstrap/";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave, faTimes } from "@fortawesome/free-solid-svg-icons";

export default class NewEvent extends Component {
  s;
  constructor(props) {
    super(props);
    this.state = { show: false };
  }
  handleClose = () => this.setState({ show: false });
  handleShow = () => this.setState({ show: true });

  render() {
    return (
      <Modal show={this.state.show} onHide={this.handleClose} centered>
        <Modal.Header>
          <Modal.Title>New Event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Event Name</Form.Label>
            <Form.Control type="text" size="sm" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Event Type</Form.Label>
            <Form.Control size="sm" as="select">
              <option>Danger</option>
              <option>Warning</option>
              <option>Success</option>
              <option>Primary</option>
              <option>Info</option>
            </Form.Control>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={this.handleClose}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
