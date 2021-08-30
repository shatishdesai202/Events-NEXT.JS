import { useRouter } from "next/router";
import { getEventByID } from "../../dummy-data";
import EventSummary from "../../component/EventSummary";

const EventId = () => {
  const router = useRouter();
  const { eventId } = router.query;
  const event = getEventByID(eventId);

  if (!event) {
    return <h1>No Event Found !!</h1>;
  }

  return (
    <div>
      <EventSummary eventSummary={event} />
    </div>
  );
};

export default EventId;
