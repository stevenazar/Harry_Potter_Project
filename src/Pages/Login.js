import React from 'react';
import facebook from '../img/facebook.png';
import github from '../img/github.png';
import google from '../img/google.png';
import firebase from 'firebase';
import { useAuth } from 'firebase-react-hooks/auth';
import { auth } from '../firebase';
import { useState } from 'react';



const Login = () => {
    const logInGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider)
        .then((response)=>{
            console.log(response);
        })
        .catch((error)=>{
            console.log(error);
        })
    }
    // authentification via email 
    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    //fonction d'inscription
    const Signup = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(
            registerEmail,
            registerPassword
        ).then(user => {
            console.log(user)
        }).catch(error =>{
            console.log(error.message)
        })
    }

    const Signin = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(
            registerEmail,
            registerPassword
        ).then(user => {
            console.log(user)
        }).catch(error => {
            console.log(error.message);
        })
    }
    

    
    return(
        <div className="login">
            <h1 className="title">Choose a login Method</h1>
            <div className="wrapper">
                <div className="left">
                    <div className="loginButton google">
                        <button className="google_button" onClick={logInGoogle}>
                            <img src={google} alt="google" className="icon_google"></img>
                            <span className="google_title">Google</span></button>
                        
                    </div>
                    <div className="loginButton facebook">
                        <img src={facebook} alt="facebook" className="icon"></img>
                        Facebook
                    </div>
                    <div className="loginButton github">
                        <img src={github} alt="github" className="icon"></img>
                        Github
                    </div>
                </div>
                <div className="center">
                    <div className="line"></div>
                    <div className="or">OR</div>
                </div>
                <div className="right">
                    <input type="text" placeholder="Username" onChange={(e) => {setRegisterEmail(e.target.value)}}></input>
                    <input type="password" placeholder="Password" onChange={(e) => {setRegisterPassword(e.target.value)}}></input>
                    <button className="submit" onClick={Signin}>Login</button>
                    <h6>Not yet register ?<span className="sign_in" onClick={Signup}> Sign up</span></h6>
                </div>

            </div>
        </div>

    )
}
export default Login