import React from 'react'
import { useState } from 'react'
import "./App.css"
import List from './List'

const Form = () => {
    const[mainTopic,setMainTopic] = useState("")
    const[subTopic,setSubTopic] = useState("")
    const[content,setContent] = useState("")

    const handleSubmit = (e) =>{
      e.preventDefault()
      const note ={
        mainTopic, 
        subTopic,
        content,
      }
      console.log(note)

    }
 
  return <main>
    <h1>Notes</h1>
   <form className="note-form" onSubmit={handleSubmit}>
     <input type="text"
      placeholder='Main' 
      className='main-topic' 
      value ={mainTopic} 
      onChange={(event =>{
        setMainTopic(event.target.value)
        console.log(mainTopic);
      })}
      />

     <input type="text" 
     placeholder = 'Sub Topic'
      className='Sub-topic'
     value = {subTopic} 
     onChange={
        (event => setSubTopic(event.target.value))}
        />

     <textarea value ={content}
     onChange={(event => setContent(event.target.value))}/>
   </form>
   <button className='btn-save'>Save</button>
   <List/>
   </main>
  
}
export default Form;