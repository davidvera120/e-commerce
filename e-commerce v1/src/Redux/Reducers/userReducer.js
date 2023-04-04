import { userTypes } from "../Types/userTypes";



export const userReducer = ( state = {}, action ) => {
    switch (action.type) {
        case userTypes.login:
            return {id:action.payload.id,
            name:action.payload.displayName}

        case userTypes.register:
            return action.payload;

        default:
            return state;
    }
}