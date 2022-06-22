import { useEffect, useState } from 'react';
import useHttp from '../../hooks/use-http';
import { MEALS_URL } from '../API/api';
import Card from '../UI/Card';
import classes from './AvailableMeals.module.css';
import MealItem from './MealItem/MealItem';
const AvailableMeals = () => {
  const [meals, setMeals] = useState();
  const { isLoading, error, sendRequest: fetchMeals } = useHttp();
  useEffect(() => {
    const transFormMeals = (mealsObj) => {
      const loadedMeals = [];
      for (const key in mealsObj) {
        loadedMeals.push(...mealsObj[key]);
      }
      setMeals(loadedMeals);
    };
    const config = {
      url: MEALS_URL,
      method: 'GET',
    };
    fetchMeals(config, transFormMeals);
  }, []);

  const melasList = meals?.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      price={meal.price}
      description={meal.description}
    />
  ));
  return (
    <section className={classes.meals}>
      {error && <p className={classes['error-text']}>{error.message}</p>}
      {isLoading && <p className={classes['loading-text']}>Loading meals...</p>}
      {meals?.length && (
        <Card>
          <ul>{melasList}</ul>
        </Card>
      )}
    </section>
  );
};

export default AvailableMeals;
