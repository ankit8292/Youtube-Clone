import { createContext, useContext, useEffect, useState } from "react";


export const context=createContext();

export const useTheme=()=>{
    return useContext(context);
}

export const ThemeProvider=({children})=>{

    const[isDarkMode, setIsDarkMode]=useState(true);

    const toggleTheme=()=>{
        setIsDarkMode((prev)=>!prev)
    };

    const theme=isDarkMode ? "dark" : "light";

    useEffect(()=>{
        document.documentElement.setAttribute("data-theme", theme);
    },[isDarkMode]);

    return (
        <context.Provider value={{theme, toggleTheme}}>
            {children}
        </context.Provider>
    )
}

