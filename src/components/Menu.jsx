import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getMeals } from '../services/apiCalls';

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
    <div className="container">
      <h1>Menu</h1>
      <ul>
        {categories.map(category => (
          <li key={category.idCategory}>
            <img src={category.strCategoryThumb} alt={category.strCategoryThumb} />
            {/* <p>{category.strCategoryDescription}</p> */}
            <button><Link to={`/menu/${category.strCategory}`} className='menu_button'>{category.strCategory}</Link></button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;
