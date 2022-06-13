import logo from './logo.svg';
import React from "react"
import './App.css';
import {BrowserRouter, Route, Router, Routes, useParams } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import MoreInfo from './components/MoreInfo';
import ErrorPage from './components/ErrorPage';
import Login from './components/Login';
import { useEffect, useState } from 'react';
import Welcome from './components/Welcome';
import SideNav from './components/SideNav/SideNav';
import SideNavigation from './components/SideNavigation/SideNavigation';




function App() {
  const[islogin,setisLogin]=useState(null)

useEffect(()=>{
  const access=localStorage.getItem("users");
  console.log(access);
  access && JSON.stringify(access)? setisLogin(true):setisLogin(false)
},[])



 return <BrowserRouter>


  <Routes>
   
    {/* <SideNav/> */}
      <> 
      <Route path="/" element={<Welcome/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path=":id" element={<MoreInfo/>} />  
      <Route path="/header" element={<Header/>}/>
      <Route path="/sideNav" element={<SideNav/>}/>
      <Route path="/sideNavigation" element={<SideNavigation/>}/>
      <Route path="*" element={<ErrorPage/>}/>
      </>
   
 
   
  </Routes>
  </BrowserRouter>
}

export default App;
