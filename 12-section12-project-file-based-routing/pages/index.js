import EventsList from "../components/events/event-list";
import { getFeaturedEvents } from "../data";

export default function Home() {
  const featuredEvents = getFeaturedEvents();
  console.log(featuredEvents);
  return (
    <div>
      <EventsList events={featuredEvents} />
    </div>
  );
}
