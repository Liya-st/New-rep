import Form from "./Form.jsx"
import { useState } from "react";
import "./App.css"
function App(){
  const[notes, setNotes] = useState([])
  const[showForm,setShowForm] = useState(false)
   return (
   <>
   { showForm && <Form/>}
  
  <button onClick={() => {
    setShowForm((prev)=> {
      return !prev
    })
  }} className="show-button"
  >  {showForm ? "Hide" : "Show"}
  </button>
</>
   )
}
export default App;