import './App.css'
import React from 'react'

export default function Form() {
  return (
    <>
    <div className='forms'>
        <div className="form-container">
            <div className="form">
                <label htmlFor='topText'>Top text: </label>
                <input type="text" id='topText' name='topText' />
            </div>
            <div className="form">
                <label htmlFor='bottomText'>Bottom text: </label>
                <input type="text" id='bottomText' name='bottomText' />
            </div>
        </div>
        <button className='btn'>Get A New Image</button>
    </div>
    </>
  )
}
