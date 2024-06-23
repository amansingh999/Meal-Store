import axios from 'axios';

export const getMeals = async () => {
  try {
    const response = await axios.get(
      'https://www.themealdb.com/api/json/v1/1/categories.php'
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    return null; // Handle error case by returning null or an empty object
  }
};

export const randomMealGenrator = async () => {
  try {
    const response = await axios.get(
      'https://www.themealdb.com/api/json/v1/1/random.php'
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching random meal:', error);
    return null;
  }
};
