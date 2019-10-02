import React from "react"; 
import "./style.css"; 

function Charity({liked, handleLike, id, name, image, description, website}){
    
    return(
        <div className= "charityapp">
            <h5 onClick={() => handleLike(id)}>{liked ? 'site is liked' : 'site is not liked'}</h5>
            <p>{id}</p>
            <h1>{name}</h1>
            <p>{image}</p>
            <p>{description}</p>
            <h3>{website}</h3>
            <button>Donate Now</button>
        </div>
    ); 
}

export default Charity; 
