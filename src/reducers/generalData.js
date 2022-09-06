import { types } from "../types/types";

// const initialState = {
//     general: {},
//     principal: {},
//     nosotros: {},
//     contacto: {},
//     banner: {},
//     productos: []
// }

const initialState = {
    main: {}
}


export const generalReducer = ( state = initialState, action ) => {
    switch ( action.type ){
        case types.loadDataMain:
            return {
                main: action.payload
            }
        default:
            return state;
    }

}