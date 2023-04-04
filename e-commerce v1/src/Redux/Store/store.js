import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import { userReducer } from "../Reducers/userReducer.js";
import { cardsReducer } from "../Reducers/cardsReducer.js";
import { cartReducer } from "../Reducers/cartReducer.js";
import { favReducer } from "../Reducers/favReducer.js";
import thunk from "redux-thunk";





const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    login: userReducer,
   read: cardsReducer,
    add: cardsReducer,
    edit:cardsReducer,
    addCart: cartReducer,
    readCart: cartReducer,
    editCart: cartReducer,
    addFav: favReducer,
    readFav: favReducer,
   
})

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)