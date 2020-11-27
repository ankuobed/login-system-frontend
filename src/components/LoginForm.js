import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Error, PersonOutline, LockOutlined } from '@material-ui/icons'
import { CircularProgress, Checkbox } from '@material-ui/core'
import { useStateValue } from '../StateContext'
import { useHistory } from 'react-router-dom'
import { getCookie } from '../utils'

const LoginForm = () => {
    const [, setUser] = useStateValue();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [remember, setRemember] = useState(true);

    const history = useHistory()

    useEffect(() => {
        if(getCookie('ASSystemUser')) {
            setUser(getCookie('ASSystemUser'))
            history.push('/user')
        }
    })

    function clearFields() {
        setError('')
        setUsername('')
        setPassword('')
    }

    const login = (e) => {
        e.preventDefault();
        setLoading(true);
        axios({
            method: 'post',
            data: {
                username,
                password
            },
            withCredentials: true,
            url: 'http://localhost:5000/login'
        })
        .then(() => {
            setLoading(false);
            clearFields()
            setUser(username)
            if(remember) {
                // setting the cookie date to one year
                const cookieDate = new Date().setFullYear() + 1 
                document.cookie = `ASSystemUser=${username}; expires=${cookieDate}; path=/`
            }
            history.push('/user')
        })
        .catch(err => {
            setLoading(false);
            setError(err.response.data);
        })
    }

    return (
        <div className='home container'>
            <form  onSubmit={login}>
                <h2>Login to <span>ASSystem</span></h2>
                
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
                

                {error&& <p className='error'><Error />{error}</p>}

                <button>SUBMIT {loading&& <CircularProgress size={17} color='inherit' />}</button>
                <div className='remember'>
                    <Checkbox 
                        checked={remember}
                        onChange={() => setRemember(!remember)}
                        color='default'
                    />
                    <label>Remember me</label>
                </div>
            </form>
        </div>
    )
}

export default LoginForm
