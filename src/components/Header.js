import  React, { useEffect, useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Button, ButtonBase } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import SideNav from './SideNav/SideNav';
// import { Button } from 'bootstrap';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));


export default function Header(props) {
  const {movie,setMovies}=props
  const navigate=useNavigate()
const[data,setdata]=useState("")
const[log,setlog]=useState(null)

//accessing from localstorage
useEffect(()=>{
  const logs=localStorage.getItem("users")
  console.log(logs);
  logs ? setlog(true):setlog(false)
})
//remove token
const removeData=()=>{
  localStorage.removeItem("users")
  setlog(false)
  navigate("/")
}
//to search movies
  const handleChange=(e)=>{
  //takes value 
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

  
  return (
    <Box sx={{ flexGrow: 2 }}>
      <AppBar position="static" style={{backgroundColor:"black"}}>
        <Toolbar>
          <img height="46rem" src={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAMAAAC93eDPAAAAb1BMVEUAAACxBg/lCRMlAQS4BhC1Bg/pCRN+BQvtCROrBg+uBg5tBAhpAwqJBQynBg+fBQ+WBA6QBA3UCBKDAg3aCBIoAgQfAQPOCBIsAgTBBxBTAwd4BAvHBxFhAwk/AgYcAQJKAQgVAQA2AwVaAwkMAADyQyP9AAADvElEQVR4nO2a2XLiMBREbWPLlsFaEEvArIH//8aRTMgEt2aeUE/VlPs1qsqp23eTTJZNmjRp0qRJkyb9NzrbbiR7ez1xmS/Gur4VYd2AVq8nXDlWtX4rwmYripHE5eVEXeVjzd6KMMsRwXAR1u1qzCCWXIRZWUIYmgsZQY0JikaSEfQSnfiZ8gQEmTcQhiMXIdcrqImSjXCAhFx9cBGUQid6LkJroSbEjouQmx22BjKC0ojQcRFk9zcnKAitxSYtPrkIWkMYmu9xSUHIVYfjcnunIkhbQWsQeypCq7E1NJqKkOsO9jfxXCFJCMpKdGJBRZDGYXdSVIRWOxyX4nGiJyEoqzAMCyZCroyDmhA5FUHGnCiGxaUHglQIXWRc9kwEnwwdrpC7B0LLQfBliYtLcQoILQchOGFwhXQDguQg+DHhluDE1p+YSzkOQyIEX5aRxcU7MVc0BN116IQlIvhksD0uLn5cLhQwJEMwrsXWcMoWmoXgk6GLLi4L7Rk4CMGJyD3/ejQQhnQIxkXG5e1mtGYheCfwTtPIvTVjJxIhhLK0deSef7TgREoEp3GF9J3baBJCcCKyuGx7y0LIPYKtcVwK142TIRnCn5yQzo6SIR2CL0vbR5wIYZCSgxBqIjIuu+AEJQo+GbTpDHanfHCCgjA4UcMKWSzdqCaSIviErCJfB0ZOpEN4OGERoaxfnUiN4GBcFqs6OEFBeDiBj7GDEz+SISmCD4PdoxO74AQFYXDCXrA1FH5O/EiGlAjBCXPpcZN+dSItgg/DPoMgiIPvThyE4IS+ZdgaCj8nFAchOHHL5uiEdjwE5RFmeM8/+JqQFATvhDpmGT4BFpaG4MPgEfaxxeW3E6kRpEc4R+40PQshl234SBnZ3344kRwhPDd+IkLVacVBaAeEDJ1Y1d9OpEbIBwSLraGzmopwgqoUpXsmQ2KEvHo8PUdul75HUxHqyLi0XIRT5DHWfSVDcoT54y+4uHgnJBUBx6XQX06wEDZYE4cvJ1gIGT4BCjbCMTIuH8lAQ8gwCttHMvAQIncaq7kIR7znS8NFiIzLpZVcBPxOUwxjgohwwYSsDBchNi5ty0XA7zRFuN0yEdZYljvNRcgi3y4tGQEXF+F3WCrCGWvioLgIESdWbAR8cRFVy0WI3POXMjVC+YKQ4S9jiyRRqH7ruUE/dfPJILyaRgwKrWHzVoT1riwrqa3r58f96eN8jx26bz73i94aWR5WnqV4L8J1cdrco/83rvv1Y9+f34owadKkSZMmTZr0D/ULeSRKohiJmBUAAAAASUVORK5CYII="}></img>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            NETFLIX
          </Typography>
         
         {log ? (
           <>
           <SideNav movie={movie} setMovies={setMovies}/>
            {/* <Button 
            size='large'
            style={{color:"white"}}
            onClick={()=>{
            navigate("/home")
          }}>Home</Button> */}
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              onChange={handleChange}
             
            />
          </Search>
         <Button variant="contained"
         onClick={searchData}
         name="data"
         value={data}
         >Search</Button>
         <Button onClick={removeData} style={{color:"white"}}
          >Logout</Button></>):(
           <>
           
          <Button style={{color:"white"}} onClick={()=>{
            navigate("/login")
          }}>Login</Button>  
          </>
        )
        }
        </Toolbar>
      </AppBar>
    </Box>
  );
}




