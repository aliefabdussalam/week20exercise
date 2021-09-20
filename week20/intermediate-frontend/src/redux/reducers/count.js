const initialState = {
    number: 0,
    data: []
}

const countReducers = (state = initialState, action) =>{
    if (action.type === "TAMBAH"){
        return {...state, number: state.number + 1}
    }if (action.type === "KURANG"){
        return {...state, number: state.number - 1}
    }if (action.type === "TAMPIL"){
        return {...state, data: state.number}
    }else {
        return state
    }
}

export default countReducers