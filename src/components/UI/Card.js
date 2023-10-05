import React from 'react';
import classes from './UI.module.css'

function Card(props) {
  return (
    <div style={props.customStyle ? props.customStyle : {} } className={classes.card}>
        {props.children}
    </div>
  )
}

export default Card