import React, { useContext } from 'react'
import { ThemeContext } from '../App'

const ToggleTheme = () => {
    let {theme, setTheme} = useContext(ThemeContext)
  return (
    <div>
        <h1>You are using {theme} theme.</h1>
        <button onClick={()=>setTheme(theme==='light'?'dark':'light')}>Change theme</button>
        
    </div>
  )
}

export default ToggleTheme