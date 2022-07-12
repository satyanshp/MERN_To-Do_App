import React from 'react';
import axios from "axios";
import { useState } from 'react'
import './form.css'
// import { EditText } from 'react-edit-text';
import 'react-edit-text/dist/index.css';
// import Datetime from 'react-datetime';
// import moment from "moment";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";


const Form = ({toggle}) => {
   const [taskName, setTaskName]= useState('');
  //  const [days, setDays]= useState('');
   const [date, setDate]= useState('');
   const [reminder, setReminder]= useState(false);
  //  const [time, setTime]=useState();
   
  //  const time = moment().format("YYYY-MM-DDTHH:mm");
  //  setDate({[date]:moment(time).utc().format('YYYY-MM-DD')})
  //   setDate(time.substring(0, 10));  
  //  console.log(date)
   
   const onClick = ()=>{
    onSubmit();
    toggle();
    refreshPage();
   }

   
   
   function refreshPage() {
    window.location.reload(false);
  }



   const onSubmit=()=>{
    
      axios.post('https://mern-stack-app-todo.herokuapp.com/insert',{
      taskName:taskName,
      // days:days,
      date:date
      
    });
    console.log({taskName})
    
   }
  //  name = taskName;
  //  console.log(name)
   
  return (
    <div className='pu'>
       <div className='popup'>
         <div className='form'>
         <h1>ADD TASK</h1>
           <div className='formm'>
             <input type="text" placeholder='Add Task'value={taskName} onChange={(e)=>setTaskName(e.target.value)}/>
             {/* <input type="text" placeholder='Add Date & Time' value={days} onChange={(e)=>setDays(e.target.value)}/> */}
             <input type="datetime-local" placeholder='Add Date & Time' value={date} onChange={(e)=>setDate(e.target.value)}/>
             {/* <EditText showEditButton value={taskName} onChange={(e)=>setTaskName(e.target.value)}/> */}
              {/* <EditTextarea /> */}
              {/* <DatePicker selected={date} onChange={date => setDate(date)} dateFormat='dd/MM/yyyy'/> */}
              {/* <Datetime locale="ru"
	value={time}
	onChange={setTime}
	closeOnSelect={true}
	dateFormat='YYYY-MM-DD'
	timeFormat='hh:mm'
	inputProps={{ type: 'datetime-local' }}
					
         /> */}
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

export default Form