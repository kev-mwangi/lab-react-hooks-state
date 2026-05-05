import { dark } from '@mui/material/styles/createPalette'
import React from 'react'

const DarkModeToggle = () => ({darkMode, setIsDarkMode}) =>{
  // TODO: Implement dark mode toggle logic

  return (
    <button onClick= {() => setIsDarkMode(!isDarkMode)}>Toggle Dark Mode {isDarkMode ? 'Light' : 'Dark'}</button>
  )
}

export default DarkModeToggle
