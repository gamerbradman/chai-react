import { useState ,useCallback,useRef,useEffect} from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [charAllowed,setCharAllowed]=useState(false)
  const [numAllowed,setNumAllowed]=useState(false)
  const [password,setPassword]=useState("")

  //useRef hook
  const passwordRef=useRef(null)

  const passwordGenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numAllowed) str+="1234567890"
    if (charAllowed) str+="!@#$%^&*()_+"


    for (let i = 0; i < length; i++) {
      const char = Math.floor((Math.random()*str.length))
      pass += str.charAt(char)
      
    }

    setPassword(pass)

  },[length,numAllowed,charAllowed,setPassword])


const copyPasswordToClipboard =useCallback(()=>{
  passwordRef.current?.select()
  passwordRef.current?.setSelectionRange(0,100)
  window.navigator.clipboard.writeText(password)
},[password])

useEffect(()=>{             //first thing this does is calls the passwordGenerator() function as soon as the page is loaded and reloads as the dependencies change
  passwordGenerator()
},[charAllowed,numAllowed,length,passwordGenerator])



  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-200 text-orange-500">
        <h1 className='text-black text-center my-3'>Password Changer</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
            <input 
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder="Password"
            readOnly
            ref={passwordRef}      //this one sends the reference of this input field to the passwordRef
            />
            <button 
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
            onClick={copyPasswordToClipboard}
            >copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{setLength(e.target.value)}}
            />
            <label>Length:{length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input 
            type="checkbox" 
            defaultChecked={numAllowed}
            id="numberInput"
            onChange={()=>{setNumAllowed((prev)=>!prev)}}
            />
            <label >Add Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input 
            type="checkbox" 
            defaultChecked={charAllowed}
            id="characterInput"
            onChange={()=>{setCharAllowed((prev)=>!prev)}}
            />
            <label >Add Special Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
