import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import "./Login.css"
function Login() {
    const dispatch = useDispatch()
    const [user, setUser] = useState("")
    const handleClick=(e)=>{
        e.preventDefault();
        dispatch({
            type:'Add_TODO',
            payload:user,
                
        })

    }
    return (
        <div className="login">
            <img className="nav-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png" alt="Netflix Logo"></img>   

           
               <form  className="login-form">
           <input type="text" placeholder="Enter your Name" onChange={(e)=>setUser(e.target.value)}></input>  
           
            <button  onClick={(e)=>handleClick(e)}>Sign In</button>
           </form>
        
        </div>
    )
}

export default Login
