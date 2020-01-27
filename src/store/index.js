import {createStore, applyMiddleware, compose} from 'redux'
import reducer from './reducer'
import creactSagaMiddleware from 'redux-saga'
import mySages from './sagas'

const sagaMiddleware = creactSagaMiddleware()

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? 
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose

const enhancer = composeEnhancer(applyMiddleware(sagaMiddleware))

const store = createStore(reducer, enhancer)
sagaMiddleware.run(mySages)


export default store