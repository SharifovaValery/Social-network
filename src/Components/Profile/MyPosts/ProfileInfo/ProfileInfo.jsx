import React from 'react';
import classes from './ProfileInfo.module.css';

function ProfileInfo() {
  return (
    <div>
      <div>
        <img src="https://davidmayhewphotography.com/wp-content/uploads/2019/04/SLIDERMount-Sneffels-700x300.jpg" />
      </div>
      <div className={classes.description}>
        ava + description
      </div>
    </div>
  );
}

export default ProfileInfo;
