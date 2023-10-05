import React from 'react';
import Label from '../label/Label';
import classes from './TextArea.module.css'

function TextArea({placeHolder, label, imp, }) {
  return (
    <div>
        <Label imp = {imp} label = {label} />
        <textarea rows={7} className={classes['textarea-input']} placeholder={placeHolder} />
    </div>
  )
}

export default TextArea;