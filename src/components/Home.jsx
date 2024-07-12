// src/components/Home.jsx
import React, { useState, useEffect } from 'react';
import { getMeals, getMealsList } from '../services/apiCalls';
import './styles/Home.css';
import image from '../Images/pexels-photo-1640774.jpeg';
import Footer from './Footer';

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [featuredMeals, setFeaturedMeals] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await getMeals();
    setCategories(data.categories);

    if (data.categories.length > 0) {
      const firstCategory = data.categories[2].strCategory;
      const response = await getMealsList(firstCategory);
      setFeaturedMeals(response.meals.slice(0, 3));
    }
  };

  return (
    <>
      <div className='home-container'>
        <div className='hero-section'>
          <img src={image} alt='Hero' />
          <div className='hero-overlay'>
            <div className='hero-text'>Welcome to Our Meal Store</div>
          </div>
        </div>
        <div className='featured-section'>
          <h2 className='section-title'>Featured Meals</h2>
          <div className='cards-container'>
            {featuredMeals.map((meal) => (
              <div className='card' key={meal.idMeal}>
                <img src={meal.strMealThumb} alt={meal.strMeal} />
                <h3>{meal.strMeal}</h3>
                <button>Add to Favorites</button>
              </div>
            ))}
          </div>
        </div>
        <div className='categories-section'>
          <h2 className='section-title'>Categories</h2>
          <div className='cards-container'>
            {categories.map((category) => (
              <div className='card' key={category.idCategory}>
                <img
                  src={category.strCategoryThumb}
                  alt={category.strCategory}
                />
                <h3>{category.strCategory}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
