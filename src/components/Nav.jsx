import React from "react";
import {useState} from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Navigation() {
    const [menu, setMenu] = useState(false);
    
    const toggleBurger=()=>{   
        setMenu(!menu);
     };
    return(
        <div className = "nav">
            <div className = "NavBody">
                <div className = "HamMenu" onClick = {()=>toggleBurger()}>
                  <span className = "bar"></span>
                  <span className = "bar"></span>
                  <span className = "bar"></span>  
                </div>
                <div className = "logo">
                    <h1>Verdant <span className = "littleLetters">Photography</span></h1>
                </div>
                <div>
                    <ul className = "NavLinks">
                    <li className = "navLink"><Link to={"/about"}>About</Link></li>
                    <li className = "navLink"><Link to = {"/gallery"}>Gallery</Link></li>
                    <li className = "navLink"><Link to={"/cart"}>Cart</Link></li>
                    </ul> 
                </div>
                <div className= {(menu) ? "HamRev active" : "HamRev"}>
                    <ul className = "HamLinks">
                    <li className = "hamLink"><Link to={"/about"}>About</Link></li>
                    <li className = "hamLink"><Link to = {"/gallery"}>Gallery</Link></li>
                    <li className = "hamLink"><Link to={"/cart"}>Cart</Link></li>
                    </ul> 
            </div>
        </div>
    </div>
    )
}
export default Navigation;