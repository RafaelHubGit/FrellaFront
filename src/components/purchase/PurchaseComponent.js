import React from 'react'
import { PurchaseCard } from './PurchaseCard'

export const PurchaseComponent = () => {
  return (
    <div className="purchase__DataContainer">
        <div className="purchase__CarritoCompraContainer">
            <div className="purchase__titleUnderLine">
                Carrito de compra 

            </div>
            
            <div>
                <PurchaseCard />
                <PurchaseCard />
                <PurchaseCard />
                <PurchaseCard />
                <PurchaseCard />
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
                        <h5> $ 1585.45 </h5>
                    </div>
                    <div className="purchase__ResumeWrap">
                        <h5> Costo de envio </h5>
                        <h5> $ 300.00 </h5>
                    </div>
                </div>
                <div className="purchase__TotalContainer">
                    <h4> Total </h4>
                    <h4> $ 1895.99 </h4>
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
