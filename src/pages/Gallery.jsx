import React from 'react';
import { Link } from 'react-router-dom';

function Gallery() {
    return(
        <>
            <Link to={"/cart"}>Cart</Link>
            <Link to={"/about"}>About Us</Link>
            <h1>Gallery</h1>
        </>
    );
}
export default Gallery;