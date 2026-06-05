import React from 'react';
import Navigation from '../components/Nav.jsx';
import {useSelector} from 'react-redux';
import "./Gallery.css"


function Gallery() {
    const photos = useSelector(state=> state.gallery.items);
    return(
        <>
           <Navigation/>
           <div className = "mainGallery">
            <div className="galleryContainer">
                {photos.map((item, index)=>(
                    <div className = "photoContainer" key="index">
                        <div className="imageContainer" id="item.id">
                            <img src={item.src} alt={item.description}/>
                        </div>
                        <div className="title">
                            <h3 className="photoTitle">{item.title}</h3>
                            <p className="describe">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
           </div>
        </>
    );
}
export default Gallery;