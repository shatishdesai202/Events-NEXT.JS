const DUMMY_EVENTS = [
  {
    id: "e1",
    title: "Programming for everyone",
    description: "yeah !! everyone can learn code.. ",
    location: "surat, gujarat, india",
    date: "2021-05-29",
    image: "images/coding.jpg",
    isFeatured: false,
  },
  {
    id: "e2",
    title: "Programming for non-technical backgroud",
    description: "yeah !! everyone can learn code.. ",
    location: "surat, gujarat, india",
    date: "2021-05-03",
    image: "images/technical-coding.jpg",
    isFeatured: true,
  },
  {
    id: "e3",
    title: "Introvert Networking",
    description: "Lots of help for introvert people. ",
    location: "somewhere in india",
    date: "2021-06-04",
    image: "images/introvert.jpg",
    isFeatured: false,
  },
];

export function getFeaturedEvents() {
  return DUMMY_EVENTS.filter((event) => event.isFeatured);
}

export function getAllEvent() {
  return DUMMY_EVENTS;
}

export function getEventByID(id) {
  return DUMMY_EVENTS.find((event) => event.id === id);
}

export function getFilteredEvents(dataFilter) {
  const { year, month } = dataFilter;

  let filteredEvent = DUMMY_EVENTS.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });
  return filteredEvent;
}
