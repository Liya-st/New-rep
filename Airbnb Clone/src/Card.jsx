import React from 'react'
import './App.css'
export default function Card(props) {
  return (
    <div className ='cards'>
     <img src ={`../images/${props.img}`}className='card-img'/>
     <div className="stats">
        <img src='./images/star.png' className='star-icon' />
        <span>{props.rating}</span>
        <span>({props.reviewCount}) o </span>
        <span>{props.location}</span>
     </div>
     <p>{props.title}</p>
     <p>From  ${props.price}/person</p>
    </div>
  )
}
