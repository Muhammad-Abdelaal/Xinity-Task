import React, { useState } from 'react';
import classes from './ControleHeader.module.css';
import icon from '../../../Assets/downCaret.svg';

function ControlHeader({header, controlActions, changeModalStateHandler,sectionVisibiltyHandler}) {
  const [iconState, setIconState] = useState('down');
  const controlActionsList = controlActions.map(item => {
    if (item === 'Create') {
      return <div onClick={() => {changeModalStateHandler(true)}} className={classes['control-header_actions-btn']}>{item}</div>
    }
    return <div className={classes['control-header_actions-btn']}>{item}</div>
    
  });

  function iconStateHandler () {
    setIconState(prev => prev === 'down' ? 'up' : 'down');
    if (iconState === "down") {
      sectionVisibiltyHandler(false);
      return
    }
    sectionVisibiltyHandler(true);
  }
  return (
    <div className={classes['control-header']}>
        <div className={classes['control-header_header']}>
            <h3>{header}</h3>
            <img onClick={iconStateHandler} style={iconState === 'up' ? {transform:'rotateZ(180deg)'} : {}} className={classes['arrow-icon']} alt='img' width='20px' src={icon} />
        </div>
        <div className={classes['control-header_actions']}>
            {controlActionsList}
        </div>
    </div>
  )
}

export default ControlHeader