import React, { useContext } from 'react'
import { LoginContext } from '../App'

const LoginLogout = () => {
    const {isLoggedIn, setIsLoggedIn} = useContext(LoginContext)
  return (
    <div>
        <h2>{isLoggedIn?'Welcome back':'Please Login'}</h2>
        <button className='btn' onClick={() => setIsLoggedIn(!isLoggedIn)}>{isLoggedIn?'Logout':'Login'}</button>
    </div>
  )
}

export default LoginLogout