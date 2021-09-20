import axios from "axios";

export const ACTION_GET_ALL_USER = () => {
    return (dispatch) => {
        dispatch(allUserPending())
        axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
            dispatch(allUserFullfiled(response.data))
        }).catch((err) => {
            dispatch(allUserRejected())
        })
    }
}
const allUserPending = () => {
    return{
        type: "GET_ALL_USER_PENDING"
    }
}

const allUserFullfiled = (payload) => {
    return{
        type: "GET_ALL_USER_FULFILLED",
        payload
    }
}

const allUserRejected = () => {
    return{
        type: "GET_ALL_USER_REJECTED",
        payload: "Terjadi kesalahan"
    }
}
export const ACTION_GET_DETAIL_USER = (id) => {
    return (dispatch) => {
        dispatch(allDetailPending())
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`).then((response) => {
            dispatch(allDetailFullfiled(response.data))
        }).catch((err) => {
            dispatch(allDetailRejected())
        })
    }
}
const allDetailPending = () => {
    return{
        type: "GET_DETAIL_USER_PENDING"
    }
}

const allDetailFullfiled = (payload) => {
    return{
        type: "GET_DETAIL_USER_FULFILLED",
        payload
    }
}

const allDetailRejected = () => {
    return{
        type: "GET_DETAIL_USER_REJECTED",
        payload: "Terjadi kesalahan"
    }
}