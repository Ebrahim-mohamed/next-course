import { useRef } from "react";
import Button from "../ui/button";
import classes from "./events-search.module.css";
import { useRouter } from "next/router";
export default function EventSearch() {
  const year = useRef();
  const month = useRef();
  const route = useRouter();

  function handelSubmit(e) {
    e.preventDefault();
    const neededYear = year.current.value;
    const neededMonth = month.current.value;
    route.replace(`/events/${neededYear}/${neededMonth}`);
  }
  return (
    <form onSubmit={handelSubmit} className={classes.form}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor="year">year</label>
          <select id="year" ref={year}>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor="month">year</label>
          <select id="month" ref={month}>
            <option value="1">jan</option>
            <option value="2">fab</option>
            <option value="3">mar</option>
            <option value="4">april</option>
            <option value="5">may</option>
            <option value="6">june</option>
            <option value="7">july</option>
            <option value="8">aug</option>
            <option value="9">sept</option>
            <option value="10">oct</option>
            <option value="11">nov</option>
            <option value="12">des</option>
          </select>
        </div>
      </div>
      <Button>Find Events</Button>
    </form>
  );
}
