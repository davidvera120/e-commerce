import {cardsTypes} from "../Types/cardsTypes";

const initialState={

    Cards:[]
}

export const cardsReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case cardsTypes.add:
            return action.payload;

        case cardsTypes.read:
            return  {Cards:action.payload}
            
        case cardsTypes.delete:
            return action.payload;

        case cardsTypes.edit: 
            return action.payload;
            
        default:
            return state;
    }
}