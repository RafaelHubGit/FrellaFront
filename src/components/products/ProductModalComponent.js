import React from 'react'

export const ProductModalComponent = () => {
  return (
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable">
            <div className="modal-content">
                <div className="modal-header product__ModalHeader">
                    {/* <h5 className="modal-title" id="exampleModalLabel">Modal title</h5> */}
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body product__ModalBody">
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
                        
                        
                        <div class="accordion" id="accordionExample">
                            <div class="accordion-item product__ModalAccordionItem">
                                <h2 class="accordion-header" id="headingOne">
                                    <button class="accordion-button product__ModalAccordionButton" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Informacion del producto
                                    </button>
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div class="accordion-body product__ModalAccordionBody">
                                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingTwo">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Accordion Item #2
                                </button>
                                </h2>
                                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingThree">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Accordion Item #3
                                </button>
                                </h2>
                                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                {/* <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Save changes</button>
                </div> */}
            </div>
        </div>
    </div>
  )
}
