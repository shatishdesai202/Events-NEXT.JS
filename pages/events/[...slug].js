import { useRouter } from "next/dist/client/router";
import { getFilteredEvents } from "../../dummy-data";
import EvenList from "../../component/EventList";

const Slug = () => {
  const router = useRouter();
  const filteredData = router.query.slug;

  if (!filteredData) {
    return <p>Loading...</p>;
  }

  const filteredYear = filteredData[0];
  const filteredMonth = filteredData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth > 12 ||
    numMonth < 1
  ) {
    return <p>Invalid Filter.. Please adjust Your Value!!</p>;
  }

  const filteredEvent = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if (!filteredEvent || filteredEvent.length === 0) {
    return <p>No Events Found For The Chosen Filter!</p>;
  }

  return (
    <div>
      <EvenList allEvent={filteredEvent} />
    </div>
  );
};

export default Slug;
