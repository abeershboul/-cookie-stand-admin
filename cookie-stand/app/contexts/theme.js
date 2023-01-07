'use client';
import { createContext, useEffect, useState } from "react"



export const ThemeContext = createContext();

export default function ThemeWrapper({children}){
    const [isDarkTheme,setisDarkTheme]=useState('True');
    const [Storage, setStorage] = useState("");


    function initialThemeHandle(){
        // take the initial value
        const Storage = JSON.parse(localStorage.getItem('theme'))
        if (Storage === false){
            setisDarkTheme(Storage)
            document.querySelector("body").classList.remove("dark"); 
        }
        else {
            isDarkTheme && document.querySelector("body").classList.add("dark"); // add dark class to the body element

        }


    }


    function toggleThemeHandler() {
        setisDarkTheme(!isDarkTheme);
        document.querySelector("body").classList.toggle("dark");
        localStorage.setItem('theme', JSON.stringify(!isDarkTheme))

    }


    const globalState = {
        isDarkTheme: true,
        toggleThemeHandler
    }


    useEffect(()=> {
        const Storage = JSON.parse(localStorage.getItem('theme'))
        if (Storage){
            setStorage(Storage)
        }
        initialThemeHandle()
    },[Storage]);

    return(
        <ThemeContext.Provider value={globalState}>
            {children}
        </ThemeContext.Provider>
    )

}