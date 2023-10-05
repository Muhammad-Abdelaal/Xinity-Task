import React from 'react';
import Section from '../../../../Layout/Section/Section';
import Card from '../../../../UI/Card';
import CounterHeader from '../../../../shared/counterHeader/CounterHeader';
import ViewMore from '../../../../shared/viewMore/ViewMore';
import icon from '../../../../../Assets/justice-court-svgrepo-com.svg';


function ToDo({title, DUMMY_DATA}) {
  const todoList = DUMMY_DATA.map(item => {
    return (
        <div style={{ marginBottom:'10px', borderBottom:'solid 1px #ccc' , paddingBottom:'5px', display:title === 'Alerts' ? 'flex' : 'block', gap:title === 'Alerts' ? '10px' : '0px'}}>
            {title === 'Alerts' &&<img style={{display:'inline'}} width='28' src={icon} alt='img' />}
            <div>
                <div style={{display:'flex', justifyContent:'space-between', marginBottom:'10px'}}>
                    <p>{item.text}</p>
                    {title === 'To Do' && <span style={{width:'max-content', padding:'2px 10px', borderRadius:'25px',backgroundColor:'#F4F8FD', color:'#0078FF'}}>{item.status}</span>}
                </div>
                <p style={{color:'gray', width:'max-content'}}>{item.date}</p>
            </div>
        </div>
    )
  })  
  return (
    <Section>
        <Card customStyle ={{paddingLeft:'20px', paddingRight:'20px'}} >
            <CounterHeader title={title} counter={DUMMY_DATA.length} />
            {todoList}
            <ViewMore />
        </Card>
    </Section>
  )
}

export default ToDo