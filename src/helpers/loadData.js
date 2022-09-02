import { db } from "../firebase/firebase-config"
import { getDoc, getDocs, doc, collection } from 'firebase/firestore';


export const getDocument = async ( ruta = '' ) => {
    // const itemSnap = await getDoc( collection( db, `web/fondos${ ruta }` ));
    const itemSnap = await getDoc( doc( db, ruta ));
    let data = itemSnap.data();

    return data;
}

export const getCollection = async ( ruta = '' ) => {
    // const itemSnap = await getDoc( collection( db, `web/fondos${ ruta }` ));
    const itemSnap = await getDocs( collection( db, ruta ));
    const data = [];

    itemSnap.forEach((doc) => {
        data.push({
            id: doc.id,
            data: doc.data
        });
    });

    return data;
}