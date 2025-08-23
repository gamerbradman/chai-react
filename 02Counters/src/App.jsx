import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(0)       //useState is a hook that gives two variables, one containing any value and the second a function that can change the first value, names can be anything;
  const [message,setMessage]=useState("")

const addvalue=()=>{
  // setCount(count+1)
  setMessage("")
  
  count=count+1
  setCount(count)                 //the work of the setCount is to update the value of count
}


const reduceValue=()=>{
  if (!count==0){
  setCount(count-1)
  
  }else{
  setMessage("cant go in the negative")
  }
}


  return (
    <>
     <h1>chai aur code</h1>
     <h2>Count:{count}</h2>
     <button onClick={addvalue} > Add value </button>
     <br />
     <br />
     <button onClick={reduceValue}>Reduce Value</button>
     <footer>{message}</footer>
     <footer>{count}</footer>
    </>
  )
}

export default App
