import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useFormik } from 'formik';
import * as yup from 'yup';
import "../App.css"


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

  const formik = useFormik({
    initialValues: {
      name: "",
      email: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className='disp py-5'>
    <div className='card col-4 m-auto justify-content-center'>
      <form  className=" d-grid justify-content-center m-5 "
      onSubmit={formik.handleSubmit}>
        <h3>Sign-In</h3>
      <TextField

      className='m-1 '
      variant='outlined'
      required
      label="Name"
      name="name"
      value={formik.values.name}
      onChange={formik.handleChange}
      error={formik.touched.name && Boolean(formik.errors.name)}
      helperText={formik.touched.name && formik.errors.name}
    />

<TextField
// style={{width:"20vw"}}
      variant='outlined'
      required
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