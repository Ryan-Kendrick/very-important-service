import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'

import Splash from './Splash'
import ToS from './ToS'
import Form from './Form'

function App() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <div className="navButtons">
            <button className="navButton">LOG IN</button>
            <button className="navButton">SIGN UP</button>
          </div>
        </nav>
        <a className="logo" href="/">
          <img src="/images/logo.svg" alt="" />
        </a>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Splash />}></Route>
          <Route path="/tos" element={<ToS />}></Route>
          <Route path="/form" element={<Form />}></Route>
        </Routes>
      </main>
    </>
  )
}

export default App
