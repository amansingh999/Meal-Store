import React from 'react';
import './styles/Menu.css';

const Favourites = ({ favourites, removeFromFavorites }) => {
  return (
    <div className='container'>
      <h1>My Favourites</h1>
      {favourites.length === 0 ? (
        <p className='no-favourites-message'>
          You have no favourite meals yet. Start adding some delicious meals!
        </p>
      ) : (
        <div className="menu-container">
          {favourites.map((meal) => (
            <div className="menu-item" key={meal.idMeal}>
              <img src={meal.strMealThumb} alt={meal.strMeal} />
              <h2>{meal.strMeal}</h2>
              <button onClick={() => removeFromFavorites(meal.idMeal)}>
                Remove from Favourites
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favourites;
