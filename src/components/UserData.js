import React, {useContext} from 'react'
import { UserContext } from '../App'
import '../App.css'


const UserData = () => {
    const {name, email,  setUserLogin} = useContext(UserContext)
  return (
    <div>
                <h2>Welcome, {name}!</h2>
                <p>Your email is: {email}</p>
                <button onClick={()=>setUserLogin(false)} className='btn'>Logout</button>
            </div>
  )
}

export default UserData