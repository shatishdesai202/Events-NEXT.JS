import EventItem from "./EventItem";
import classes from "./eventList.module.css";

const EventList = ({ allEvent }) => {
  return (
    <ui className={classes.event}>
      {allEvent.map((event, index) => (
        <EventItem key={index} event={event} />
      ))}
    </ui>
  );
};

export default EventList;
