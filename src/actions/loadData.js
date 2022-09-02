import Swal from 'sweetalert2';
import { getCollection, getDocument } from '../helpers/loadData';

const URL = "frella/web";

export const loadDataMain = () => {
    Swal.showLoading();
    return async ( dispatch ) => {
        const main = await getDocument( `${URL}/main/banners` );

        // const main = await getCollection(`${URL}/main`);

        console.log('EL MAIN : ', main );

        const DATA = {
            main
        }

        // dispatch( loadMain( DATA ) );
    
        Swal.close();
        
    }
}

export const loadMain = () => ({

});