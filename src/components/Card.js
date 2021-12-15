import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
const Card = (props) => {
     

    const { perso } = props;

    

    const handleFavourites = (actor) => {
        console.log(actor);
       
        const currentFavorites = localStorage.getItem('favoris') 
            ? JSON.parse(localStorage.getItem('favoris')) 
            : []
        console.log(currentFavorites);
        const isPresent = currentFavorites.map(e => e.name).indexOf(actor.name);
        console.log(isPresent);
        if(isPresent === -1){
            currentFavorites.push(actor);
            localStorage.setItem('favoris', JSON.stringify(currentFavorites));
        }else{
            const filteredActor = currentFavorites.filter(
                peros => peros.name !== actor.name
            )
            console.log(filteredActor);
            localStorage.setItem('favoris', JSON.stringify(filteredActor));
        }
   
        
        

    }

    return (
        <div className="card">
            <div className="post" key={perso.id}>
                <span className="postTitle">{perso.name}</span>
                <img src={perso.image} alt="rien" className="postImg"></img>
                <p className="posthouse">{perso.house}</p>
                <p className="postgender">{perso.gender}</p>
                <button className="cardButton">Read more</button>
                <div className="fav_button">
                    <button className="cardButton" onClick={() => handleFavourites({id: perso.id, name: perso.name, image: perso.image, gender: perso.gender, house: perso.house})}>Add to favourites</button>
                </div>
            </div>
            
        </div>
    )
}
export default Card