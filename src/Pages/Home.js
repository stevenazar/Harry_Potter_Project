import React, { useState } from 'react';
import Post from './Post';
import Card from '../components/Card';
import axios from 'axios';
import DarkSideTheme from '../components/Theme';
const Home = () => {
    
    const [searchTerms, setSearchTerms] = useState('');
    return(
        <div className="home">
            
            <Post />
        </div>
    )
}
export default Home