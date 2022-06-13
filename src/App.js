import logo from './logo.svg';
import React from "react"
import './App.css';
import {BrowserRouter, Route, Router, Routes, useParams } from 'react-router-dom';
import Home from './components/Home';
import MoreInfo from './components/MoreInfo';
import ErrorPage from './components/ErrorPage';
import Login from './components/Login';
import { useEffect, useState } from 'react';
import Welcome from './components/Welcome';
import Navbars from '../src/components/NavBar/Navbar';




function App() {
  const[islogin,setisLogin]=useState(false)

useEffect(()=>{
  const access=localStorage.getItem("users");
  console.log(access);
  access && JSON.stringify(access)? setisLogin(true):setisLogin(false)
},[])



 return <BrowserRouter>


  <Routes>
      <> 
      <Route path="/" element={<Welcome/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path=":id" element={<MoreInfo/>} />  
      <Route path="/navbar" element={<Navbars/>}/>
      <Route path="*" element={<ErrorPage/>}/>
      </>
   
 
   
  </Routes>
  </BrowserRouter>
}

export default App;
