import EventSearch from "../../components/events/event-search";
import { getAllEvents } from "../../data";
import EventsList from "./../../components/events/event-list";
export default function Events() {
  const events = getAllEvents();
  return (
    <>
      <EventSearch />
      <EventsList events={events} />
    </>
  );
}
