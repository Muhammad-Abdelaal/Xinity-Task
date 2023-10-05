import React from 'react';
import ToDo from './toDo/ToDo';

const DUMMY_TODO = [
  {text:'Review Technical Specifications', status:'In Review', date:'3/10/2023'},
  {text:'Approve RFQ For Laptops', status:'In Review', date:'3/10/2023'},
  {text:'Create Sourcing Event', status:'In Review', date:'3/10/2023'},
  {text:'Create Sourcing Event', status:'In Progress', date:'3/10/2023'},
  {text:'Create Sourcing Event', status:'Approved', date:'3/10/2023'},
  {text:'Create Sourcing Event', status:'In Review', date:'3/10/2023'},
];

const DUMMY_ALERTS = [
  {text:'Tender X Ended 12 Days Ago', date:'3/10/2023 at 12:30AM'},
  {text:'Tender X Ended 12 Days Ago', date:'3/10/2023 at 12:30AM'},
  {text:'Tender X Ended 12 Days Ago', date:'3/10/2023 at 12:30AM'},
]

function CreateSub() {
  return (
    <div style={{height:'100hv', width:'500px',}}>
      <ToDo title={'To Do'} DUMMY_DATA = {DUMMY_TODO} />
      <ToDo title={'Alerts'} DUMMY_DATA = {DUMMY_ALERTS} />
    </div>
  )
}

export default CreateSub