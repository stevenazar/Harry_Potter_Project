import React, {useState} from 'react';

const DarkSideTheme = () => {
    let clikedClass = "clicked";
    const body = document.body;
    const lightTheme = "light";
    const darkTheme = "dark";
    let theme; 

    if(localStorage){
      theme = localStorage.getItem("theme");
    }
    if (theme === lightTheme || theme === darkTheme){
      body.classList.add(theme);
    }else{
      body.classList.add(lightTheme);
    }
    // fonction swithTheme 
    const switchTheme = (e) => {
      if(theme === darkTheme){
        body.classList.replace(darkTheme, lightTheme);
        e.target.classList.remove(clikedClass);
        localStorage.setItem("theme", "light");
        theme = lightTheme;
      }else{
        body.classList.replace(lightTheme, darkTheme);
        e.target.classList.add(clikedClass);
        localStorage.setItem("theme", "dark");
        theme = darkTheme;
      }
      
    };
    return(
        <button className={theme === "dark" ? clikedClass : ""}
        id="darkMode" onClick={(e) => switchTheme(e)}></button>
    )
}
export default DarkSideTheme;