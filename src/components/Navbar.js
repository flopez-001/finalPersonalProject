import React from "react"
import soup_logo from "./soup_logo.jpg"
import Login_button from "./buttoncomponents/Login_button"


/*
    const isLoggedIn = false
    let cornerCom = isLoggedIn === true ? <ProfileIcon /> : <Login_button />
    move"isLoggedIn === true ? <ProfileIcon /> : <Login_button />" to where is says <Login_button />
*/
export default function Navbar(){
  return(
    <nav>
      <img src={soup_logo} width="50px" className="nav-logo" />
      <div className="nav_components">
        <h3>Home</h3>
        <h3>Categories</h3>
        <h3>Info</h3>
        <h3>Contact Us</h3>
      </div>
      <Login_button />

    </nav>
  )
}