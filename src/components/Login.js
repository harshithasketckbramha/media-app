import { Button, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
// import { useFormik } from 'formik';
// import * as yup from 'yup';
import "../App.css"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';




// const validationSchema = yup.object({
//   name: yup.string()
//   .min(4, 'Too Short!')
//   .matches(/^[A-Za-z]+$/,"Cant use numbers")
//   .max(25, 'Too Long!')
//   .required('Required'),
//   email: yup
//     .string('Enter your email')
//     .email('Enter a valid email')
//     .required('Email is required'),
   
// });
function Login() {
  const[users,setusers]=useState({
    name:"",
    email:""
  })
  const[token,setToken]=useState([])
  const[nameErr,setnameErr]=useState("")
  const[emailErr,setemailErr]=useState("")
  const[nameVal,setnameVal]=useState(true)
  const[emailVal,setemailVal]=useState(true)
  const[islogin,setlogin]=useState(false)
  const navigate=useNavigate()
 

console.log(token);


const handleChange=(e)=>{
setusers({
  ...users,
  [e.target.name]:e.target.value
})
}

const handleSubmit=(e)=>{
e.preventDefault()
console.log(users);
const isnameValid=validateName(users.name)
const isemailValid=validateEmail(users.email)
if(isnameValid && isemailValid){
  // alert("success")
  const fetchToken=async()=>{
    try{
      const response=await axios.get("https://api.themoviedb.org/3/authentication/token/new?api_key=84bf934f6f348e09a8de2b9b556c09ae")
      console.log(response.data);
      setToken(response.data.request_token)
      const Token_Key=response.data.request_token
      localStorage.setItem("users",Token_Key)
    
      
    }catch(error){
      console.log(error);
    }
  }
  navigate("/home")
 fetchToken()
}
}


const validateName=(name)=>{
  const name_regex = /^[a-zA-Z ]{2,30}$/;
if(name==""){
setnameVal(false)
setnameErr("Name cant be empty")
return false
}if(!name_regex.test(name)){
  setnameVal(false)
  setnameErr("Enter name")
  return false
}else{
  setnameErr("")
  return true
}
}

const validateEmail=(email)=>{
  const email_regex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
if(email===""){
  setemailVal(false)
  setemailErr("Email cannot be empty")
  return false
}else if(!email_regex.test(email)){
setemailVal(false)
setemailErr("Enter proper Email")
}else{
  setemailErr("")
  return true
}
}

  
console.log(users);

  console.log(users);
  return (
    <div className='disp py-5' >
    <div className='card col-4 m-auto justify-content-center mus'>
      <form  className=" d-grid justify-content-center m-5  "
      
      onSubmit={handleSubmit}
      >
        <h3>Sign-In</h3>

      
      <TextField

      className='m-1 inp '
      style={{width:"22vw"}}
      variant='outlined'
      label="Name"
      name="name"
      value={users.name}
      onChange={handleChange}
      />
{!nameVal ? <span style={{color:"red",fontsize:"px"}}>{nameErr}</span>:
null}
<TextField
      variant='outlined' 
      className='m-1'   
      label="email"
      name="email"
      value={users.email}
      onChange={handleChange}
      // error={formik.touched.email && Boolean(formik.errors.email)}
      // helperText={formik.touched.email && formik.errors.email}
    />
{!emailVal ? <span style={{color:"red",fontsize:"px"}}>{emailErr}</span>:
null}
      <Button 
     style={{backgroundColor:"black"}}
       variant='contained'type="submit" >Submit</Button>
      </form>
    </div>
    </div>
  )
}

export default Login