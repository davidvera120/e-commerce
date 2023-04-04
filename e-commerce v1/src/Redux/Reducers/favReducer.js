import { favTypes } from "../Types/favTypes";

export const favReducer = ( state = {}, action ) => {
    switch (action.type) {

        case favTypes.addFav:
            return action.payload;

        case favTypes.readFav:
            return  {Fav:action.payload}
            
        default:
            return state;
    }
}