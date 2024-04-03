import React from 'react'
import './App.css'

export default function Header() {
  return (
    <div className='header'>
        <div className='h'>
        <img src ='./images/troll-face.png' 
        className='headerImage' alt="Troll Face" />
        <p className='head-text'>Meme Generator</p>
        </div>
        <h3>React project</h3>
    </div>
  )
}
