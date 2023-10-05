import { useContext } from 'react';

import useBoolean from '../../../hooks/useBoolean';

import classes from './Sidebar.module.css';

// assets
import createIcon from '../../../Assets/new-folder-svgrepo-com.svg';
import documentIcon from '../../../Assets/new-document-svgrepo-com.svg';
import shareIcon from '../../../Assets/share-1-svgrepo-com.svg';
import ManageIcon from '../../../Assets/folder-settings-svgrepo-com.svg';
import adminIcon from '../../../Assets/protection-secure-security-2-svgrepo-com.svg';
import downArrow from '../../../Assets/downCaret.svg';
import helpIcon from '../../../Assets/help-svgrepo-com.svg';
import chatIcon from '../../../Assets/chat-unread-svgrepo-com.svg';
import Context from '../../../store/Context';
//---

function Sidebar({isMenuOpen}) {
  const {isTrue:isSubCreateVis, truthHandler:subCreatVisHandler} = useBoolean(true);
  const ctx = useContext(Context);
  
  return (
    <div style={isMenuOpen ? {width:'300px'} : {width:'0px'}} className={classes.sidebar}>
      <div className={classes['sidebar-top']}>

        <div onClick={() => {ctx.routeHandler('create')}}>
          <div onClick={()=>{subCreatVisHandler(!isSubCreateVis)}}  className={classes['sidebar-nav-container']}>
            <div className={classes['sidebar-nav']}>
              <img width='20' src={createIcon} alt='img' />
              <p>Create</p>
            </div>
            <img  style ={!isSubCreateVis ? {transform:'rotateZ(180deg)'} : {}} width='18' alt='img' src={downArrow} />
          </div>
          {
            <div  style ={!isSubCreateVis ? {height:'0px'} : {}} className={classes['sub-create']}>
            <div style={{paddingLeft:'30px'}} className={classes['sidebar-nav']}>
              <img width='20' src={documentIcon} alt='img' />
              <p>Source Request</p>
            </div>
            <div style={{paddingLeft:'30px'}} className={classes['sidebar-nav']}>
              <img width='20' src={shareIcon} alt='img' />
              <p>Sourcing Project</p>
            </div>
            <div style={{paddingLeft:'30px'}} className={classes['sidebar-nav']}>
              <img width='20' src={helpIcon} alt='img' />
              <p>Event</p>
            </div>
          </div>
          }
        </div>

        <div onClick={() => {ctx.routeHandler('manage')}} className={classes['sidebar-nav']}>
          <img width='20' src={ManageIcon} alt='img' />
          <p>Manage</p>
        </div>

        <div className={classes['sidebar-nav']}>
          <img width='20' src={adminIcon} alt='img' />
          <p>Administration</p>
        </div>

      </div>
      <div className={classes['sidebar-bottom']}>
        <div className={classes['sidebar-nav']}>
          <img width='20' src={helpIcon} alt='img' />
          <p>Help</p>
        </div>
        <div className={classes['sidebar-nav']}>
          <img width='20' src={chatIcon} alt='img' />
          <p>Chat</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar;