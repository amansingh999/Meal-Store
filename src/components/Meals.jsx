import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';

const Meals = ({ favourites, addToFavorites, removeFromFavorites }) => {
  const { category } = useParams();
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
      .then((response) => {
        setMeals(response.data.meals);
      })
      .catch((error) => console.error('Error fetching meals:', error));
  }, [category]);

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
    <div className='container'>
      <h1>{category} Meals</h1>
      <ul>
        {meals.map((meal) => (
          <li key={meal.idMeal}>
            <img src={meal.strMealThumb} alt={meal.strMeal} />
            <h2>{meal.strMeal}</h2>
            <button onClick={() => handleFavoriteClick(meal)}>
              <FontAwesomeIcon
                icon={isFavourite(meal.idMeal) ? solidHeart : regularHeart}
              />
              Add to Favourites
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Meals;
