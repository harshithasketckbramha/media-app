import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Router, Routes, useParams } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import MoreInfo from './components/MoreInfo';
import ErrorPage from './components/ErrorPage';
import Login from './components/Login';
import { useEffect, useState } from 'react';
import Welcome from './components/Welcome';



function App() {
  const[islogin,setisLogin]=useState(null)

useEffect(()=>{
  const access=localStorage.getItem("users");
  console.log(access);
  access && JSON.stringify(access)? setisLogin(true):setisLogin(false)
},[])



 return <BrowserRouter>


  <Routes>
    {!islogin ? (
      <>
     <Route path="/" element={<Welcome/>}/>
     <Route path="/login" element={<Login/>}/>
     <Route path="*" element={<ErrorPage/>}/>
      </>
    ):

    (
      <> 
      <Route path="/" element={<Welcome/>}/>
      <Route path="/home" element={<Home/>}/>
    <Route path=":id" element={<MoreInfo/>} />  
    <Route path="/header" element={<Header/>}/>
    {/* <Route path="*" element={<ErrorPage/>}/> */}
      </>
    )}
 
   
  </Routes>
  </BrowserRouter>
}

export default App;
