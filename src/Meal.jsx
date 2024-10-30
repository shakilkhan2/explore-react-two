export default function Meal({ meal }) {
  const styleMeal = {
    border: "1px solid purple",
    borderRadius: "10px",
    width: "20rem",
    padding: "1rem",
    margin: "2rem",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
  };

  const buttoStyle = {
    backgroundColor: "purple",
    width: "100%",
  };

  return (
    <>
      <div style={styleMeal}>
        <h3>{meal.strCategory}</h3>
        <p style={{ textAlign: "justify" }}>{meal.strCategoryDescription}</p>
        <img src={meal.strCategoryThumb} alt={meal.strCategory} />
        <button style={buttoStyle}>Buy Now</button>
      </div>
    </>
  );
}
