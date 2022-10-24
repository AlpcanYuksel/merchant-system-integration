import React,{useState} from "react";
import './SignUp.css'


const SignUp = () => {
    const[name,setName] = useState("")
    const[email,setEmail] = useState("")
    const[password,setPassword] = useState("")
    const collectData=()=>{
        console.warn(name,email,password)
    }
  return (
    <div className="register">
      <form
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center",
        }}
      >
      <h1>Register</h1> <br/> <br/> <br/>
      <label htmlFor="name"> İsim </label>
      <input id="name" className="inputBox" type="text" placeholder="Enter Name" 
      value={name} onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="email" > Email </label>

      <input id="email" className="inputBox" type="text" placeholder="Enter Email" 
      value={email} onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="password"> Şifre </label>

      <input id="password" className="inputBox" type="text" placeholder="Enter Password" 
      value={password} onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick= {collectData} className="appButton" type="button">Sign Up</button>
      </form>

    </div>
  )
}

export default SignUp
