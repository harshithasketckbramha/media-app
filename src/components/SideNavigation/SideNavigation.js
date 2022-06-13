import { MovieCreation } from '@mui/icons-material';
import axios from 'axios';
import React from 'react'
import { Button, ButtonGroup } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
// import SplitButton from 'react-bootstrap/SplitButton';



function SideNavigation(props) {
const {movie,setMovies}=props


const NOW_PLAYING_API="https://api.themoviedb.org/3/movie/now_playing?api_key=84bf934f6f348e09a8de2b9b556c09ae&page=1"
const LATEST_API="https://api.themoviedb.org/3/movie/latest?api_key=84bf934f6f348e09a8de2b9b556c09ae&language=en-US"
const POPULAR_API="https://api.themoviedb.org/3/movie/popular?api_key=84bf934f6f348e09a8de2b9b556c09ae&language=en-US&page=1"
const TOP_RATED_API="https://api.themoviedb.org/3/movie/top_rated?api_key=84bf934f6f348e09a8de2b9b556c09ae&page=1"
const UPCOMING_API="https://api.themoviedb.org/3/movie/upcoming?api_key=84bf934f6f348e09a8de2b9b556c09ae&page=1"

//sorting movie list by rating(from high rating to low rating)
const highLow=()=>{
        const a=movie.sort((a,b)=>{
          return b.vote_average - a.vote_average
        })
           console.log(a);
           const ab=movie.map((val,i)=>{
             return val
           })
           console.log(ab);
           setMovies(ab)
        }

//sorting movie list by rating(from low rating to high rating)
        const Lowhigh=()=>{
            const b=movie.sort((a,b)=>{
              return a.vote_average - b.vote_average
            })
               console.log(b);
            
               const ba=movie.map((val,i)=>{
                 return val
               })
               console.log(ba);
               setMovies(ba)
          }

          //api call to get now playing movies
        const NowPlaying=async()=>{
            try{
                const res=await axios.get(NOW_PLAYING_API)
                console.log(res.data.results);
                setMovies(res.data.results)
            }catch(error){
                console.log(error);
            }

        }

        //api call to get latest movies
        const latest=async()=>{
            try{
                const res=await axios.get(LATEST_API)
                console.log(res.data);
                setMovies([res.data])
                console.log(movie);
            }catch(error){
                console.log(error);
            }
        }

        //api function call to get popular movies
        const Popular=async()=>{
            try{
                const resp=await axios.get(POPULAR_API)
                console.log(resp.data.results);
                setMovies(resp.data.results)
            }catch(error){
                console.log(error);
            }
        }


    //api function call to get top rated movies
        const TopRated=async()=>{
            try{
                const resp=await axios.get(TOP_RATED_API)
                console.log(resp.data.results);
                setMovies(resp.data.results)
            }catch(error){
                console.log(error);
            }
        }

        //api call to get upcoming movies
        const Upcoming=async()=>{
            try{
                const resp=await axios.get(UPCOMING_API)
                console.log(resp.data.results);
                setMovies(resp.data.results)
            }catch(error){
                console.log(error);
            }
        }

  return (
      <div>
   <Dropdown >
      <Dropdown.Toggle style={{backgroundColor:"black",border:"black" }} id="dropdown-basic">
        Categories
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={NowPlaying}>Now Playing</Dropdown.Item>
        <Dropdown.Item onClick={TopRated}>Top rated</Dropdown.Item>
        <Dropdown.Item onClick={Popular}>popular</Dropdown.Item>
        <Dropdown.Item onClick={Upcoming}>Upcoming</Dropdown.Item>    
        <Dropdown.Item onClick={latest}>Latest</Dropdown.Item>
        <div className="mb-2">
        {[ 'end'].map((direction) => (
          <DropdownButton
            as={ButtonGroup}
            style={{padding:"2vh"}}
            key={direction}
            id={`dropdown-button-drop-${direction}`}
            drop={direction}
            variant="secondary"
            title={`Sort by Rating`}
          >
            <Dropdown.Item eventKey="1" onClick={highLow}>High to low</Dropdown.Item>
            <Dropdown.Item eventKey="2" onClick={Lowhigh}>Low to high </Dropdown.Item>
           
          </DropdownButton>
        ))}
      </div>

      </Dropdown.Menu>
    </Dropdown>
  </div>
  )
}

export default SideNavigation