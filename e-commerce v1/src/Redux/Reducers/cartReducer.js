import { cartTypes } from "../Types/cartTypes";

const initialState={

    Cart:[]
}

export const cartReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case cartTypes.addCart:
            return  {...state}; 

        case cartTypes.readCart:
            return  {Cart:action.payload}

            case cartTypes.editCart:
            return  {...state}; 

        default:
            return state;
    }
}