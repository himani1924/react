import React, { useContext } from 'react'
import { UserContext } from '../App'
import '../App.css'
import UserData from './UserData'
const UserProfile = () => {
    const {setName, setEmail, userLogin, setUserLogin} = useContext(UserContext)
    const handleInput = (e) =>{
        e.preventDefault();
        setName(e.target.inputName.value)
        setEmail(e.target.inputEmail.value)
        setUserLogin(true)
    }
  return (
    <div>
        {!userLogin && (
            <form className='userinput' onSubmit={handleInput}>
                <h2>Enter details</h2>
                <label><span>Name:</span> <input type='text' id='inputName'  required /></label>
                <br></br>
                <label><span>Email: </span><input type='text' id='inputEmail' required /></label>
                <br></br>
                <button type='submit' className=' btn'>Login</button>
            </form> 
        )}
        {userLogin && (
            <UserData/>
        )}
    </div>
  )
}

export default UserProfile