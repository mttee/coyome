import React, { Component } from "react";
import events from "./events";
import { Calendar, Views, momentLocalizer } from "react-big-calendar";
import TollbarCustom from "./ToolbarCustom";
import EventCustom from "./EventCustom"
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import NewEvent from './NewEvent';
import moment from "moment";

const DragAndDropCalendar = withDragAndDrop(Calendar);
const localizer = momentLocalizer(moment);

export default class Schedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: events,
      displayDragItemInCell: true,
    };

    this.moveEvent = this.moveEvent.bind(this);
    this.newEvent = this.newEvent.bind(this);
  }

  handleDragStart = (event) => {
    this.setState({ draggedEvent: event });
  };

  dragFromOutsideItem = () => {
    return this.state.draggedEvent;
  };

  onDropFromOutside = ({ start, end, allDay }) => {
    const { draggedEvent } = this.state;

    const event = {
      id: draggedEvent.id,
      title: draggedEvent.title,
      start,
      end,
      allDay: allDay,
    };

    this.setState({ draggedEvent: null });
    this.moveEvent({ event, start, end });
  };

  moveEvent = ({ event, start, end, isAllDay: droppedOnAllDaySlot }) => {
    const { events } = this.state;

    let allDay = event.allDay;

    if (!event.allDay && droppedOnAllDaySlot) {
      allDay = true;
    } else if (event.allDay && !droppedOnAllDaySlot) {
      allDay = false;
    }

    const nextEvents = events.map((existingEvent) => {
      return existingEvent.id === event.id
        ? { ...existingEvent, start, end }
        : existingEvent;
    });

    this.setState({
      events: nextEvents,
    });

    // alert(`${event.title} was dropped onto ${updatedEvent.start}`)
  };

  resizeEvent = ({ event, start, end }) => {
    const { events } = this.state;

    const nextEvents = events.map((existingEvent) => {
      return existingEvent.id === event.id
        ? { ...existingEvent, start, end }
        : existingEvent;
    });

    this.setState({
      events: nextEvents,
    });

    //alert(`${event.title} was resized to ${start}-${end}`)
  };

  newEvent(event) {
    // let idList = this.state.events.map(a => a.id)
    // let newId = Math.max(...idList) + 1
    // let hour = {
    //   id: newId,
    //   title: 'New Event',
    //   allDay: event.slots.length === 1,
    //   start: event.start,
    //   end: event.end,
    // }
    // this.setState({
    //   events: this.state.events.concat([hour]),
    // })

    this.refs.child.handleShow();
    
  }

  onSelectEvent(pEvent) {
    const r = window.confirm("Would you like to remove this event?");
    if (r === true) {
      this.setState((prevState, props) => {
        const events = [...prevState.events];
        const idx = events.indexOf(pEvent);
        events.splice(idx, 1);
        return { events };
      });
    }
  }

  render() {
    return (
      <div className="calendar-schedule">
        <DragAndDropCalendar
          selectable
          localizer={localizer}
          events={this.state.events}
          onEventDrop={this.moveEvent}
          resizable
          onEventResize={this.resizeEvent}
          onSelectSlot={this.newEvent}
          onDragStart={console.log}
          defaultView={Views.MONTH}
          defaultDate={new Date(2020, 3, 12)}
          popup={true}
          dragFromOutsideItem={
            this.state.displayDragItemInCell ? this.dragFromOutsideItem : null
          }
          onDropFromOutside={this.onDropFromOutside}
          handleDragStart={this.handleDragStart}
          onSelectEvent={(event) => this.onSelectEvent(event)}
          components={{
            toolbar: TollbarCustom,
            event: EventCustom
          }}
        />
        <NewEvent ref="child"/>
      </div>
    );
  }
}
