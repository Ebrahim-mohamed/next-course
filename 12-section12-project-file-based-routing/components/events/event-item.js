import Link from "next/link";
import classes from "./event-item.module.css";
import Button from "../ui/button";
import DateIcon from "../icons/date";
import LocationIcon from "../icons/location";
import ArrowRight from "../icons/right";
export default function EventItem(prop) {
  const event = prop.event;
  const humanReadebleDate = new Date(event.date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formatedlocation = event.location.replace(",", "\n");
  return (
    <li className={classes.item}>
      <img src={"/" + event.image} alt="" />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{event.title}</h2>
          <div className={classes.date}>
            <DateIcon />
            <time>{humanReadebleDate}</time>
          </div>
          <div className={classes.address}>
            <LocationIcon />
            <address>{formatedlocation}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={`/events/${event.id}`}>
            <span>Explore Event</span>
            <span className={classes.icon}>
              <ArrowRight />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}
