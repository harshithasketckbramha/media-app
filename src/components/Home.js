import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { css } from "@emotion/react";
import Header from './Header'
import ClipLoader from "react-spinners/ClipLoader";


const API_URL="https://api.themoviedb.org/3/movie/popular?api_key=84bf934f6f348e09a8de2b9b556c09ae"
const API_IMG="https://image.tmdb.org/t/p/w500/"

function Home(props) {

  let navigate=useNavigate()
    const[movie,setMovies]=useState([])
    const[load,setload]=useState(false)

    //css for spinner
    const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
   
useEffect((props)=>{
    fetch(API_URL)
},[])

//fetching movie data
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
        return   <div key={val.id} className='col-3 p-1 new d-inline-block justify-content-evenly' >
        <div className="card" >
      <img src={API_IMG+val.poster_path} onClick={()=>{
         navigate(`/${val.id}`)  
       }}className="card-img-top " alt="poster"/>
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

