import React,{useState} from "react";
import {Grid, Paper, Avatar, TextField, Checkbox, FormControlLabel, Button, Typography, Link} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Formik, Form, Field, ErrorMessage } from 'formik'
//import * as Yup from 'yup'



const Login = ({handleChange}) => {
  const avatarStyle={backgroundColor:'#1877f2'}
  const paperStyle={padding:20, height:'78vh', width:380, margin:"0px auto"}
  const headerStyle = {margin:20}
  const btnstyle = {margin:'8px 0',padding:10}
    const[name,setName] = useState("")
    const[email,setEmail] = useState("")
    const[password,setPassword] = useState("")
    const collectData=()=>{
        console.warn(name,email,password)
    }

  return (
    <Grid>
      <Paper style={paperStyle}>
            <Grid align='center'>
                <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                <h2 style={headerStyle}>Sign In</h2>
            </Grid>
            <TextField label='Username' placeholder="Enter Username" fullWidth />
            <TextField label='Password' placeholder="Enter Password" type='password' fullWidth />
            <FormControlLabel control={<Checkbox name="checkedB" color="primary" /> } label="Remember me"/>
            <Button type="submit" color="primary" variant="contained" fullWidth href="/products" style={btnstyle}>Sign in</Button>
            <Typography>
                <Link href="#" >
                Forgot password?
                </Link> 
            </Typography>
            <Typography> Do you have an account?
                <Link href="#" onClick={()=>handleChange("event",1)} >
                Sign Up?
                </Link> 
            </Typography>

        </Paper>
    </Grid>
    // <div className="register">
    //   <form
    //     style={{
    //       margin: "auto",
    //       padding: "15px",
    //       maxWidth: "400px",
    //       alignContent: "center",
    //     }}
    //   >
    //   <h1>Register</h1> <br/>
    //   <label htmlFor="name" > İsim </label>
    //   <input id="name"  type="text" placeholder="Enter Name" 
    //   value={name} onChange={(e) => setName(e.target.value)}
    //   />
    //   <label htmlFor="email" > Email </label>

    //   <input id="email" type="text" placeholder="Enter Email" 
    //   value={email} onChange={(e) => setEmail(e.target.value)}
    //   />
    //   <label htmlFor="password"> Şifre </label>

    //   <input id="password" type="text" placeholder="Enter Password" 
    //   value={password} onChange={(e) => setPassword(e.target.value)}
    //   />
    //   <button onClick= {collectData} className="appButton" type="button">Sign Up</button>
    //   </form>

    // </div>
  )
}

export default Login
