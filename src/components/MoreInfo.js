import axios from 'axios';
import Home from './Home';
import YouTube from 'react-youtube';
import React, { useEffect, useState } from 'react'
import { css } from "@emotion/react";
import { useNavigate, useParams } from 'react-router-dom';
import ClipLoader from "react-spinners/ClipLoader";  //from react-spinner
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'black',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};



function MoreInfo() {
  const API_IMG="https://image.tmdb.org/t/p/w300/"
  const youtube=`https://www.youtube.com/watch?v=`
  const navigate=useNavigate()
  const[post,setpost]=useState([])
  const[video,setvideos]=useState([])
  const[data,setdata]=useState(false)

  //materailui-modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //to get params useparams and use it where required
  let {id}=useParams()

  //spinner css
  const override = css`
  display:block;
  margin: 0 auto;
`;
//css for youtube
const opts = {
  height: '320',
  width: '330',
  // playerVars: {
  //   // https://developers.google.com/youtube/player_parameters
  //   autoplay: 1,
  // },
};

  
// console.log(id);
// console.log(post);

useEffect(()=>{
fetchPost()
videoFetch()
  },[])

  
  const fetchPost=async()=>{
     try{
        const response=await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=84bf934f6f348e09a8de2b9b556c09ae`)
        // console.log(response.data.results);
       setpost(response.data)
     setdata(true)
       
     }catch(error){
       console.log(error);
     }
  }

  const videoFetch=async()=>{
    try{
      const response=await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=84bf934f6f348e09a8de2b9b556c09ae`)
      // console.log(response.data.results[1]);
      setvideos(response.data.results[1])

    }catch(error){
      console.log(error);
    }
  }
//  console.log(post);
// console.log(video.key);
 return (
   <div>
     {data ? (
       <div>
 <div className='card mb-2 'style={{maxHeight:"00%"}} >
       <div className="row no-gutters">
       <div className="col-md-4">
       <img src={API_IMG+post.poster_path}/>
       </div>
       <div className="col-md-6">
       <div className='card-body'>
       <h3 className="card-title">Title:{post.title}</h3>
       <h6 className="card-text">{post.tagline}</h6>
       <h4 className="card-text">Rating: {post.vote_average}</h4>
       <h4>overview</h4>
       <p className="card-text">{post.overview}</p>
       <Button onClick={handleOpen} color="primary" variant='contained'>Watch Trailer</Button>
       {open ? (
    <div>
      
      <Modal
        open={open}>
        <Box sx={style}>
        <YouTube videoId={video.key} opts={opts}/>
          <Button onClick={handleClose} variant="contained" color="secondary">close</Button>
        </Box>
      </Modal>
    </div>
  )
:""}
       
     
    
       <button className='btn btn-success m-2' onClick={()=>{
       navigate("/")
       }}>Back</button>
       </div>
       </div>
       </div>
       </div>

   </div>
     ):<ClipLoader color="D0021B" loading={post}  css={override} size={50} />}
       </div>
 )
      }
export default MoreInfo
