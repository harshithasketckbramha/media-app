// import axios from 'axios';
// import React, { useEffect, useState } from 'react'

// function Token() {
// useEffect(()=>{
//   fetchToken()
//   const check=localStorage.getItem("users")
//   console.log(check);
// })

//   const fetchToken=async()=>{
//   try{
//     const response=await axios.get("https://api.themoviedb.org/3/authentication/token/new?api_key=84bf934f6f348e09a8de2b9b556c09ae")
//     console.log(response.data);
//     setToken(response.data.request_token)
//     const Token_Key=response.data.request_token
//     localStorage.setItem("users",Token_Key)
  
    
//   }catch(error){
//     console.log(error);
//   }
// }
   
//   return (
//     <div>Token</div>
//   )
// }

// export default Token