import React, { useEffect, useState } from 'react'
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { addProdToPurchaseStart, prodCloseModal, productSelected as prodSelectFnc } from '../../actions/product';
import { useForm } from '../../hooks/useForm';

const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)',
        position               : 'fixed'
    }
};
Modal.setAppElement('#root');

const styles = {
    headerContainer: {
        height: "60px"
    },
    imagenContainer: {
        display: "flex",
        alignItems: "center",
        marginRight: "20px"
    },
    alignButton: {
        position: "absolute",
        right: "8px",
        fontWeight: "bold",
        height: "30px",
        width: "30px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    bodyContainer: {

    },
    fondo: {
        background: `url(https://firebasestorage.googleapis.com/v0/b/el33-94306.appspot.com/o/productoFondo.jpg?alt=media&token=ed4e4daf-e9f1-492c-911a-958a0cd81d7c)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "top center",
        height: "100%"
    }
}

export const ProductModalComponent = () => { 

    const [{cantidad}, handleInputChange, reset] = useForm({
        cantidad: 1
    });
    const dispatch = useDispatch();
    const { openModal, productSelected, prodToPurchase, uso, cuidados, ingredientes } = useSelector( state => state.product);
    const [precio, setPrecio] = useState( 0 );
    const [USO, setUSO] = useState("");
    const [CUIDADOS, setCUIDADOS] = useState("");
    const [LISTINGREDIENTS, setLISTINGREDIENTS] = useState([]);

    useEffect( () => {

        setPrecio( productSelected.precioBase - ( productSelected.precioBase * productSelected.descuento / 100 ) );

    }, [ productSelected ] );
    
    useEffect(() => {

        
        const prodPurchase = prodToPurchase.find( p => p.id === productSelected.id );
        console.log('engtra en este pedul ',prodPurchase );
        if (  prodPurchase !== undefined ) {
            reset( { cantidad: prodPurchase.cantidad } );
        }
        
    }, [productSelected, prodToPurchase ])
    
    useEffect(() => {
        if ( openModal ){
            setUSO( uso.find( item => item.id === productSelected.tipoProducto ).data.descripcion );
            setCUIDADOS( cuidados.find( item => item.id === productSelected.tipoProducto ).data.descripcion );

            setLISTINGREDIENTS([ productSelected.ingredientes ]);
        }
    }, [openModal, ingredientes, productSelected, cuidados, uso])

    const imageStyle = {
        backgroundImage: `url(${ productSelected.urlImagen })`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
    };

    const closeModal = () => {
        dispatch( prodCloseModal() );
        dispatch( prodSelectFnc( {} ) );
    }


    const handleAddProd = () => {
        dispatch( addProdToPurchaseStart({
                                            id:productSelected.id,
                                            precio: precio,
                                            cantidad: Number( cantidad )
                                        }));
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'El producto fue agregado al carrito de compra.',
            showConfirmButton: false,
            timer: 1500
        })
    }

    return (
        <Modal
            isOpen={ openModal }
            //   onRequestClose={ closeModal }
            style={ customStyles }
            closeTimeoutMS={ 200 }
            className="modal"
            overlayClassName="modal-fondo"
        >

            <div style={ styles.headerContainer }>
                    <button 
                        type="button" 
                        className="btn btn-danger"
                        style={ styles.alignButton }
                        onClick={ closeModal }
                    >
                        X
                    </button>

            </div>


            <div className=" product__ModalBody">
                <div className="product__ModalimageDescWrap">
                    <div className="product__ModalImage" style={ imageStyle }>

                    </div>
                    <div className="product__ModalDescripcion">
                        <p>
                            { productSelected.descripcion }
                        </p>       
                    </div>
                </div>
                <div className="product__ModalDetalleWrap">
                    <div>
                        <h4 className="product__ModalNombreProd"> { productSelected.nombre } </h4>
                        <div className="product__ModalPriceWrap">
                            <small className="product__ModalhighPrice"> $ { productSelected.precioBase } </small>
                            <small className="product__ModalLowPrice"> $ { precio } </small>
                        </div>
                        <div className="product__ModalQuantityWrap">
                            <small> Cantidad </small>
                            <input type="number"
                                name = "cantidad"
                                value = { cantidad } 
                                onChange = { handleInputChange }
                            />
                        </div>
                    </div>
                    
                    <div className="product__ModalBtnAgregarWrap">
                        <button onClick={ handleAddProd } className="product__ModalBtnAgregar"> Agregar al carrito </button>
                    </div>
                    
                    
                    <div className="accordion productAccordionContainer" id="accordionExample">
                        <div className="accordion-item product__ModalAccordionItem">
                            <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button collapsed product__ModalAccordionButton" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                Lista de Ingredientes
                            </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body product__ModalAccordionBody">
                                    {
                                        // LISTINGREDIENTS.id.slice(0, -1)
                                        // console.log("putaaa : ", LISTINGREDIENTS);
                                            productSelected.ingredientes?.map( ( ing, idx ) => {
                                                
                                                const INGRED = ingredientes.find( ingf => ingf.id === ing );

                                                var funcionIng = "";
                                                switch ( productSelected.tipoProducto ){
                                                    case "jabon":
                                                        funcionIng = INGRED.data?.piel;
                                                        break;
                                                    case "shampoo":
                                                        funcionIng = INGRED.data?.cabello;
                                                        break;
                                                    case "aceite":
                                                        funcionIng = INGRED.data?.olor;
                                                        break;
                                                    default:
                                                        funcionIng = "";

                                                }

                                                const HTML = <div key={idx}>
                                                    <p> <b>{ INGRED.data.nombre }</b> : { funcionIng } </p>
                                                </div>;
            
                                                return HTML;
                                                
                                            })

                                        
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item product__ModalAccordionItem">
                            <h2 className="accordion-header" id="headingFive">
                            <button className="accordion-button collapsed product__ModalAccordionButton" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                Ingredientes Clave
                            </button>
                            </h2>
                            <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                            <div className="accordion-body product__ModalAccordionBody">
                                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item product__ModalAccordionItem">
                            <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed product__ModalAccordionButton" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Como Usar
                            </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body product__ModalAccordionBody">
                                { USO }
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item product__ModalAccordionItem">
                            <h2 className="accordion-header" id="headingFour">
                            <button className="accordion-button collapsed product__ModalAccordionButton" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                Cuidados
                            </button>
                            </h2>
                            <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                            <div className="accordion-body product__ModalAccordionBody">
                                { CUIDADOS }
                            </div>
                            </div>
                        </div>
                        
                        {/* <div className="accordion-item product__ModalAccordionItem">
                            <h2 className="accordion-header" id="headingFour">
                            <button className="accordion-button collapsed product__ModalAccordionButton" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                Ingredientes Clave
                            </button>
                            </h2>
                            <div id="headingFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                            <div className="accordion-body product__ModalAccordionBody">
                                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                            </div>
                        </div> */}
                    </div>
                    {/* <div className="accordion-item product__ModalAccordionItem">
                            <h2 className="accordion-header" id="headingFive">
                            <button className="accordion-button collapsed product__ModalAccordionButton" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Cuidados
                            </button>
                            </h2>
                            <div id="headingFive" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body product__ModalAccordionBody">
                                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                            </div>
                    </div> */}
                    
                </div>
            </div>


        </Modal>
    )
}
