import { useContext } from 'react'
import {ThemeContext, ThemeContextData} from "../contexts/ThemeContext";

export function useDarkMode(): ThemeContextData {
  const data = useContext(ThemeContext)
  return data
}