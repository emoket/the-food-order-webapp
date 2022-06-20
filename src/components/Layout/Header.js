import { Fragment } from 'react';
import classes from './Header.module.css';
import mealsImage from '../../assets/chicken-dishes.webp';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>TheMeals</h1>
        <button>Cart</button>
      </header>
      <div className={classes['main-image']}>
        <img alt='The Meal Background' src={mealsImage} />
      </div>
    </Fragment>
  );
};

export default Header;
