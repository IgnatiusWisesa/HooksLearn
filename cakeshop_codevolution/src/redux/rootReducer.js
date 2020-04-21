import { combineReducers } from 'redux'
import cakeReducer from './cake/cakeReducer'
import icecreamReducer from './icecream/icecreamReducers'
import userReducer from './user/userReducers'

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: icecreamReducer,
    users: userReducer
})

export default rootReducer