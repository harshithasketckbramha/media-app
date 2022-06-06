import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Router, Routes, useParams } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import MoreInfo from './components/MoreInfo';
import ErrorPage from './components/ErrorPage';


function App() {
 return <BrowserRouter>

  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path=":id" element={<MoreInfo/>} />  
    <Route path="/header" element={<Header/>}/>
    <Route path="*" element={<ErrorPage/>}/>
  </Routes>
  </BrowserRouter>
}

export default App;
