import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './DialogItem';

function DialogItem(props) {
  const path = `/dialogs/${props.id}`;
  return (
    <div className={`${classes.dialog}${classes.active}`}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
}

export default DialogItem;
