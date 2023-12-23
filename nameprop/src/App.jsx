import { useState } from "react"
import Child from "./child"
 export default function App(){
  const[num,setNum]= useState(1)
  const generateRandomNumber =()=>{
    let val = Math.floor(Math.random()*100+1)
    setNum(val)
  }
    return(
        <div>
            <h1>
            {num}
            </h1>
            <Child generateRandomNumber={generateRandomNumber}/>
        </div>

    )
}