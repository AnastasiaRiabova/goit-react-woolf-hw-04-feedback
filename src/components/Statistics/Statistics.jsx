import React from 'react';
import classes from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <>
    <p className={classes.textGood}>Good: {good}</p>
    <p className={classes.textNeutral}>Neutral: {neutral}</p>
    <p className={classes.textBad}>Bad: {bad}</p>
    <p className={classes.textTotal}>Total: {total}</p>
    <p className={classes.textFeedback}>
      Positive feedback: {positivePercentage}%
    </p>
  </>
);
