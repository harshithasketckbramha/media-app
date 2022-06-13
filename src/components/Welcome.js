import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import Header from './Header'

function Welcome() {
  useEffect(()=>{
    const token=localStorage.getItem("users")
    if(token===true){
      Navigate("/home")
    }
  })
  return (
    <div>
        <Header/>
        <img className="high" src={"https://miro.medium.com/max/1400/1*5lyavS59mazOFnb55Z6znQ.png"} />
    </div>
  )
}

export default Welcome