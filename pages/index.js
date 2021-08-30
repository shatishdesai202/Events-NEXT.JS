import { useRouter } from "next/router";
import { getAllEvent } from "../dummy-data";
import EventList from "../component/EventList";
import EventSearch from "../component/EventSearch";

export default function Home() {
  const allEvent = getAllEvent();
  const router = useRouter();

  const findEventHandler = (year, month) => {
    const fullPath = `events/${year}/${month}`;
    router.push(fullPath);
  };
  return (
    <div>
      <EventSearch onSearch={findEventHandler} />
      <EventList allEvent={allEvent} />
    </div>
  );
}
