
import './App.css';
import { createContext, useState } from 'react';
import ToggleTheme from './components/ToggleTheme';
import LoginLogout from './components/LoginLogout';
import UserProfile from './components/UserProfile';
import UserData from './components/UserData';


export const ThemeContext = createContext()
export const LoginContext = createContext()
export const UserContext = createContext()
function App() {
  const [theme, setTheme] = useState('light')
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [userLogin, setUserLogin] = useState(false)
  
  return (
    <div className="App">
      <div className='theme-container'
      style={{
        backgroundColor: theme === 'light'? 'antiquewhite' : '#333',
        color: theme === 'light'? '#333' : '#fff',
        width: '300px',
        height: '200px',
        padding: '20px'
      }}>
      <ThemeContext.Provider value={{theme, setTheme}}>
          <ToggleTheme/>
      </ThemeContext.Provider>
    </div>
      <div className='login-container'
      style={{
        backgroundColor: isLoggedIn ? '#87f087' : 'rgb(221, 68, 68)',
        color: isLoggedIn? '#333' : '#fff',
        width: '300px',
        height: '200px',
        padding: '20px'
      }}
      >
        <LoginContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
          <LoginLogout/>
        </LoginContext.Provider>
      </div>
      <div className='user-container'
      style={{
        backgroundColor: userLogin ? 'rgb(145, 200, 103)' : 'rgb(67, 60, 160)',
        color: userLogin? '#333' : '#fff',
        width: '300px',
        height: '200px',
        padding: '20px'
      }}
      >
        <UserContext.Provider value={{name, setName, email, setEmail, userLogin, setUserLogin}}>
          <UserProfile/>
          
        </UserContext.Provider>


      </div>
    </div>
    
  );
}

export default App;
