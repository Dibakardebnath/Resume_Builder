import {legacy_createStore,applyMiddleware} from 'redux'
import { Reducer } from './Reducer'
import { thunk } from 'redux-thunk'


export const store=legacy_createStore(Reducer, applyMiddleware(thunk))
store.subscribe(()=>{
    console.log(store.getState().isAuth)
})