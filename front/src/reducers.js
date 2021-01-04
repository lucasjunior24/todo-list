import { combineReducers } from 'redux'
import todoReducer from './todo/todoReducer'

const rootReduceer = combineReducers({
    todo: todoReducer
})


export default rootReduceer