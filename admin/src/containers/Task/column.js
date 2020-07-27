import React from "react";
import Task from "./task";
import { Droppable } from "react-beautiful-dnd";

// const Container = styled.div`
//   margin: 8px;
//   border: 1px solid lightgrey;
//   border-radius: 2px;
//   width: 220px;
//   background-color: #36394c;

//   display: flex;
//   flex-direction: column;
// `;
// const Title = styled.h3`
//   padding: 8px;
//   color: white;
// `;
// const TaskList = styled.div`
//   padding: 8px;
//   transition: background-color 0.2s ease;
//   background-color: ${(props) => (props.isDraggingOver ? "skyblue" : "white")}
//   flex-grow: 1;
//   min-height: 100px;
// `;

export default class Column extends React.Component {
  render() {
    return (
      <div className="task-column">
        <div className="task-title">{this.props.column.title}</div>
        <Droppable droppableId={this.props.column.id} type="TASK">
          {(provided, snapshot) => (
            <div
              className="task-list"
              style={{backgroundColor: snapshot.isDraggingOver ? "skyblue" : "#32394e"}}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {this.props.tasks.map((task, index) => (
                <Task key={task.id} task={task} index={index} />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    );
  }
}
