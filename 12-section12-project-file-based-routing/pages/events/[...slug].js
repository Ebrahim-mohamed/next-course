import { useRouter } from "next/router";
import { getFilteredEvents } from "../../data";
import ResultsTitle from "./../../components/events/results-title";
import EventsList from "../../components/events/event-list";
export default function FilteredEvents() {
  const router = useRouter();

  const year = router.query.slug[0];
  const month = router.query.slug[1];
  const events = getFilteredEvents(+year, +month);
  if (events.length === 0) {
    return <p>no events in this date</p>;
  }
  const date = new Date(+year, +month - 1);
  return (
    <>
      <ResultsTitle date={date} />
      <EventsList events={events} />
    </>
  );
}
