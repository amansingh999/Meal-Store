import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import { getMealsList } from '../services/apiCalls';
import './styles/Menu.css';

const Meals = ({ favourites, addToFavorites, removeFromFavorites }) => {
  const { category } = useParams();
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    getMeals();
  }, [category]);

  const getMeals = async () => {
    const response = await getMealsList(category);
    setMeals(response.meals);
  }

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
    <div className='menu-container'>
      {/* <h1>{category} Meals</h1> */}
        {meals.map((meal) => (
          <div className="menu-item" key={meal.idMeal}>
            <img src={meal.strMealThumb} alt={meal.strMeal} />
            <h2>{meal.strMeal}</h2>
            <button onClick={() => handleFavoriteClick(meal)}>
              <FontAwesomeIcon
                className='fav-button'
                icon={isFavourite(meal.idMeal) ? solidHeart : regularHeart}
              />
              Add to Favourites
            </button>
          </div>
        ))}
    </div>
  );
};

export default Meals;
