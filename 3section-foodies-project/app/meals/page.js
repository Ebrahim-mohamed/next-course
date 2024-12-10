import { Suspense } from "react";
import Link from "next/link";
import classes from "./page.module.css";
import MealsGrid from "@/components/mealsGrid";
import getMeals from "@/lib/meals";

export const metadata = {
  title: "all meals",
  description: "Browse the delicios meals with our vibrant community.",
};

async function MealsFetched() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}

export default function Meals() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it youself , it is easy and fun!
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">share your favorite Recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense
          fallback={<p className={classes.loading}>Fetching meals ...</p>}
        >
          <MealsFetched />
        </Suspense>
      </main>
    </>
  );
}
