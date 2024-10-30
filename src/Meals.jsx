import { useEffect } from "react";
import { useState } from "react";
import Meal from "./Meal";

const gridContainerStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
  gap: "1rem", // Space between items
  margin: "2rem",
};

export default function Meals() {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => res.json())
      .then((data) => setMeals(data.categories));
  }, []);

  return (
    <>
      <h2>There is {meals.length} meals.</h2>
      <div >
        {meals.map((meal) => (
          //   console.log(meal)
          <Meal key={meal.idCategory} meal={meal} />
        ))}
      </div>
    </>
  );
}
