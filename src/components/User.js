import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useStateValue } from '../StateContext'
import { getCookie } from '../utils'

export default function User() {
    const [user] = useStateValue()
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