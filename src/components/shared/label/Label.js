import React from 'react';
import classes from './Label.module.css';

function Label({label,imp}) {
  return (
    <label className={classes.label}>{label} {imp && <span style={{color:'red'}}>*</span>}</label>
  )
}

export default Label;