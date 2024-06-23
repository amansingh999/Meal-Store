import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Menu from './components/Menu';
import Meals from './components/Meals';
import Favourites from './components/Favourites';
import MealGenerator from './components/MealGenerator';
import './App.css';
import './Responsive.css';
import './components/Navbar.css';

const App = () => {
  const [favourites, setFavourites] = useState([]);

  const addToFavorites = (meal) => {
    setFavourites([...favourites, meal]);
  };

  const removeFromFavorites = (id) => {
    setFavourites(favourites.filter((meal) => meal.idMeal !== id));
  };

  return (
    <Router>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/menu' element={<Menu />} />
          <Route
            path='/menu/:category'
            element={
              <Meals
                favourites={favourites}
                addToFavorites={addToFavorites}
                removeFromFavorites={removeFromFavorites}
              />
            }
          />
          <Route
            path='/favorites'
            element={
              <Favourites
                favourites={favourites}
                removeFromFavorites={removeFromFavorites}
              />
            }
          />
          <Route
            path='/meal-generator'
            element={
              <MealGenerator
                favourites={favourites}
                addToFavorites={addToFavorites}
                removeFromFavorites={removeFromFavorites}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
