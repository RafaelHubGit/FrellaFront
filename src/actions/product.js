import Swal from 'sweetalert2';
import { getCollection, getDocument } from '../helpers/loadData';
import { types } from "../types/types";

const URL = "frella/web";

export const prodOpenModal = () => ({type: types.productOpenModal});
export const prodCloseModal = () => ({type: types.productCloseModal});

export const loadProductsStart = () => {
    Swal.showLoading();
    return async ( dispatch ) => {
        
        const productos = await getCollection( `${URL}/productos` );

        dispatch( loadProducts( productos ) );

        Swal.close();
    }
};


export const loadProducts = ( data ) => ({
    type: types.loadProducts,
    payload: data
});

export const loadCuidadosUsoStart = () => {
    Swal.showLoading();
    return async ( dispatch ) => {
        const uso = await getCollection( `frella/productos/uso`);
        const cuidados = await getCollection( `frella/productos/cuidados`);

        dispatch( loadUso( uso ) );
        dispatch( loadCuidados( cuidados ) );

        Swal.close();
    }
}
export const loadUso = ( data ) => ({
    type: types.loadUso,
    payload: data
});
export const loadCuidados = ( data ) => ({
    type: types.loadCuidados,
    payload: data
});

export const loadIngredientesStart = ( data ) => {
    Swal.showLoading();
    return async ( dispatch  ) => {
        const ingredientes = await getCollection( `frella/productos/ingredientes` );

        dispatch( loadIngredientes( ingredientes ) );

        Swal.close();
    }
}
export const loadIngredientes = ( data ) => ({
    type: types.loadIngredientes,
    payload: data
});

export const productSelected = ( data ) => ({
    type: types.productSelected,
    payload: data
});

// export const startRegisterWithEmailPasswordName = ( email, password, name ) => {
//     return ( dispatch ) => {
//         createUserWithEmailAndPassword( auth, email, password )
//             .then( async ({user}) =>{
//                 await updateProfile(auth.currentUser, {displayName: name})
//                 dispatch(login(user.uid, user.displayName));
//             })
//             .catch( e => {
//                 console.log(e);
//                 Swal.fire('Error', e.message, 'error');
//             });
//     }
// }