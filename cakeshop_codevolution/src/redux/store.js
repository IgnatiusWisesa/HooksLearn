import { createStore, applyMiddleware } from 'redux'
import Thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import RootReducer from './rootReducer'
import logger from 'redux-logger'

export const store = createStore(RootReducer, composeWithDevTools(applyMiddleware(logger, Thunk)))