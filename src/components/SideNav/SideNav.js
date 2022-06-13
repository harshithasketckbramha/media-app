import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';



function SideNav(props) {
  const {movie,setMovies}=props
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {/* {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))} */}
        
      </List>
    </Box>
  );


  
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

  const lowHigh=()=>{
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
    <div>
  
  {['sort by ratings'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)} style={{color:"white"}}>{anchor}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {/* {list(anchor)} */}
          <img height="65rem" src={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAMAAAC93eDPAAAAb1BMVEUAAACxBg/lCRMlAQS4BhC1Bg/pCRN+BQvtCROrBg+uBg5tBAhpAwqJBQynBg+fBQ+WBA6QBA3UCBKDAg3aCBIoAgQfAQPOCBIsAgTBBxBTAwd4BAvHBxFhAwk/AgYcAQJKAQgVAQA2AwVaAwkMAADyQyP9AAADvElEQVR4nO2a2XLiMBREbWPLlsFaEEvArIH//8aRTMgEt2aeUE/VlPs1qsqp23eTTJZNmjRp0qRJkyb9NzrbbiR7ez1xmS/Gur4VYd2AVq8nXDlWtX4rwmYripHE5eVEXeVjzd6KMMsRwXAR1u1qzCCWXIRZWUIYmgsZQY0JikaSEfQSnfiZ8gQEmTcQhiMXIdcrqImSjXCAhFx9cBGUQid6LkJroSbEjouQmx22BjKC0ojQcRFk9zcnKAitxSYtPrkIWkMYmu9xSUHIVYfjcnunIkhbQWsQeypCq7E1NJqKkOsO9jfxXCFJCMpKdGJBRZDGYXdSVIRWOxyX4nGiJyEoqzAMCyZCroyDmhA5FUHGnCiGxaUHglQIXWRc9kwEnwwdrpC7B0LLQfBliYtLcQoILQchOGFwhXQDguQg+DHhluDE1p+YSzkOQyIEX5aRxcU7MVc0BN116IQlIvhksD0uLn5cLhQwJEMwrsXWcMoWmoXgk6GLLi4L7Rk4CMGJyD3/ejQQhnQIxkXG5e1mtGYheCfwTtPIvTVjJxIhhLK0deSef7TgREoEp3GF9J3baBJCcCKyuGx7y0LIPYKtcVwK142TIRnCn5yQzo6SIR2CL0vbR5wIYZCSgxBqIjIuu+AEJQo+GbTpDHanfHCCgjA4UcMKWSzdqCaSIviErCJfB0ZOpEN4OGERoaxfnUiN4GBcFqs6OEFBeDiBj7GDEz+SISmCD4PdoxO74AQFYXDCXrA1FH5O/EiGlAjBCXPpcZN+dSItgg/DPoMgiIPvThyE4IS+ZdgaCj8nFAchOHHL5uiEdjwE5RFmeM8/+JqQFATvhDpmGT4BFpaG4MPgEfaxxeW3E6kRpEc4R+40PQshl234SBnZ3344kRwhPDd+IkLVacVBaAeEDJ1Y1d9OpEbIBwSLraGzmopwgqoUpXsmQ2KEvHo8PUdul75HUxHqyLi0XIRT5DHWfSVDcoT54y+4uHgnJBUBx6XQX06wEDZYE4cvJ1gIGT4BCjbCMTIuH8lAQ8gwCttHMvAQIncaq7kIR7znS8NFiIzLpZVcBPxOUwxjgohwwYSsDBchNi5ty0XA7zRFuN0yEdZYljvNRcgi3y4tGQEXF+F3WCrCGWvioLgIESdWbAR8cRFVy0WI3POXMjVC+YKQ4S9jiyRRqH7ruUE/dfPJILyaRgwKrWHzVoT1riwrqa3r58f96eN8jx26bz73i94aWR5WnqV4L8J1cdrco/83rvv1Y9+f34owadKkSZMmTZr0D/ULeSRKohiJmBUAAAAASUVORK5CYII="}></img>
            
            <Button onClick={highLow}>High to low</Button>
            <Button onClick={lowHigh}>Low to high</Button>

          </Drawer>
        </React.Fragment>
      ))}
   </div>

  )
}

export default SideNav


