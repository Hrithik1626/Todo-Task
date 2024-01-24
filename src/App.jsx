import React, { useState } from 'react'
import TopBar from './components/TopBar'



function App() {
  let [todo,setTodo]=useState([
    {
    id:1,
    title:"GUVI TASK-1",
    description:"The First Task Is Completed Succesfully",
    status:false

  },
  {
    id:2,
    title:"GUVI TASK-2",
    description:"The Second Task Is Completed Succesfully",
    status:true
    
  },
  {
    id:3,
    title:"GUVI TASK-3",
    description:"The Third Task Is Completed Succesfully",
    status:false
    
  }
])
let [completed,setCompleted]=useState("All")
  return <>
  <TopBar todo={todo} setTodo={setTodo} completed={completed} setCompleted={setCompleted}/>
  </>
}

export default App