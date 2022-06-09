import { Button, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik';
import * as yup from 'yup';
import "../App.css"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const validationSchema = yup.object({
  name: yup.string()
  .min(4, 'Too Short!')
  .matches(/^[A-Za-z]+$/,"Cant use numbers")
  .max(25, 'Too Long!')
  .required('Required'),
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
   
});
function Login() {
  const[users,setusers]=useState([])
  const[token,setToken]=useState([])
  const[islogin,setlogin]=useState(false)
  

const navigate=useNavigate()
 
const fetchToken=async()=>{
  try{
    const response=await axios.get("https://api.themoviedb.org/3/authentication/token/new?api_key=84bf934f6f348e09a8de2b9b556c09ae")
    console.log(response.data);
    // setToken(response.data.request_token)
    const Token_Key=response.data.request_token
    localStorage.setItem("users",Token_Key)
    
  }catch(error){
    console.log(error);
  }
}
console.log(token);

// useEffect(()=>{
//   const tok=localStorage.getItem("users")
//   console.log(tok);
// },[users])

const formik = useFormik({
  initialValues: {
      name: "",
      email: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // alert("Successfully logged in")
      
      console.log(values);
     setusers([...users,values])
     fetchToken()
     navigate('/')
     setlogin(true)
     formik.resetForm({
       name:"",
       email:""
     })
     
    },
    
  });
  
console.log(users);

  console.log(users);
  return (
    <div className='disp py-5' >
    <div className='card col-4 m-auto justify-content-center mus'>
      <form  className=" d-grid justify-content-center m-5  "
      
      onSubmit={formik.handleSubmit}>
        <h3>Sign-In</h3>

      
      <TextField

      className='m-1 inp '
      style={{width:"22vw"}}
      variant='outlined'
      label="Name"
      name="name"
      value={formik.values.name}
      onChange={formik.handleChange}
      error={formik.touched.name && Boolean(formik.errors.name)}
      helperText={formik.touched.name && formik.errors.name}
    />

<TextField
      variant='outlined' 
      className='m-1'   
      label="email"
      name="email"
      value={formik.values.email}
      onChange={formik.handleChange}
      error={formik.touched.email && Boolean(formik.errors.email)}
      helperText={formik.touched.email && formik.errors.email}
    />

      <Button 
     style={{backgroundColor:"black"}}
       variant='contained'type="submit" >Submit</Button>
      </form>
    </div>
    </div>
  )
}

export default Login