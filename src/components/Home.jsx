import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='container'>
      <h1>Welcome to the Meal Store</h1>
      <p>Find your favorite meals and save them!</p>
      <div className='home-links'>
        <Link to='/menu'>View Menu</Link>
        <Link to='/favorites'>My Favourites</Link>
        <Link to='/meal-generator'>Generate a Meal</Link>
      </div>
    </div>
  );
};

export default Home;
