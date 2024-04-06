import React,{useState}from 'react'
import imge1 from'./kitchen.webp'
import {Link} from 'react-router-dom'
import './login.css'
import  axios  from 'axios'

export default function Login() {
  const [user,setUser]=useState(null)
const [email,setEmail]=useState(null)
const [password,setPassword]=useState(null)
const create = (e)=>{

  ;
  const data={"Username":user,
  "Email":email,
  "Password":password,
}

axios.post("http://localhost:3500/Create/User",data)
}

  return (
    <div>
   
      <form className='login'>
      <span>welcome Indian food</span>
      <h1>Create your account</h1><br></br>
    
        <label type="text"className='name'>Name:</label>
        <input type='text' className='name'value={user}required onChange={(e)=>setUser(e.target.value)}></input><br></br>
        <label type="email" className='email'>email:</label>
        <input type='email' className='email'value={email}required onChange={(e)=>setEmail(e.target.value)}></input><br></br>
        <label type="password"className='password'>password:</label>
        <input type='password'className='password'value={password}required onChange={(e)=>setPassword(e.target.value)}></input><br></br>
      
       
        <button className='sub'><Link to={"/Home"}onClick={create}>Login</Link></button>
      
      </form>
        <img src={imge1} width={"90%"} height={"660px"} className='backimg' alt='img'></img>
    </div>
  )
}
