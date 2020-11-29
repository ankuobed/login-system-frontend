import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useUser } from '../UserContext'
import { getCookie } from '../utils'

export default function User() {
    const [user] = useUser()
    const history = useHistory()

    useEffect(() => {
        if(!user && !getCookie('ASSystemUser')) {
            history.push('/')
        }
    })
    
    return (
        <div className='user'>

        </div>
    )
}