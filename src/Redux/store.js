import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk';//store enhancers
import { composeWithDevTools } from 'redux-devtools-extension';
import userReducer from './Reducers/userReducer'
import dataReducer from './Reducers/dataReducer'
import uiReducer from './Reducers/uiReducer'


const initialState = {};

const middleware = [thunk];

const reducers =  combineReducers({
    user: userReducer,
    data: dataReducer,
    UI: uiReducer
});

const store = createStore(
    reducers, 
    initialState,
    composeWithDevTools(applyMiddleware(...middleware), 
    )
);

export default store;