import "./App.css";
import Home from "./Components/Home";
import { Route, Routes } from "react-router-dom";
import MealDetails from "./Components/MealDetails";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:mealid" element={<MealDetails />} />
      </Routes>
    </>
  );
}

export default App;
