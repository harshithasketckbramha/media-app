// import React, { useState } from 'react'
// import "../App.css"
// import { Modal,show,Button} from 'react-bootstrap';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { Box, Grid } from '@mui/material';
// import { useNavigate, useParams } from 'react-router-dom';
// import MoreInfo from './MoreInfo';

// const API_IMG="https://image.tmdb.org/t/p/w300/"

// function Movies({title, poster_path, vote_average, release_date, overview,id}) {
//     // const[more,setmore]=useState(false)
//  let navigate=useNavigate()
//  console.log(id);
  

//   return (
//     <div className='col-3 p-2  d-inline-block justify-content-md-evenly'>
//     <div className="card" >
//   <img src={API_IMG+poster_path} className="card-img-top" alt="poster"/>
//   <div className="card-body">
//     <h6 className="card-title">{title}</h6>
//    <button className='btn btn-primary' onClick={()=>{
//      navigate(`${mores.id}`)
//    }}>More</button>
//   </div>
// </div>
// </div>
  
//   )

// }

// export default Movies