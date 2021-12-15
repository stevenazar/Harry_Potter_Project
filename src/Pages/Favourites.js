import React from 'react';

import { useState, useEffect } from 'react';
import Card from '../components/Card';
const Favourites = () => {
    const [favorite, setFavotite] = useState(JSON.parse(localStorage.getItem('favoris')));
   
    useEffect(()=> {
        console.log(favorite)
    }, []);
    
    return (
        <div className="container_fav">
           <p className="text_favoris">Vos favoris</p> 
           {favorite.map((perso)=>(
               <div className="home">
                    <div className="card_favourites">
                        <div className="post" key={perso.id}>
                            <span className="postTitle">{perso.name}</span>
                            <img src={perso.image} alt="picture" className="postImg"></img>
                            <p className="posthouse">{perso.house}</p>
                            <p className="postgender">{perso.gender}</p>
                            <button className="cardButton">Read more</button>
                            <button className="cardButton">Suppression</button>
                        </div>
                    </div>
                </div>
           ))}
        </div>
    )
}
export default Favourites