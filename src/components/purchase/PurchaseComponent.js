import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { PurchaseCard } from './PurchaseCard'

export const PurchaseComponent = () => {

    const { productos, prodToPurchase } = useSelector ( state => state.product );

    const [subtotal, setSubtotal] = useState( 0 );
    const [prods, setProds] = useState( [] );

    useEffect ( () =>{

        setSubtotal( prodToPurchase.reduce( (acc, p) => acc + (p.cantidad * p.precio), 0 ) );

        const newProd = prodToPurchase.map( (p) => {
            const prod = productos.find(pr => pr.id === p.id)
            const newp = {...p, ...prod};
            return newp;
        });
        setProds( newProd );

    }, [prodToPurchase, productos])

    return (
        <div className="purchase__DataContainer">
            <div className="purchase__CarritoCompraContainer">
                <div className="purchase__titleUnderLine">
                    Carrito de compra 

                </div>
                
                <div>
                    {
                        prods.map( (prod) => (
                            <PurchaseCard 
                                key = { prod.id }
                                producto = { prod }
                            />
                        ))
                    }
                    
                </div>
            </div>
            <div>
                <div className="purchase__titleUnderLine">
                    Resumen del pedido 
                </div>
                <div>
                    <div className="purchase__ResumeContainer">
                        <div className="purchase__ResumeWrap">
                            <h5> Subtotal </h5>
                            <h5> 
                                $ { subtotal.toFixed(2) } 
                            </h5>
                        </div>
                        <div className="purchase__ResumeWrap">
                            <h5> Costo de envio </h5>
                            <h5> $ 300.00 </h5>
                        </div>
                    </div>
                    <div className="purchase__TotalContainer">
                        <h4> Total </h4>
                        <h4> $ { subtotal.toFixed(2) } </h4>
                    </div>

                    <div className="purchase__compraWrap">
                        <button className="purchase__BtnComprar">
                            Comprar
                        </button>
                        <small> Terminos de compra segura </small>
                    </div>
                </div>
            </div>
        </div>
    )
}
