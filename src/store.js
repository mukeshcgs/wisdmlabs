 import logger from 'redux-logger';
 import pizzasReducer from './reducers/pizzasReducer';

import { applyMiddleware, createStore, compose } from "redux"
import promise from "redux-promise-middleware"



const middleware = applyMiddleware(promise(), logger())

export default createStore(
    pizzasReducer,
    compose(
    middleware,
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)
