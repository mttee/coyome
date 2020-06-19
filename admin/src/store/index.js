import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import mySaga from './sagas'
import rootReducer from './reducers'

// create the saga middleware
//const sagaMiddleware = createSagaMiddleware()

// const getStore = (rootReducer, option={}) =>{
//     // return createStore(rootReducer, applyMiddleware(sagaMiddleware))
//     return createStore(rootReducer)
// }

const getStore =  createStore(rootReducer);

// then run the saga
//sagaMiddleware.run(mySaga)

getStore.subscribe(() => {
    console.log(getStore.getState());
})

export default getStore;
