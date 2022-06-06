import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { css } from "@emotion/react";
import Header from './Header'
import Movies from './Movies'
import ClipLoader from "react-spinners/ClipLoader";
// import { FormControl,Button } from 'react-bootstrap';


const API_URL="https://api.themoviedb.org/3/movie/popular?api_key=84bf934f6f348e09a8de2b9b556c09ae"
const API_IMG="https://image.tmdb.org/t/p/w300/"

function Home(props) {

  let navigate=useNavigate()
    const[movie,setMovies]=useState([])
    const[load,setload]=useState(false)
    const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
   
useEffect((props)=>{
    fetch(API_URL)
},[])

const fetch= async()=>{
    try{
        const response=await axios.get(API_URL)
        const data=response.data
        setMovies(data.results)
        setload(true)
        
    }catch(error){
console.log(error);
    }
}



  return (
    <div>
      <Header movie={movie} setMovies={setMovies}/>
      {load ? (
        <div>
          {movie.map((val,i)=>{
        return   <div key={val.id} className='col-3 p-1  d-inline-block justify-content-md-evenly' >
        <div className="card" >
      <img src={API_IMG+val.poster_path} className="card-img-top " alt="poster"/>
      <div className="card-body" >
        <p className="card-title text-monospace" >{val.title}</p>
       <button className='btn btn-primary' onClick={()=>{
         navigate(`${val.id}`)
       }}>More</button>
      </div>
    </div>
    </div>
      })}  
    </div>
      )
  :<ClipLoader color="D0021B" loading={load}  css={override} size={100} />}
   </div>
  )
}

export default Home

