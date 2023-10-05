import React from 'react';
import Card from './Card';
import classes from './UI.module.css'

function Modal(props) {
  return (
    <div className = {classes['modal-container']}>
        <div onClick={() => {props.changeModalStateHandler(false)}} className = {classes.overlay} />
        <Card customStyle ={{ padding:'20px' , boxShadow:'none', width:'600px',height:'max-content', maxHeight:'600px', marginTop:'50px', overflowY:'scroll',zIndex:'1'}}>
            <div className={classes['modal-header']}>
                <h3>{props.title}</h3>
                <div style={{cursor:'pointer', fontSize:'28px',}} onClick={() => {props.changeModalStateHandler(false)}}>x</div>
            </div>
            {props.children}
            <div className={classes['modal-actions']}>
                <div onClick={() => {props.changeModalStateHandler(false)}} style={{backgroundColor:'#ccc'}} className={classes['modal-action_btn']}>cancel</div>
                <div onClick={() => {props.changeModalStateHandler(false)}} style={{backgroundColor:'#0078FF', color:'white'}} className={classes['modal-action_btn']}>Confirm</div>
            </div>
        </Card>
    </div>
  )
}

export default Modal