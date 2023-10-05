import React, { useState } from 'react';
import HeaderDetails from '../createProject/headerDetails/HeaderDetails';
import classes from './ManageContainer.module.css';
import EventAndMileStoneContainer from '../event milestone/EventAndMileStoneContainer';

function ManageContainer() {
  const [projectState, setProjectState] = useState('header') ;

  function projectStateHandler (actionType) {
    if (actionType === 'next') {
        setProjectState('event');
    }
    else {
        setProjectState('header');
    }
  }
  return (
    <div style={{marginTop:'50px'}}>
        {projectState === 'header' && <HeaderDetails />}
        {projectState === 'event' && <EventAndMileStoneContainer />}
        
        <div className={classes['manage-actions-container']}>
            <div onClick={() => {projectStateHandler('back')}} style={{backgroundColor:'#ccc'}} className={classes['actions-button']}>Back</div>
            <div style={{display:'flex', gap:'20px'}}>
                <div style={{backgroundColor:'#0078FF', color:'white'}} className={classes['actions-button']}>Save & Close</div>
                <div onClick={() => {projectStateHandler('next')}} style={{backgroundColor:'#0078FF', color:'white'}} className={classes['actions-button']}>Next</div>
            </div>
        </div>
    </div>
  )
}

export default ManageContainer