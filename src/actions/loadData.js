import Swal from 'sweetalert2';
import { getDocument } from '../helpers/loadData';
import { types } from '../types/types';

const URL = "frella/web";

export const loadDataMain = () => {
    Swal.showLoading();
    return async ( dispatch ) => {
        const banners = await getDocument( `${URL}/main/banners` );
        const nuestrosProductos = await getDocument( `${URL}/main/nuestrosProductos` );
        const stickyImage = await getDocument( `${URL}/main/stickyImage` );

        const MAIN = {
            banners: banners.banners,
            nuestrosProductos: nuestrosProductos.nuestrosProductos,
            stickyImage: stickyImage.urlImagen
        }

        dispatch( loadMain( MAIN ) );
    
        Swal.close();
        
    }
}

export const loadMain = ( data ) => ({
    type: types.loadDataMain,
    payload: data
});