import React from 'react'

const  Child = ({isLoggedIn, setIsLoggedIn})=> {
  return (
    <div>
        {
            !isLoggedIn ? 
            <form onSubmit={()=> setIsLoggedIn(true)}>
                <label htmlFor="name">Username:</label>
                <input type="text" name='name' /> <br /> <br />
                <label htmlFor="password">Password:</label>
                <input type="password" /> <br /><br />
                <button type='submit'>Login</button>
            </form> : <p>You are logged in!</p>
        }
    </div>
  )
}

export default Child