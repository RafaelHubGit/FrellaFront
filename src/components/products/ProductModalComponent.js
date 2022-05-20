import React from 'react'
import Modal from 'react-modal';

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

export const ProductModalComponent = ({ isOpen=true, closeFnc }) => {
  return (
    <Modal
        isOpen={ false }
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
                    onClick={ closeFnc }
                >
                    X
                </button>

        </div>


        <div className=" product__ModalBody">
            <div className="product__ModalimageDescWrap">
                <div className="product__ModalImage">

                </div>
                <div className="product__ModalDescripcion">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt mollitia eaque adipisci officiis magni quos aperiam temporibus tempore aut exercitationem, quaerat, officia harum laboriosam expedita distinctio delectus quis earum ratione.
                    </p>       
                </div>
            </div>
            <div className="product__ModalDetalleWrap">
                <div>
                    <h4 className="product__ModalNombreProd"> Nombre del Producto </h4>
                    <div className="product__ModalPriceWrap">
                        <small className="product__ModalhighPrice"> $ 350.85 </small>
                        <small className="product__ModalLowPrice"> $ 250.00 </small>
                    </div>
                    <div className="product__ModalQuantityWrap">
                        <small> Cantidad </small>
                        <input type="text"  />
                    </div>
                </div>
                
                <div className="product__ModalBtnAgregarWrap">
                    <button className="product__ModalBtnAgregar"> Agregar al carrito </button>
                </div>
                
                
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item product__ModalAccordionItem">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button product__ModalAccordionButton" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Informacion del producto
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body product__ModalAccordionBody">
                                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item product__ModalAccordionItem">
                        <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed product__ModalAccordionButton" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Accordion Item #2
                        </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body product__ModalAccordionBody">
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                        </div>
                    </div>
                    <div className="accordion-item product__ModalAccordionItem">
                        <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed product__ModalAccordionButton" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Accordion Item #3
                        </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body product__ModalAccordionBody">
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>


    </Modal>
  )
}
