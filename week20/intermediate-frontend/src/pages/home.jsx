import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { ACTION_KURANG, ACTION_TAMBAH, ACTION_TAMPIL } from '../redux/action/count'
import { ACTION_GET_ALL_USER } from '../redux/action/user'

const Home = () => {
    const dispatch = useDispatch()
    const count = useSelector((state) => state.count)
    const users = useSelector((state) => state.users)
    const handleTambah = () => {
        // dispatch({
        //     type: "TAMBAH"
        // })
        dispatch(ACTION_TAMBAH())
    }
    const handleKurang = () => {
        dispatch(ACTION_KURANG())
    }
    const handleTampil = () => {
        dispatch(ACTION_TAMPIL())
    }
    const handleUsers = () => {
        dispatch(ACTION_GET_ALL_USER())
    }
    // useEffect = () =>{

    // }
    const [form, setForm] = useState ({
        
    })

    return (
        <div style={{textAlign: 'center'}}>
            <h1>Home</h1>
            <hr />
            <h1>{count.number}</h1>
            <button onClick={handleTambah}>tambah </button>
            <button onClick={handleKurang}>kurang</button>
            <button onClick={handleTampil}>set data</button>
            <br />
            <h1>{count.data}</h1>
            <hr />
            <button onClick={handleUsers}>Get Users</button>
            {
                users.loadAll ? (
                    <h1>Loading..... </h1>
                ):(
                    users.all.map((e, i) => (
                        <div key={i}>
                            {e.name} <Link to={`/${e.id}`}> detail</Link>
                        </div>
                    ))
                )
            }
        </div>
    )
}

export default Home