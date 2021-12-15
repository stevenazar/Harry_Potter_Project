import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase';
import DarkSideTheme from './Theme';


const NavBar= ({user}) => {
    return (
        <div className="navbar">
            <span className="logo"><Link className="link" to="/">Harry Potter</Link>
            </span>{
                user? (
                    <ul className="list">
                        <li className="ListItem">
                            <img src="montagne.jpg" alt="picture" className="avatar"></img>
                        </li>
                        <li className="ListItem"></li>
                        <li className="ListItem" onClick={()=> auth.signOut()}>Logout</li>
                        <li className="ListItem"><Link className="link" to="/favourites">Favourites</Link></li>
                        <li className="ListItem"><Link className="link" to="/stripe">Stripe</Link></li>
                        
                    </ul>
                ) : (<Link className="link link_login" to="login">Login</Link>)
            }
        </div>
    )
}
export default NavBar;