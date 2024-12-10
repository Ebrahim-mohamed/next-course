import { useRouter } from "next/router";
import { getEventById } from "../../data";
import { Fragment } from "react";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
export default function EventId() {
  const route = useRouter();
  const eventId = route.query.eventId;
  const event = getEventById(eventId);
  if (!event) {
    return <p>there is no events</p>;
  }
  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
}
