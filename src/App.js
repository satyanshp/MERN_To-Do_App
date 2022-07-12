import './App.css';
import axios from "axios";
import Form from './form';
// import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { useState, useEffect } from 'react';
// import { EditText } from 'react-edit-text';
import Doing from './doing';
import Done from './done';
import moment from "moment";
// import { useKeyPress } from './useKeyPress';

function App() {
  const [add, setAdd]=useState(false);
  const popup = ()=>{
         setAdd(!add) 
         console.log(add)
  }
  const [doingForm, setDoingForm]=useState(false);
  const popupDoing = ()=>{
         setDoingForm(!doingForm) 
         console.log(doingForm)
  }
  const [doneForm, setDoneForm]=useState(false);
  const popupDone = ()=>{
         setDoneForm(!doneForm) 
         console.log(doneForm)
  }

  const deleteTask = (id) =>{
    axios.delete(`https://mern-stack-app-todo.herokuapp.com/delete/${id}`)
  }
  const deleteDoingTask = (id) =>{
    axios.delete(`https://mern-stack-app-todo.herokuapp.com/deletedoing/${id}`)
  }
  const deleteDoneTask = (id) =>{
    axios.delete(`https://mern-stack-app-todo.herokuapp.com/deletedone/${id}`)
  }

  // const [edit, setEdit]=useState(false);
  const [newTask, setNewTask]=useState('')
  
  // console.log(Form.taskName);
  
const updateTask =(id)=>{
  axios.put("https://mern-stack-app-todo.herokuapp.com/update",{
    id:id,
    newTask:newTask
  })
}
  function refreshPage() {
  window.location.reload(false);}

  
  // const move = (id,task)=>{
  //   deleteTask(id) ;
     
  //   setDoing([...done,task])
    
  // }
    const [idd,setIdd]=useState()
    const openEdit =(id)=>{
       todo.map((todo)=> todo._id===id && setIdd(id))
    }
    const closeEdit = ()=>{
      setIdd(0)
  }
  const clickUpdate =(id)=>{
    openEdit(id);
    // setEdit(!edit)
    // updateTask(obj);
    console.log(id);
    // console.log(edit)
  }

  const onClickDelete=(id)=>{
    deleteTask(id);
    refreshPage();
  }
  
  const onClickUpdate=(id)=>{
    updateTask(id);
    refreshPage();
  }
  // useKeyPress(onClickUpdate, 'Enter');

  const[sel, setSel]=useState()
  const get =(id)=>{
    todo.map((todo)=>
    todo._id===id && setSel(todo)
    );
    axios.post('https://mern-stack-app-todo.herokuapp.com/doing',{
       taskName:sel.taskName,
       days:sel.days,
  });
    deleteTask(id) ;
    refreshPage();
    console.log(sel)
    // console.log(todo.date)
  }
  const[sell, setSell]=useState()
  const gett =(id)=>{
    doing.map((doing)=>
    doing._id===id && setSell(doing)
    );
    axios.post('https://mern-stack-app-todo.herokuapp.com/done',{
       taskName:sell.taskName,
       days:sell.days,
  });
    deleteDoingTask(id) ;
    refreshPage();
    console.log(sell)
  }
  
  
  

  // const oneedit =(id)=>{
  //   todo._id===id
  // }

  // const togedit=()=>{setEdit(!edit)}

  useEffect(()=>{
    axios.get('https://mern-stack-app-todo.herokuapp.com/read'
    // ,{taskName:Form.taskName,
    //   days:Form.days,}
      ).then((Response)=>{
        console.log(Response);
        setTodo(Response.data)
      })
  }, [])
  const [todo, setTodo]=useState([])
 
 
  useEffect(()=>{
    axios.get('https://mern-stack-app-todo.herokuapp.com/doingread'
      ).then((Response)=>{
        console.log(Response);
        setDoing(Response.data)
      })
  }, [])
  const [doing, setDoing]=useState([])
  
  
  useEffect(()=>{
    axios.get('https://mern-stack-app-todo.herokuapp.com/doneread'
      ).then((Response)=>{
        console.log(Response);
        setDone(Response.data)
      })
  }, [])
  const [done, setDone]=useState([]);
  
  
  // const [todo, setTodo]=useState('')
  // const addTask =(task) =>{
  //   const id =Math.floor(Math.random()*10000)+1;
  //   const newTask = {id,...task}
  //   setTodo([...todo, newTask])
  //   console.log(newTask)
  // }
 
  return (
    <div className="App">
      
        <div className='main'>
            <div className='nav'> 
                  <h2>Task Manager</h2>
            </div>
            <div className='task'>
              <div className='todo iii'>
                  <div className='head'>
                    <div>To-Do</div>
                    <div className='add' onClick={popup}>+</div> 
                  </div>
                  <div className='box'>
                      <div className='item'>
                              {todo.map((todo)=>{
                            return(
                              <div className='itemCont'>
                                <div className='textCont'>
                                  {todo._id===idd ? <div>
                                         {/* <EditText showEditButton onChange={(e)=>setNewTask(e.target.value)}/> */}
                                          <input type="text" defaultValue={todo.taskName} onChange={(e)=>setNewTask(e.target.value)} />
                                          <button onClick={()=>closeEdit()} className='edit' >X</button>
                                          </div>: <h1>{todo.taskName}</h1>}
                                  <h3>{moment(todo.date).format('MMMM DD, YYYY HH:mm')}</h3>
                                  
                                </div>
                                   
                                  <div className='buttonContainer'>
                                      <div className='editform' >
                                          {/* {todo._id===idd && <div>
                                          <input type="text" placeholder='Edit Task'  />
                                          <button onClick={()=>clickUpdate(todo._id,todo._id)}>Edit</button>
                                          </div>} */}
                                          {todo._id===idd? <button className='edit Apply' onClick={()=>onClickUpdate(todo._id)}>Edit</button> : <button className='edit' onClick={()=>{clickUpdate(todo._id)}}>/</button>  }
                                          
                                          
                                          <button className='delete' onClick={()=>onClickDelete(todo._id)}>X</button>
                                      </div>
                                      <button onClick={()=>get(todo._id)}>Move</button>
                                  </div>
                                   

                              </div>
                              
                            )
                            })}  
                      </div>
                  </div>
              </div>
              <div className='doing iii'>
                <div className='head'>
                  
                    <div>Doing...</div>
                    <div className='add'onClick={popupDoing}>+</div> 
                  </div>
                  <div className='box'>
                      <div className='item'>
                                  {doing.map((doing)=>{
                                return(
                                  <div className='itemCont'>
                                    <div className='textCont'><h1>{doing.taskName}</h1></div>
                                      
                                      <div className='buttonContainer'>
                                          <div className='deletebtncont' onClick={refreshPage}>
                                              {/* {edit && <div>
                                              <input type="text" placeholder='Edit Task'  onChange={(e)=>setNewTask(e.target.value)} />
                                              <button onClick={()=>clickUpdate(todo._id,todo._id)}>Edit</button>
                                              </div>} */}

                                              {/* <button className='edit' onClick={()=>{setEdit(!edit)}}>/</button> */}
                                              <button className='delete' onClick={()=>deleteDoingTask(doing._id)}>X</button>
                                          </div>
                                          <button onClick={()=>gett(doing._id)}>Move</button>
                                      </div>
                                      
                                  </div>
                                  
                                )
                                })}  
                              
                          </div>
                  </div>
              </div>
              <div className='done iii'>
                  <div className='head'>
                    <div>Complete</div>
                    <div className='add'onClick={popupDone}>+</div> 
                  </div>
                  <div className='box'>
                      <div className='item'>
                                      {done.map((done)=>{
                                    return(
                                      <div className='itemCont'>
                                        <div className='textCont'>
                                           <h1>{done.taskName}</h1>
                                        </div>
                                           <div className='buttonCountainer'>
                                              <div onClick={refreshPage}>
                                                  {/* {edit && <div>
                                                  <input type="text" placeholder='Edit Task'  onChange={(e)=>setNewTask(e.target.value)} />
                                                  <button onClick={()=>clickUpdate(todo._id,todo._id)}>Edit</button>
                                                  </div>} */}

                                                  {/* <button className='edit' onClick={()=>{setEdit(!edit)}}>/</button> */}
                                                  <button className='delete' onClick={()=>deleteDoneTask(done._id)}>X</button>
                                              </div>
                                           </div>
                                          
                                            
                                      </div>
                                      
                                    )
                                    })}  
                                  
                              </div>
                  </div>
              </div>
            </div>
          </div>
          <div>
            {add && <Form toggle={popup} />}
            {doingForm && <Doing toggle={popupDoing} />}
            {doneForm && <Done toggle={popupDone} />}
          </div>
      
       
       
    </div>
  );
}


export default App;
