import { useState } from 'react'
import Login from './components/login'
import Profile from './components/profile'
import UserContextProvider from './context/userContextProvider'
import './App.css'

function App() {


  return (
    <UserContextProvider>
      <h1>Simple State Management using API Context</h1>
      <Login/>
      <Profile/>

    </UserContextProvider>
  )
}

export default App
