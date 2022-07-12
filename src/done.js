import React from 'react'
import axios from "axios";
import { useState } from 'react'
import './form.css'
// import DatePicker from "react-datepicker";

// import "react-datepicker/dist/react-datepicker.css";

const Done = ({toggle}) => {

    const [taskName, setTaskName]= useState('');
    // const [days, setDays]= useState('');
    const [date, setDate]= useState('');
    const [reminder, setReminder]= useState(false);
    
    
    const onClick = ()=>{
     onSubmit();
     toggle();
     refreshPage();
    }
 
    
    
    function refreshPage() {
     window.location.reload(false);
   }
 
 
 
    const onSubmit=()=>{
     
       axios.post('https://mern-stack-app-todo.herokuapp.com/done',{
       taskName:taskName,
      //  days:days,
       date:date
       
     });
     console.log({taskName})
     
    }

  return (
    
        <div className='pu'>
       <div className='popup'>
         <div className='form'>
         <h1>ADD TASK</h1>
           <div className='formm'>
             <input type="text" placeholder='Add Task'value={taskName} onChange={(e)=>setTaskName(e.target.value)}/>
             {/* <input type="text" placeholder='Add Date & Time' value={days} onChange={(e)=>setDays(e.target.value)}/> */}
             <input type="date" placeholder='Add Date & Time' value={date} onChange={(e)=>setDate(e.target.value)}/>
             <input type="checkbox" checked={reminder} value={reminder} onChange={(e)=>setReminder(e.currentTarget.checked)}/>
             <button type="submit" onClick={onClick} >Submit</button>
           </div>
         </div>
         <div className='x' onClick={toggle}> <span>X</span> </div>

       </div>
       <div className='overlay'></div>
    </div>
    
  )
}

export default Done