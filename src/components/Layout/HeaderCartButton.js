import React from 'react';
import CartIcon from '../Cart/CartIcon';

import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
  const cartButtonClickHandler = (event) => {};

  return (
    <button className={classes.button} onClick={cartButtonClickHandler}>
      <span className={classes.icon}>
        <CartIcon className={classes.icon} />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>2</span>
    </button>
  );
};

export default HeaderCartButton;
