import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';


function Navbars(props) {
  const {movie,setMovies}=props
  const Navigate=useNavigate()
  const [login,setlogin]=useState(false)
  const[data,setdata]=useState("")


const NOW_PLAYING_API="https://api.themoviedb.org/3/movie/now_playing?api_key=84bf934f6f348e09a8de2b9b556c09ae&page=1"
const LATEST_API="https://api.themoviedb.org/3/movie/latest?api_key=84bf934f6f348e09a8de2b9b556c09ae&language=en-US"
const POPULAR_API="https://api.themoviedb.org/3/movie/popular?api_key=84bf934f6f348e09a8de2b9b556c09ae&language=en-US&page=1"
const TOP_RATED_API="https://api.themoviedb.org/3/movie/top_rated?api_key=84bf934f6f348e09a8de2b9b556c09ae&page=1"
const UPCOMING_API="https://api.themoviedb.org/3/movie/upcoming?api_key=84bf934f6f348e09a8de2b9b556c09ae&page=1"

useEffect(()=>{
  const token=localStorage.getItem("users")
  token ? setlogin(true):setlogin(false)
  console.log(token);
  console.log(login);
},[])


  //to search movies
  const handleChange=(e)=>{
     setdata(e.target.value)
     console.log(data);
    }
    
    const searchData=async(e)=>{
     try{
      const resp=await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=84bf934f6f348e09a8de2b9b556c09ae&language=en-US&query=${data}&page=1&include_adult=false`)
      setMovies(resp.data.results)
      console.log(movie);
  }catch(error){
    console.log(error);
  }
     }



  //remove token
const removeData=()=>{
  localStorage.removeItem("users")
  setlogin(false)
  Navigate("/")
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

  return (
    <Navbar bg="black" expand="lg" variant="dark">
      <Container fluid>
        <Navbar.Brand>{
          <img height="46rem" src={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAMAAAC93eDPAAAAb1BMVEUAAACxBg/lCRMlAQS4BhC1Bg/pCRN+BQvtCROrBg+uBg5tBAhpAwqJBQynBg+fBQ+WBA6QBA3UCBKDAg3aCBIoAgQfAQPOCBIsAgTBBxBTAwd4BAvHBxFhAwk/AgYcAQJKAQgVAQA2AwVaAwkMAADyQyP9AAADvElEQVR4nO2a2XLiMBREbWPLlsFaEEvArIH//8aRTMgEt2aeUE/VlPs1qsqp23eTTJZNmjRp0qRJkyb9NzrbbiR7ez1xmS/Gur4VYd2AVq8nXDlWtX4rwmYripHE5eVEXeVjzd6KMMsRwXAR1u1qzCCWXIRZWUIYmgsZQY0JikaSEfQSnfiZ8gQEmTcQhiMXIdcrqImSjXCAhFx9cBGUQid6LkJroSbEjouQmx22BjKC0ojQcRFk9zcnKAitxSYtPrkIWkMYmu9xSUHIVYfjcnunIkhbQWsQeypCq7E1NJqKkOsO9jfxXCFJCMpKdGJBRZDGYXdSVIRWOxyX4nGiJyEoqzAMCyZCroyDmhA5FUHGnCiGxaUHglQIXWRc9kwEnwwdrpC7B0LLQfBliYtLcQoILQchOGFwhXQDguQg+DHhluDE1p+YSzkOQyIEX5aRxcU7MVc0BN116IQlIvhksD0uLn5cLhQwJEMwrsXWcMoWmoXgk6GLLi4L7Rk4CMGJyD3/ejQQhnQIxkXG5e1mtGYheCfwTtPIvTVjJxIhhLK0deSef7TgREoEp3GF9J3baBJCcCKyuGx7y0LIPYKtcVwK142TIRnCn5yQzo6SIR2CL0vbR5wIYZCSgxBqIjIuu+AEJQo+GbTpDHanfHCCgjA4UcMKWSzdqCaSIviErCJfB0ZOpEN4OGERoaxfnUiN4GBcFqs6OEFBeDiBj7GDEz+SISmCD4PdoxO74AQFYXDCXrA1FH5O/EiGlAjBCXPpcZN+dSItgg/DPoMgiIPvThyE4IS+ZdgaCj8nFAchOHHL5uiEdjwE5RFmeM8/+JqQFATvhDpmGT4BFpaG4MPgEfaxxeW3E6kRpEc4R+40PQshl234SBnZ3344kRwhPDd+IkLVacVBaAeEDJ1Y1d9OpEbIBwSLraGzmopwgqoUpXsmQ2KEvHo8PUdul75HUxHqyLi0XIRT5DHWfSVDcoT54y+4uHgnJBUBx6XQX06wEDZYE4cvJ1gIGT4BCjbCMTIuH8lAQ8gwCttHMvAQIncaq7kIR7znS8NFiIzLpZVcBPxOUwxjgohwwYSsDBchNi5ty0XA7zRFuN0yEdZYljvNRcgi3y4tGQEXF+F3WCrCGWvioLgIESdWbAR8cRFVy0WI3POXMjVC+YKQ4S9jiyRRqH7ruUE/dfPJILyaRgwKrWHzVoT1riwrqa3r58f96eN8jx26bz73i94aWR5WnqV4L8J1cdrco/83rvv1Y9+f34owadKkSZMmTZr0D/ULeSRKohiJmBUAAAAASUVORK5CYII="}></img>
        }<span>NETFLIX</span></Navbar.Brand>

        {login ? (
          <>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link onClick={()=>{Navigate("/home")}}>Home</Nav.Link>
            <NavDropdown title="Categories" id="navbarScrollingDropdown">
            <Dropdown.Item onClick={NowPlaying}>Now Playing</Dropdown.Item>
        <Dropdown.Item onClick={TopRated}>Top rated</Dropdown.Item>
        <Dropdown.Item onClick={Popular}>popular</Dropdown.Item>
        <Dropdown.Item onClick={Upcoming}>Upcoming</Dropdown.Item>    
        <Dropdown.Item onClick={latest}>Latest</Dropdown.Item>
            </NavDropdown>
            <NavDropdown title="Sort by Ratings" id="navbarScrollingDropdown">
            <Dropdown.Item eventKey="1" onClick={highLow}>High to low</Dropdown.Item>
            <Dropdown.Item eventKey="2" onClick={Lowhigh}>Low to high </Dropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={handleChange}
            />
            <Button 
             onClick={searchData}
             style={{backgroundColor:"black",border:"2px solid black"}}
         name="data"
         value={data}>Search</Button>
            <Button onClick={removeData}
            style={{backgroundColor:"black",border:"2px solid black"}}>Logout</Button>
          </Form>
        </Navbar.Collapse>
        
          </>
        ):<>
         <Button onClick={()=>{
           Navigate("/login")
         }}>Login</Button>
        </>}
        
      </Container>
    </Navbar>
  );
}

export default Navbars;