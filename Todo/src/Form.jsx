import React,{useState} from 'react'
import './App.css'
export default function Form() {
    const[task,setTask] = useState([""]);
    // function handleTasks(e){
    //     e.preventDefault()
    //     setTask((prevTask)=>{
    //         [
    //             ...prevTask, task
    //         ]
    //     })
    //     return  <p>{task}</p>

    // }
  return (
    <div>
        <form className='form'>
            <label htmlFor='task'>Enter your task</label>
            <input type = "text" id="task" onChange = {(event)=>setTask(event.target.value)}></input>
            <button onClick ={handleTasks}>Add Task</button>
        </form>
        <section className='tasks'>
            {/* <p>
                Tasks:{task}
            </p> */}
        </section>
    </div>
  )
}
