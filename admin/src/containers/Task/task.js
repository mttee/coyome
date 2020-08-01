import React from "react";
import { Draggable } from "react-beautiful-dnd";
import {Col, Row, Badge} from "react-bootstrap/";
import Avatar from '@material-ui/core/Avatar';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltUp, faDotCircle, faLongArrowAltDown, faPlus, faBug, faCog } from "@fortawesome/free-solid-svg-icons";

export default class Task extends React.Component {
  render() {
    const isDragDisabled = this.props.task.id === "task-1";
    return (
      <Draggable
        draggableId={this.props.task.id}
        index={this.props.index}
        //isDragDisabled={isDragDisabled}
      >
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            className="container-item"
            {...provided.dragHandleProps}
            {...provided.draggableProps}
            style={{
              backgroundColor: isDragDisabled
                ? "white"
                : snapshot.isDragging
                ? "lightgreen"
                : "white",
              ...provided.draggableProps.style, //gây xung đột với scss nế không dùng
            }}
          >
            <Row noGutters>
              <Col xs md="3">
                <Avatar alt="Remy Sharp" src={this.props.task.avatar}/>
              </Col>
              <Col xs md="9">
                <p className="item-title">{this.props.task.content}</p>
                <p className="item-icon mb-0">
                    <span className="text-left">{this.props.task.code}</span>
                    {(() => {
                        switch (this.props.task.type) {
                            case "New": return <span className="item-icon-new float-right ml-1"><Badge variant="success"><FontAwesomeIcon icon={faPlus}/></Badge>{' '}</span>;
                            case "Improvement": return <span className="item-icon-improvement float-right ml-1"><Badge variant="info"><FontAwesomeIcon icon={faCog}/></Badge> </span>;
                            case "Bug": return <span className="item-icon-bug float-right ml-1"><Badge variant="danger"><FontAwesomeIcon icon={faBug}/></Badge> </span>;
                        }
                    })()}
                    {(() => {
                        switch (this.props.task.priority) {
                            case "Hight": return <span className="item-icon-hight float-right"><FontAwesomeIcon icon={faLongArrowAltUp}/> </span>;
                            case "Medium": return <span className="item-icon-medium float-right"><FontAwesomeIcon icon={faDotCircle}/> </span>;
                            case "Low": return <span className="item-icon-low float-right"><FontAwesomeIcon icon={faLongArrowAltDown}/> </span>;
                        }
                    })()}
                </p>
              </Col>
            </Row>
          </div>
        )}
      </Draggable>
    );
  }
}
