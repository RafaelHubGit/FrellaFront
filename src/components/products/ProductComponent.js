import React from 'react'

export const ProductComponent = () => {
  return (
    <div className="products__productCardContainer">
        <div className="products__productCardImage">
            <div>hola </div>
        </div>
        <div className="products__productCardData">
            <h5>Nombre del producto</h5>
            <div className="products__productCardPrice">
                <small>
                    $ 180.00
                </small>
                <p>
                    $ 152.00
                </p>
            </div>
        </div>
    </div>
  )
}
