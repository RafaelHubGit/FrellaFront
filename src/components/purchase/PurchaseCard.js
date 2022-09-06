import React from 'react'

export const PurchaseCard = () => {
  return (
    <div className="purchase__productCardContainer">
      <div className="purchase__productImage"></div>
      <div className="purchase__dataWrap">
        <div className="purchase__productName">
          Nombre del producto
        </div>
        <div className="purchase__prices">
          <small className="purchase__HighPrice"> $ 305.20 </small>
          <small className="purchase__LowPrice"> $ 250.00 </small>
        </div>
        <div className="purchase__plusminus">
          <button className="purchase__btnPlusMinus"> - </button>
          <div className="purchase__quantity"> 450 </div>
          <button className="purchase__btnPlusMinus"> + </button>
        </div>
      </div>
      <div className="purchase__FinalPriceContainer">

        <button className="purchase__delProduct">X</button>

        <div className="purchase__FinalPrice">
          $ 1250.00
        </div>
      </div>
    </div>
  )
}
