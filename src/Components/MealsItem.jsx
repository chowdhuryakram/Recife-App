import React from "react";
import { NavLink } from "react-router-dom";

const MealsItem = ({ mealItemProps }) => {
  console.log(mealItemProps);

  return (
    <div className="grid grid-cols-3 gap-8 mx-3 sm:mx0">
      {!mealItemProps
        ? ""
        : mealItemProps.map((currentItem) => {
            return (
              <div className=" py-4">
                <div>
                  <img
                    className="rounded mb-5"
                    src={currentItem.strMealThumb}
                    alt=""
                  />
                  <p>{currentItem.strMeal}</p>
                  <h2 className="mb-4">{currentItem.strCategory}</h2>
                  <NavLink to={`/${currentItem.idMeal}`}>
                    <button className="bg-green-600 py-2 px-5 text-white rounded">
                      Receipe
                    </button>
                  </NavLink>
                </div>
              </div>
            );
          })}
    </div>
  );
};

export default MealsItem;
