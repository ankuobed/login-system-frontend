import React, { useState } from 'react'
import axios from 'axios'
import { Error, PersonOutline, Lock, LockOutlined } from '@material-ui/icons'
import { CircularProgress } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { useUser } from '../UserContext'

const RegisterForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false)
    const [,setUser] = useUser()

    const history = useHistory()

    const register = (e) => {
        e.preventDefault()
        setLoading(true)
        axios({
            method: 'post',
            data: {
              username,
              password,
              confirmPassword
            },
            withCredentials: true,
            url: 'http://localhost:5000/register'
        })
        .then(() => {
            setError('')
            setLoading(false)
            setUsername('')
            setPassword('')
            setConfirmPassword('')
            setUser(username)
            history.push('/user')
        })
        .catch(({response}) => {
            setLoading(false);
            if(!response) {
                setError('newtwork too slow or unavailable')
            } else {
                setError(response.data)
            }
        })
    }
    

    return (
        <form onSubmit={register}>
            <h2>Register</h2>
            <div className='inputCon'>
                <PersonOutline />
                <input
                    type='text' 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                    autoFocus
                    placeholder='username'
                />
            </div>
            
            <div className='inputCon'>
                <LockOutlined />
                <input
                    type='password' 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    placeholder='password'
                />
            </div>

            <div className='inputCon'>
                <Lock />
                <input
                    type='password' 
                    value={confirmPassword} 
                    onChange={(e) => setConfirmPassword(e.target.value)} 
                    placeholder='confirm password'
                />
            </div>


            {error&& <p className='error'><Error />{error}</p>}

            <button>SUBMIT {loading&& <CircularProgress size={17} color='inherit' />}</button>
      </form>

    )
}

export default RegisterForm
