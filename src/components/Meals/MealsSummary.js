import React from 'react';
import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Food, Delivered To You</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel
        pharetra est, porttitor viverra velit. Cras luctus scelerisque nisi sed
        blandit. Suspendisse felis orci, dignissim id nisi et, feugiat mollis
        tellus.
      </p>
      <p>
        Aenean tempor velit eu elit dictum vehicula eu non metus. Donec
        consequat erat dolor, pretium convallis turpis tempor pulvinar.
      </p>
    </section>
  );
};

export default MealsSummary;
