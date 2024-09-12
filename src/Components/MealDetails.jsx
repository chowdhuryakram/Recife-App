import { useState } from "react";
import { useParams } from "react-router-dom";
const MealDetails = () => {
  const { mealid } = useParams();
  const [details, setDetails] = useState();

  const getDetails = async () => {
    const get = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`
    );
    const jsonData = await get.json();
    console.log(jsonData.meals[0]);
    setDetails(jsonData.meals[0]);
  };
  if (details != "") {
    getDetails();
  }
  return (
    <div>
      {!details ? (
        "Data Not Found!"
      ) : (
        <div>
          <h1 className="text-2xl sm:text-4xl mt-10 ml-3 sm:ml-0 pb-6">
            Receipe Details Here!
          </h1>
          <div className="flex--row sm:flex mx-3 sm:mx-0 gap-10">
            <img
              className="rounded w-[450px] h-[350px] sm:w-[500px] sm:h-[550px] object-cover"
              src={details.strMealThumb}
              alt=""
            />

            <div className="mt-5">
              <button className="text-3xl mb-3">{details.strMeal}</button>
              <h2>{details.strInstructions}</h2>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MealDetails;
