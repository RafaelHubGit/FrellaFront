import { types } from "../types/types";

const initialState = {
    productos: [],
    prodToPurchase: [],
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

        case types.productToPurchaseAdd:
            return {
                ...state,
                prodToPurchase: [...state.prodToPurchase, action.payload]
            }
        case types.productToPurchaseEdit:
            return {
                ...state,
                prodToPurchase:state.prodToPurchase.map(
                    prod => (prod.id === action.payload.id) ? action.payload : prod
                )
            }
        case types.productToPurchaseRemove:
            return {
                ...state,
                prodToPurchase: state.prodToPurchase.filter( product => product.id !== action.payload )
            }
    
        default:
            return state;
    }
}