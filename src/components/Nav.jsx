import React from "react";
import {useState} from "react";
import {NavLink} from "react-router-dom";
import "./Nav.css";

function Navigation() {
    const [menu, setMenu] = useState(false);
    
    const toggleBurger=()=>{   
        setMenu(!menu);
     };

    return(
        <div className = "nav">
            <div className = "NavBody">
                <div className = "HamMenu" onClick = {()=>toggleBurger()} onMouseEnter={()=>toggleBurger()}>
                  <span className = "bar"></span>
                  <span className = "bar"></span>
                  <span className = "bar"></span>  
                </div>
                <div className = "logo">
                    <h1>Verdant <span className = "littleLetters">Photography</span></h1>
                </div>
                <div>
                    <ul className = "NavLinks">
                    <li><NavLink to="/about" className = "navLink">About</NavLink></li>
                    <li><NavLink to = "/gallery" className = "navLink">Gallery</NavLink></li>
                    <li><NavLink to="/cart" className ="navLink">Cart</NavLink></li>
                    </ul> 
                </div>
                <div className= {(menu) ? "HamRev active" : "HamRev"}>
                    <ul className = "HamLinks">
                    <li className="hamL" ><NavLink to="/about" className="hamLink">About</NavLink></li>
                    <li className="hamL"><NavLink to="/gallery" className="hamLink">Gallery</NavLink></li>
                    <li className="hamL"><NavLink to="/cart" className="hamLink"> Cart </NavLink></li>
                    </ul> 
            </div>
        </div>
    </div>
    )
}
export default Navigation;