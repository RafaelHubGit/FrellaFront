import { types } from "../types/types";

const initialState = {
    productos: [],
    openModal: false,
    productSelected: {},
    uso: [],
    cuidados: [],
    ingredientes: []
}

export const productReducer = ( state = initialState, action ) => {

    switch ( action.type ) {
        case types.loadProducts:
            return {
                ...state,
                productos: action.payload
            }

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
        
        case types.productSelected:
            return {
                ...state,
                productSelected: action.payload
            }


        case types.loadUso:
            return {
                ...state,
                uso: action.payload
            }
        case types.loadCuidados:
            return {
                ...state,
                cuidados: action.payload
            }
        case types.loadIngredientes:
            return {
                ...state,
                ingredientes: action.payload
            }
    
        default:
            return state;
    }
}