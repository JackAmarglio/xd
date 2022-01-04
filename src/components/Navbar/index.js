import React, { useState } from "react";
import "./index.css";
import Modal from "react-bootstrap"

const Navbar = () => {
    const [showLogin, setShowLogin] = useState(false);

    return(
        <div className="container">
            <div style={{display: "flex"}}>
                <img src="assets/images/logo.png" alt="" />
                <span style={{marginLeft: "20px"}}>MULTIDOM</span>
                <span style={{marginLeft: "20px"}}>Mesteri</span>
            </div>
            <div style={{display: "flex", justifyContent: "space-between", width: "25%"}}>
                <span onClick={()=> setShowLogin(true)}>Log in</span>
                <button className="register">Register</button>
            </div>
            <Modal 
        </div>
    )
}

export default Navbar