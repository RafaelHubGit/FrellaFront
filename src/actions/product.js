import { types } from "../types/types";

export const prodOpenModal = () => ({type: types.productOpenModal});
export const prodCloseModal = () => ({type: types.productCloseModal});


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