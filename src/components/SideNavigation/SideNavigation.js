import { MovieCreation } from '@mui/icons-material';
import axios from 'axios';
import React from 'react'
import { Button, ButtonGroup } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
// import SplitButton from 'react-bootstrap/SplitButton';



function SideNavigation(props) {
const {movie,setMovies}=props

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

        const NowPlaying=async()=>{
            try{
                const res=await axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=84bf934f6f348e09a8de2b9b556c09ae&page=1")
                console.log(res.data.results);
                setMovies(res.data.results)
            }catch(error){
                console.log(error);
            }

        }

        const latest=async()=>{
            try{
                const res=await axios.get("https://api.themoviedb.org/3/movie/latest?api_key=84bf934f6f348e09a8de2b9b556c09ae&language=en-US")
                console.log(res.data);
                setMovies([res.data])
                console.log(movie);
            }catch(error){
                console.log(error);
            }
        }

        const Popular=async()=>{
            try{
                const resp=await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=84bf934f6f348e09a8de2b9b556c09ae&language=en-US&page=1")
                console.log(resp.data.results);
                setMovies(resp.data.results)
            }catch(error){
                console.log(error);
            }
        }

        const TopRated=async()=>{
            try{
                const resp=await axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=84bf934f6f348e09a8de2b9b556c09ae&page=1")
                console.log(resp.data.results);
                setMovies(resp.data.results)
            }catch(error){
                console.log(error);
            }
        }

        const Upcoming=async()=>{
            try{
                const resp=await axios.get("https://api.themoviedb.org/3/movie/upcoming?api_key=84bf934f6f348e09a8de2b9b556c09ae&page=1")
                console.log(resp.data.results);
                setMovies(resp.data.results)
            }catch(error){
                console.log(error);
            }
        }
  return (
      <div>
   <Dropdown >
      <Dropdown.Toggle style={{backgroundColor:"black"}} id="dropdown-basic">
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