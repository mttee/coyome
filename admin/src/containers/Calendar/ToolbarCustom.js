import React, { useState } from "react";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";

const CustomToolbar = (toolbar) => {
  const [lableValue, setLable] = useState("month");

  const goToBack = () => {
    toolbar.onNavigate("PREV");
  };
  const goToNext = () => {
    toolbar.onNavigate("NEXT");
  };
  const goToCurrent = () => {
    toolbar.onNavigate("TODAY");
  };

  const monthView = () => {
    toolbar.onView("month");
    setLable("month");
  };
  const weekView = () => {
    toolbar.onView("week");
    setLable("week");
  };
  const dayWiew = () => {
    toolbar.onView("day");
    setLable("day");
  };

  // const label = () => {
  //   const date = moment( toolbar.date);
  //   return (
  //     <span>
  //       <b>{date.format("MMMM")}</b>
  //       <span> {date.format("YYYY")}</span>
  //     </span>
  //   );
  // };

  const goToBackYear = () => {
    let mDate = toolbar.date;
    let newDate = new Date(mDate.getFullYear() - 1, 1);
    toolbar.onNavigate("prev", newDate);
  };

  const goToNextYear = () => {
    let mDate = toolbar.date;
    let newDate = new Date(mDate.getFullYear() + 1, 1);
    toolbar.onNavigate("next", newDate);
  };

  const month = () => {
    const date = moment(toolbar.date);
    let month = date.format("MMMM");

    return <span className="rbc-toolbar-label">{month}</span>;
  };

  const year = () => {
    const date = moment(toolbar.date);
    let year = date.format("YYYY");

    return (
      <span className="rbc-btn-group">
        {/* {lableValue === "month" && (
          <button type="button" onClick={goToBackYear}>
            <span className="prev-icon">&#8249;&#8249;</span>
          </button>
        )} */}
        <span className="rbc-toolbar-label">{year}</span>
        {/* {lableValue === "month" && (
          <button type="button" onClick={goToNextYear}>
            <span className="prev-icon">&#8250;&#8250;</span>
          </button>
        )} */}
      </span>
    );
  };

  const day = () => {
    let view = lableValue;
    const date = moment(toolbar.date);
    let day;
    if (view === "day") {
      day = date.format("dddd") + " " + date.format("Do");
    }
    return <span className="rbc-toolbar-label">{day}</span>;
  };

  return (
    <div className="toolbar-container d-flex justify-content-between mb-3">
      <span className="rbc-btn-group">
        <button className="btn" type="button" onClick={goToBack}>
          <span className="prev-icon"><FontAwesomeIcon icon={faCaretLeft} /></span>
        </button>
        <button className="btn" type="button" onClick={goToCurrent}>
          <span className="next-icon">Today</span>
        </button>
        <button className="btn" type="button" onClick={goToNext}>
          <span className="next-icon"><FontAwesomeIcon icon={faCaretRight} /></span>
        </button>
      </span>

      {/* <label className="label-date d-flex align-items-center mb-0">{label()}</label> */}

      <label className="label-date d-flex align-items-center mb-0">
        <span className="mr-2">{year()}</span>
        <span className="mr-2">{month()}</span>
        <span>{day()}</span>
      </label>

      <span className="rbc-btn-group">
        <button className="btn" onClick={monthView}>
          <span className="label-filter-off">Month</span>
        </button>
        <button className="btn" onClick={weekView}>
          <span className="label-filter-off">Week</span>
        </button>
        <button className="btn" onClick={dayWiew}>
          <span className="label-filter-off">Day</span>
        </button>
      </span>
    </div>
  );
};

export default CustomToolbar;
