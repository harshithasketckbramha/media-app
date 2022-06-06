import axios from 'axios';
import Home from './Home';
import React, { useEffect, useState } from 'react'
import { css } from "@emotion/react";
import { useNavigate, useParams } from 'react-router-dom';
import ClipLoader from "react-spinners/ClipLoader";

function MoreInfo() {
  const API_IMG="https://image.tmdb.org/t/p/w300/"
  const navigate=useNavigate()
  const[post,setpost]=useState([])
  const[data,setdata]=useState(false)
  let {id}=useParams()

  const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
  
`;
  
// console.log(id);
// console.log(post);

  useEffect(()=>{
fetchPost()
  },[])

  
  const fetchPost=async(i)=>{
     try{
        const response=await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=84bf934f6f348e09a8de2b9b556c09ae`)
        // console.log(response.data.results);
        setpost(response.data)
     setdata(true)
       
     }catch(error){
       console.log(error);
     }
  }
 console.log(post);
 return (
   <div>
     {data ? (
       <div>
 <div className='card mb-2'style={{maxWidth:"100%"}} >
       <div className="row no-gutters">
       <div class="col-md-4">
       <img src={API_IMG+post.poster_path}/>
       </div>
       <div className="col-md-6">
       <div className='card-body'>
       <h3 className="card-title">Title:{post.title}</h3>
       <h6 className="card-text">{post.tagline}</h6>
       <h4 className="card-text">Rating: {post.vote_average}</h4>
       <h4>overview</h4>
       <p className="card-text">{post.overview}</p>
       <button className='btn btn-success' onClick={()=>{
       navigate("/")
       }}>Back</button>
       </div>
       </div>
       </div>
       </div>

   </div>
     ):<ClipLoader color="D0021B" loading={post}  css={override} size={100} />}
       </div>
 )
      }
export default MoreInfo
