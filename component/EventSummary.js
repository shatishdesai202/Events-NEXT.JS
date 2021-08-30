import React from "react";
import classes from "./eventSummary.module.css";

const EventSummary = ({ eventSummary }) => {
  console.log("eventSummary", eventSummary);
  const { title, date, description, image, isFeatured, location } =
    eventSummary;

  return (
    <div className={classes.body}>
      <div className={classes.header}>{title}</div>
      <div className={classes.detail_container}>
        <img className={classes.image} src={"/" + image} />
        <div className={classes.info_container}>
          <h4>{description}</h4>
          <span>{date}</span>
          <address>{location}</address>
          <span>{isFeatured}</span>
        </div>
      </div>
    </div>
  );
};

export default EventSummary;
