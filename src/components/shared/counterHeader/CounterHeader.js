import React from 'react'

function CounterHeader({title, counter}) {
  return (
    <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:'25px'}}>
        <h3>{title}</h3>
        <div style={{width:'max-content', padding:'2px 7px', backgroundColor:'#F4F8FD', color:'#0078FF', borderRadius:'25px'}}>{counter} New</div>
    </div>
  )
}

export default CounterHeader