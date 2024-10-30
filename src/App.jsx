import circleLogo from "./assets/circle.png";
import "./App.css";
import Meals from "./Meals";
import Meal from "./Meal";


function App() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          {/* <img src={viteLogo} className="logo" alt="Vite logo" /> */}
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={circleLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Circle</h1>
      <Meals />
      {/* <Meal/> */}
    </>
  );
}

export default App;
