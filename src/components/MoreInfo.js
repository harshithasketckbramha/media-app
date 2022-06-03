import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function MoreInfo() {
  const[post,setpost]=useState([])
  const API_IMG="https://image.tmdb.org/t/p/w300/"
  let {id}=useParams()
    console.log(id);

  useEffect(()=>{
fetchPost()
  },[])

  const fetchPost=async(i)=>{
     try{
        const response=await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=84bf934f6f348e09a8de2b9b556c09ae`)
        // console.log(response.data.results);
        setpost(response)
        console.log(post);
     }catch(error){
       console.log(error);
     }
  }
 
  return (
<div>
         {post.map((val,i)=>{
        return   <div key={val.id} className='col-3 p-2  d-inline-block justify-content-md-evenly' >
        <div className="card" >
      <img src={API_IMG+val.poster_path} className="card-img-top " alt="poster"/>
      <div className="card-body m-0" >
        <p className="card-title text-monospace" >{val.adult}</p>
    </div>
    </div>
    </div>
   
      })}
      </div>
  )
}

export default MoreInfo