import React from 'react';
import classes from '../Dialogs.module.css';

function Message(props) {
  return (
    <div className={classes.dialog}>{props.message}</div>
  );
}

export default Message;
