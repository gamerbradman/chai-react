import React,{useState,useContext} from 'react'
import UserContext from '../context/usercontext'
import { use } from 'react'

function Login() {
    
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")

    const {setUser}=useContext(UserContext)

    const handlesubmit=(e)=>{
        e.preventDefault()
        setUser({username,password})
    }
    


  return (
    <div>
    <h2>Login</h2>
    <input 
    type="text"
    value={username}
    placeholder='username'
    onChange={(e)=>{setUsername(e.target.value)}} />
    {"   "}
    <input 
    type="text"
    value={password}
    placeholder='password'
    onChange={(e)=>{setPassword(e.target.value)}} />

    <button onClick={handlesubmit}>Submit</button>
    
    
    
    
    </div>
  )
}

export default Login