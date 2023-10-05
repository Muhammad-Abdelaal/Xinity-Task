import React from 'react';
import classes from './TextInput.module.css';
import Label from '../label/Label';

function TextInput({placeHolder, label, imp, isID, customStyle}) {
  return (
    <div style={customStyle}>
        <Label imp = {imp} label={label} />
        <input style={isID ? {color:'#3292FC'} : {}} className={classes['text-input']} type='text' placeholder={placeHolder} />
    </div>
  )
}

export default TextInput