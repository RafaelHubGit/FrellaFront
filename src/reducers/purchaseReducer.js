import { types } from "../types/types"


const initialState = {
    noTicket: 0,
    productos: [],
    estatus: [{
        estatus: 'Realizado',
        fecha: new Date()
    }],
    costoEnvio: 0,
    subTotal: 0,
    total: 0,
    usuario: '',
    direccion: ''
}

export const purchaseReducer = ( state = initialState, action ) => {

    switch ( action.type ) {
        case types.productSelected:
            return {

            }
        case types.purchaseAddProduct:
            return {
                ...state,
                productos: [ ...action.payload ]
            }
        case types.purchaseProductDelete:
            return {
                ...state,
                productos: state.productos.filter( product => product.id !== action.payload )
            }
        case types.purchaseProductDeleteAll:
                return {
                    ...state,
                    productsBuy: []
            }

        default:
            return state;
    }

}