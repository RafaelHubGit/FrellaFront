export const fetchS = ( endpoint, data = "", method = 'GET' ) => {

    const url = endpoint;

    if ( method === 'GET' ){
        return fetch( url );
    } else {
        return fetch(url, {
            method,
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify( data )
        })
    }

}