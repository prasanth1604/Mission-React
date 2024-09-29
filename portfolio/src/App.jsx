import { useState } from 'react'
import reactLogo from './assets/react.svg'
import aa from './assets/images.jpg'
import myimage from './assets/programmer-man-outline-icon-linear-260nw-1118219396.jpg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
      
        <nav className='Header'> 
          <h3>Developed by Prasanth</h3>
          <button class="button-85" >
          <a href ="https://drive.google.com/file/d/1lBAnro8xk4M46rOm0K1_M9qIphaHz6z_/view?usp=sharing">
            RESUME
          </a>
          </button>
        </nav> 

        <div>
          <div className="image">
            <img src={myimage} alt="profile picture" />
          </div>

          <div className="name">
            <h1>Prasanth P</h1>
          </div>

        </div>
    </>
  )
}

export default App
