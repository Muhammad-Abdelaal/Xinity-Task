import React from 'react';
import classes from './ProjectRow.module.css';

function ProjectRow({projectDetails}) {
  const statusBackground = projectDetails.status === 'In approval' ? '#F4F8FD' 
    :projectDetails.status === 'In Sourcing' ? '#FFF1CF' 
    :projectDetails.status === 'Draft' ? '#FFEEEE' : '#DEF2E8';

  const statusColor = projectDetails.status === 'In approval' ? '#0078FF' 
    :projectDetails.status === 'In Sourcing' ? 'black' 
    :projectDetails.status === 'Draft' ? '#FF3535' : '#2DA44E'  
  return (
    <div className={classes.project} >
        <div className={classes['project-detail']}>{projectDetails.id}</div>
        <div className={classes['project-detail']}>{projectDetails.name}</div>
        <div className={classes['project-detail']}>{projectDetails.type}</div>
        <div style={{backgroundColor:statusBackground, color:statusColor}} className={classes['project-detail']}>{projectDetails.status}</div> 
        <div className={classes['project-detail']}>{projectDetails.date}</div>
    </div>
  )
}

export default ProjectRow