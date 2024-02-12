import React from 'react';
import classes from './Feedback.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={classes.container}>
      <div className={classes.wrap}>
        {options.map(option => (
          <button
            className={classes.button}
            key={option}
            type="button"
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};
