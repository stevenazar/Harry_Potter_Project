import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import axios from 'axios';
import Card from '../components/Card';

const Post = () =>{
    

    const [data, setData] = useState([]);
    const [searchName, setSearchName] = useState('');
    const [loading, setLoading] = useState(false);
    const [filterName, setFilterName] = useState([]);
    

    useEffect(() => {
        setLoading(true);
        axios   
            .get(
                " http://hp-api.herokuapp.com/api/characters"
            )
            .then((res)=>{
                setData(res.data);
                setLoading(false);
            });
    },[]);
    // fonction de recherche 
    useEffect(()=>{
        setFilterName(
            data.filter(perso => {
                return perso.name.toLowerCase().includes(searchName.toLowerCase());
            })
        )
    }, [searchName, data]);


    const filteredName = data.filter(perso => {
            return perso.name.toLowerCase().includes(searchName.toLowerCase())
        }) 

    if(loading){
        return <p>loading...</p>
    }
    
    
    return( 
        <div className="home">
            <div className="search">
                
                <input type="text" placeholder="search..." className="input_search" onChange={(e) => {setSearchName(e.target.value)}}>

                </input>
            </div>
            {filteredName.map((perso) => (
                <div className="post">
                    <Card perso={perso} key={perso.id}/>
                </div>
            ))}
        </div>
    )
}
export default Post;