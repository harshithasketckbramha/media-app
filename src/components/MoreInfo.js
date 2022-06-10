import axios from 'axios';
import Home from './Home';
// import "../App.css"
import YouTube from 'react-youtube';
import React, { useEffect, useState } from 'react'
import { css } from "@emotion/react";
import { useNavigate, useParams } from 'react-router-dom';
import ClipLoader from "react-spinners/ClipLoader";  //from react-spinner
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import StarIcon from '@mui/icons-material/Star';

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

  const navigate=useNavigate()
  const[post,setpost]=useState([])

  //to set video
  const[video,setvideos]=useState([])
  const[data,setdata]=useState(false)

  //materailui-modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //loading
  const [loading,setloading]=useState(false)

  //to get params useparams and use it where required
  let {id}=useParams()
  console.log(id);

  //spinner css
  const override = css`
  display:block;
  margin:0 auto;
`;

//css for youtube
const opts = {
  height: '350',
  width: '330',
};

  
// console.log(id);
console.log(post);

//fetch access
useEffect(()=>{
  const check=localStorage.getItem("users")
  console.log(check)
  if(check === null){
    navigate('/login')
  }
},[])

useEffect(()=>{
fetchPost()
videoFetch()
  },[])

  //to fetch data based on id
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

  //to fetch data for video on particualr id
  const videoFetch=async()=>{
    try{
      const response=await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=84bf934f6f348e09a8de2b9b556c09ae`)
      // console.log(response.data.results[1]);
      setvideos(response.data.results)
      setloading(true)

    }catch(error){
      console.log(error);
    }
  }
console.log(video);
let newVideo=[]
video.forEach((val,i)=>{
  
  if(val.type==="Trailer"){
    
    newVideo.push(val)
  }
})
console.log(newVideo);

 return (
   <div className='hello'>
     {data ? (
       <div >
 <div className='card hello bg-black'style={{maxHeight:"100%"}} >
       <div className="row no-gutters">
       <div className="col-md-4 ">
      <img src={API_IMG+post.poster_path} className="col-12 image"/>
       </div>
       <div className="col-md-8">
       <div className='card-body text-white'>
       <h2 className="card-title">Title:{post.title}</h2>
       <h4 className="card-text">{post.tagline}</h4>
       <h4 className="card-text try"> <StarIcon/>{post.vote_average}</h4>
       <h4>overview</h4>
       <p className="card-text">{post.overview}</p><Button onClick={handleOpen} color="primary" variant='contained'>Watch Trailer</Button>
<button className='btn btn-success m-2' onClick={()=>{
       navigate("/home")
       }}>Back</button> </div>
</div> 

       {open ? (
    <div>
      
      <Modal
        open={open}>
        <Box sx={style}>
          {loading ? <YouTube videoId={newVideo[0].key} opts={opts}/>:
          <ClipLoader loading={loading} color="FFFFFF" size={20}/>
          }
        
        
        
          <Button onClick={handleClose} variant="contained" color="secondary">close</Button>
        </Box>
      </Modal>
    </div>
  )
:""}
       

       </div>
       </div>
        </div>
     ):<ClipLoader color="D0021B" loading={post}  css={override} size={50} />}
       </div>
 )
      }
export default MoreInfo
