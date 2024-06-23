import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import { randomMealGenrator } from '../services/apiCalls';

const MealGenerator = ({ favourites, addToFavorites, removeFromFavorites }) => {
  const [meal, setMeal] = useState(null);

  const generateRandomMeal = async () => {
    const response =  await randomMealGenrator();
    setMeal(response.meals[0]);
  };

  const isFavourite = (mealId) => {
    return favourites.some(fav => fav.idMeal === mealId);
  };

  const handleFavoriteClick = (meal) => {
    if (isFavourite(meal.idMeal)) {
      removeFromFavorites(meal.idMeal);
    } else {
      addToFavorites(meal);
    }
  };

  return (
    <div className="container">
      <h1>Random Meal Generator</h1>
      <button className="generate-button" onClick={generateRandomMeal}>Generate Random Meal</button>
      {meal && (
        <div className="meal-card">
          <img src={meal.strMealThumb} alt={meal.strMeal} />
          <h2>{meal.strMeal}</h2>
          <button onClick={() => handleFavoriteClick(meal)}>
            <FontAwesomeIcon icon={isFavourite(meal.idMeal) ? solidHeart : regularHeart} />
            Add to Favourites
          </button>
        </div>
      )}
    </div>
  );
}

export default MealGenerator;
