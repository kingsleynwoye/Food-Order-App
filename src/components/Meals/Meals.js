import { Fragment } from "react";

import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvalaibleMeals";

const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AvailableMeals />
    </Fragment>
  );
};

export default Meals;
