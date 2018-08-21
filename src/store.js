import thunk from 'redux-thunk'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import logger from 'redux-logger'
import artists from './reducers/artists'

const rootReducer = combineReducers({ artists })

export default () => createStore(rootReducer, applyMiddleware(thunk, logger))
