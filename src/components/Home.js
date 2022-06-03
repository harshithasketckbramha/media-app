import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from './Header'
import Movies from './Movies'
// import { FormControl,Button } from 'react-bootstrap';


const API_URL="https://api.themoviedb.org/3/movie/popular?api_key=84bf934f6f348e09a8de2b9b556c09ae"
const API_IMG="https://image.tmdb.org/t/p/w300/"

function Home(props) {
    const[movie,setMovies]=useState([])
    let navigate=useNavigate()
   
useEffect((props)=>{
    fetch(API_URL)
},[])

const fetch= async()=>{
    try{
        const response=await axios.get(API_URL)
        const data=response.data
        setMovies(data.results)
        
    }catch(error){
console.log(error);
    }
}



  return (
    <div>
      <Header movie={movie} setMovies={setMovies}/>
      {movie.map((val,i)=>{
        return   <div key={val.id} className='col-3 p-2  d-inline-block justify-content-md-evenly' >
        <div className="card" >
      <img src={API_IMG+val.poster_path} className="card-img-top " alt="poster"/>
      <div className="card-body m-0" >
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
}

export default Home

