import React, { useEffect } from 'react'
import '../App.css'
import { useUser } from '../UserContext'
import { useHistory, Link } from 'react-router-dom'
import { getCookie } from '../utils'

function Header({ login, userHeader }) {  
    const [user, setUser] = useUser()
    const history = useHistory()

    const handleLogOut = () => {
      setUser('')
      document.cookie = 'ASSystemUser=;'
      history.push('/login')
  }

  useEffect(() => {
    if(getCookie('ASSystemUser')) {
      setUser(getCookie('ASSystemUser'))
    }
  })


  return (
      <div className='headerCon'>
        <div className='header container'>
          <Link className='link' to='/'>
            <h2>ASSystem</h2>
          </Link>
          {
            login?
            <button onClick={() => history.push('/')}>Register</button> :
            !userHeader&&
            <button onClick={() => history.push('/login')}>Login</button>
          }

          {
            userHeader&& <p className='username'>{ user } <button onClick={handleLogOut}>Logout</button></p>
          }
        </div>
      </div>
  );
}

export default Header;
