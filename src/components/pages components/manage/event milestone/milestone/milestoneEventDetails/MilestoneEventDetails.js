import React from 'react';
import classes from './MilestoneEventDetails.module.css'

function MilestoneEventDetails({status, milestoneEventDetails, milestoneEventSubDetails}) {
  
  const milestoneEventDetailsList = milestoneEventDetails.map((item, index) => {
    if (index === 0) {
        return (
            <div style={{display:'flex',gap:'10px'}}>
                <input type='checkbox' />
                <p>{item}</p>
            </div>
        )
    }
    if (index === milestoneEventDetails.length-1) {
      return (
        <div style={{marginTop:'-7px', cursor:'pointer'}}>
          <div style={{color:'#0078FF', fontSize:'26px',lineHeight:'0.3'}}>.</div>
          <div style={{color:'#0078FF', fontSize:'26px',lineHeight:'0.3'}}>.</div>
          <div style={{color:'#0078FF', fontSize:'26px',lineHeight:'0.3'}}>.</div>
        </div>
      )
    }
    return <p style={item === 'RFP' ? {color:'#0078FF'} : {}}>{item}</p>
  });
  
  const milestoneEventSubDetailsList = status === 'main' && milestoneEventSubDetails.map((item, index) => {
    return <MilestoneEventDetails key = {index} status='sub' milestoneEventDetails={item} />
  })
  return (
    <div className={classes['milestone-event-details-container']}>
        <div style={status === 'sub' ? {backgroundColor:'white', paddingLeft:'40px'} : {}} className={classes['milestone-event-details-main']}>
            {milestoneEventDetailsList}
        </div>
        {
            status === 'main'&&
            <div className={classes['milestone-event-details-sub']}>
                {milestoneEventSubDetailsList}
            </div>
        }
    </div>
  )
}

export default MilestoneEventDetails;