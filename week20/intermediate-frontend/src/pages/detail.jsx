import React from 'react'
import { useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { ACTION_GET_DETAIL_USER } from '../redux/action/user'
import { useEffect } from 'react'

const Detail = () => {
    const dispatch = useDispatch()
    const params =  useParams()
    const id = params.id
    const users = useSelector((store) => store.users)
    useEffect(() => {
        dispatch(ACTION_GET_DETAIL_USER(id))
    }, []);
    return (
        <div>
            <h1>Detail {id}</h1>
            {JSON.stringify(users.detail)}
        </div>
    )
}

export default Detail