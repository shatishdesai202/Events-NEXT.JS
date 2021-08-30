import React from "react";
import Link from "next/link";

import classes from "./eventItem.module.css";

const EventItem = ({ event }) => {
  const { id, title, description, location, date, image, isFeatured } = event;

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const formattedAddress = location.replace(", ", "\n");

  const exploreLink = `/events/${id}`;

  return (
    <li className={classes.li}>
      <div className={classes.image_container}>
        <img className={classes.image} src={"/" + image} />
      </div>
      <div className={classes.containt_container}>
        <div className={classes.detail_container}>
          <h1>{title}</h1>
          <span>{description}</span>
          <address>{formattedAddress}</address>
          <span>{humanReadableDate}</span>
          <span>{isFeatured}</span>
          <div>
            <button>
              <Link href={exploreLink}>Hit me</Link>
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
