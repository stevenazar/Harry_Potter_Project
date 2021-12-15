// création de express : infrastructures de serveur web
// qui permet de créer des pages via un ensembles des reqûetes
// on appelle le serveru express
const cookieSession = require("cookie-session");
const express = require('express');
const app = express()
const passport = require("passport");
const cors = require("cors");

// création de session
app.use(cookieSession(
    {
        name: "session",
        keys: ["lama"],
        maxAge: 24 * 60 * 60 * 100
    }
));
// nous allons initialiser notre librairie 
// passport 
app.use(passport.initialize());
// nous allons initiliser les essions également
app.use(passport.session());
// les cors sont un mécanisme qui permet 
// à ajouter des en-têtes HTML
// afin de pouvoir accèder à des ressources 
// d'une autre origine que le site
// permetttra d'envoyer des sessions via des 
// requêtes de notre serveur
app.use(cors({
    origin: "http://localhost:3000",
    mathods: "GET, POST, PUT, DELETE", 
    credentials: true,
    })
);
// création de notre application
// de serveur web
// apporte quelque modifications
// le but étant qu'après l'authentification via 
// les réseaux, de pouvoir garder la session
// ouverte lorsqu'on raffraîchi la page
console.log("hello");
app.listen("5000", () =>{
    console.log("server is running")
})
// créons notre premier méthode d'authentification 
// authentification google
