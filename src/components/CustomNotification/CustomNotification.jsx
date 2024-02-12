import React from 'react';
import classes from './CustomNotification.module.css';

export const CustomNotification = ({ message }) => (
  <p className={classes.notificationText}>{message}</p>
);
