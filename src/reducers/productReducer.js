import { types } from "../types/types";

const initialState = {
    openModal: false
}

export const productReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case types.productOpenModal:
            return {
                ...state,
                openModal: true
            }

        case types.productCloseModal:
            return {
                ...state,
                openModal: false
            }
    
        default:
            return state;
    }
}