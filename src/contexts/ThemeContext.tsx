import React from 'react'
import {createContext, ReactNode, useState} from "react";

export type ThemeProviderProps = {
  children: ReactNode
}

export type ThemeContextData = {
  isDarkMode?: boolean
  switchMode?: () => void
}

export const ThemeContext = createContext({} as ThemeContextData)

export function ThemeProvider({children}: ThemeProviderProps){
  const [isDarkMode, setDarkMode] = useState(true)

  function switchMode(){
    setDarkMode(!isDarkMode)
  }


  return (
    <ThemeContext.Provider value={{isDarkMode, switchMode}}>
      {children}
    </ThemeContext.Provider>
  )
}