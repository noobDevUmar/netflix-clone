import React, { useEffect, useState } from 'react'
import "./Nav.css"

function Nav() {

const [show,handleshow]= useState(false)


const setTransitionBar = ()=>{
  if(window.scrollY>100){
    handleshow(true)
  }else{
    handleshow(false)
  }
}


useEffect(()=>{

window.addEventListener('scroll',setTransitionBar)
return ()=> window.removeEventListener('scroll',setTransitionBar)
  
},[])



  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <div className="nav_content">



        <img
          className='nav__logo'
          src='https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png' />


        <img
          className='nav__avatar'
          src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' />
      </div>
    </div>
  )
}

export default Nav