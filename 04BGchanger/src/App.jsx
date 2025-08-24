import { useState } from 'react'

import './App.css'

function App() {
  const [color, setColor] = useState("green")

  return (
    <>
      <div className="w-full  h-screen duration-200" 
      style={{background:color}}
      >
          <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 '>
              <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
                  
                  <button 
                  onClick={()=>{setColor("red")}}
                  className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
                  style={{backgroundColor: "red"}}
                  >RED</button>
                  <button 
                  onClick={()=>{setColor("lavender")}}
                  className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
                  style={{backgroundColor: "lavender"}}
                  >LAVENDER</button>

                  <button 
                  onClick={()=>{setColor("PINK")}}
                  className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
                  style={{backgroundColor: "pink"}}
                  >PINK</button>

                  <button 
                  onClick={()=>{setColor("brown")}}
                  className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
                  style={{backgroundColor: "brown"}}
                  >BROWN</button>

                  <button 
                  onClick={()=>{setColor("beige")}}
                  className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
                  style={{backgroundColor: "beige"}}
                  >BEIGE</button>

                  

                  <button 
                  onClick={()=>{setColor("blue")}}
                  className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
                  style={{backgroundColor: "blue" }}
                  >BLUE</button>

              </div>
          </div>
      </div>

      
  </>
  )
}

export default App
