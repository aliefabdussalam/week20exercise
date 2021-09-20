import { createStore, combineReducers, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import countReducers from './reducers/count'
import userReducer from './reducers/user'


const reducers = combineReducers({
    count: countReducers,
    users: userReducer
})
const middleware = applyMiddleware(thunk, logger)

const store = createStore(reducers, middleware)

export default store 