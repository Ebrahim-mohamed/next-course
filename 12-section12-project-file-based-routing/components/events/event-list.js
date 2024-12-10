import EventItem from "./event-item";
import classes from "./event-list.module.css";
export default function EventsList(prop) {
  const events = prop.events;
  return (
    <ul className={classes.list}>
      {events.map((event) => (
        <EventItem key={event.id} event={event} />
      ))}
    </ul>
  );
}
