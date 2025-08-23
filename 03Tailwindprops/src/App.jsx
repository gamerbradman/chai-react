import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/cards'

function App() {

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Chai aur focus</h1>
      <Cards username="ayush" btnText='olaamigos' />  
      <br />
      <Cards username="riffy" btnText='click to crazy' />  
    </>
  )
}

export default App
