import { useState } from "react";
import MealsItem from "./MealsItem";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState();
  const [input, setInput] = useState("");
  const [sms, setSms] = useState("");
  const manageInput = (e) => {
    setInput(e.target.value);
  };

  const mealApi = async () => {
    if (input === "") {
      setSms("Inter Your Favourite Food");
    } else {
      const get = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`
      );
      const jsonData = await get.json();
      setData(jsonData.meals);
      console.log(data);
      setSms("");
    }
  };

  return (
    <>
      <h1 className="text-2xl sm:text-4xl sm:text-center mt-10 ml-3 sm:ml-0 pb-6">
        Receipe App
      </h1>
      <div className="block sm:flex sm:items-center sm:justify-center sm:gap-2 mx-3 mb-10">
        <input
          onChange={manageInput}
          className="sm:w-[420px] w-[90%] py-3 px-3 rounded outline-none bg-gray-800"
          type="text"
          placeholder="Insert your dishes"
        />

        <button
          onClick={mealApi}
          className="py-3 mt-2 sm:mt-0 px-5 bg-green-700 rounded cursor-pointer text-white"
        >
          Search
        </button>
      </div>
      <h3 className="text-center">{sms}</h3>
      <MealsItem mealItemProps={data} />
    </>
  );
};

export default Home;
