import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { uiReducer } from '../reducers/uiReducer';
import { productReducer } from '../reducers/productReducer';
import { generalReducer } from '../reducers/generalData';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


const reducers = combineReducers({
    ui: uiReducer,
    product: productReducer,
    generalData: generalReducer
});

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware( thunk )
    )
);