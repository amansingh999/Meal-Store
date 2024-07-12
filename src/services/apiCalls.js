import axios from 'axios';

const BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

export const getMeals = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/categories.php`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    return null; // Handle error case by returning null or an empty object
  }
};

export const getMealsList = async (category) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/filter.php?c=${category}`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching meals:', error);
    return null; // Handle error case by returning null or an empty object
  }
};

export const randomMealGenrator = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/random.php`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching random meal:', error);
    return null;
  }
};
