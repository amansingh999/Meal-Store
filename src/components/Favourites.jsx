import React from 'react';

const Favourites = ({ favourites, removeFromFavorites }) => {
  return (
    <div className='container'>
      <h1>My Favourites</h1>
      {favourites.length === 0 ? (
        <p className='no-favourites-message'>
          You have no favourite meals yet. Start adding some delicious meals!
        </p>
      ) : (
        <ul>
          {favourites.map((meal) => (
            <li key={meal.idMeal}>
              <img src={meal.strMealThumb} alt={meal.strMeal} />
              <h2>{meal.strMeal}</h2>
              <button onClick={() => removeFromFavorites(meal.idMeal)}>
                Remove from Favourites
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Favourites;
