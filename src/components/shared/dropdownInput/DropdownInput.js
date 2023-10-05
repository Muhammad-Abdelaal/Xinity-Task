import React from 'react';
import classes from './DropdownInput.module.css'

function DropdownInput({placeHolder, label, imp, isID, options, customStyle, customInputStyle}) {
  const optionsList = options.map((item,index) => {
    return <option key={index}>{item}</option>
  })

  return (
    <div style={customStyle}>
        <label className={classes.label}>{label} {imp && <span style={{color:'red'}}>*</span>}</label>
        <select style={isID ? {...customInputStyle,color:'#3292FC'} : {...customInputStyle}} className={classes['dropdown-input']} name='currency' defaultValue={placeHolder}>
            <option disabled value={placeHolder}>{placeHolder}</option>
            {optionsList}
        </select>
    </div>
  )
}

export default DropdownInput;