import classes from "./MealsSummary.module.css";
import mealsImage from "../../assets/download.png";
const MealsSummary = (props) => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Food, Delivered To You</h2>
      <p>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
         <div className={classes["main-image"]}>
        <img src={mealsImage} alt="Chef"/>
      </div>
      </p>
    </section>
  );
};

export default MealsSummary;
