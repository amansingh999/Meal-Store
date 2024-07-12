import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getMeals } from '../services/apiCalls';
import './styles/Menu.css';

const Menu = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getMealsData();
  }, []);

  const getMealsData = async () => {
    const resp = await getMeals();
    setCategories(resp?.categories);
  }

  return (
    <div className="menu-container">
      {categories.map((category) => (
        <div className="menu-item" key={category.idCategory}>
          <img src={category.strCategoryThumb} alt={category.strCategory} />
          <button><Link to={`/menu/${category.strCategory}`} className='menu_button'>{category.strCategory}</Link></button>
        </div>
      ))}
    </div>
  );
}

export default Menu;
