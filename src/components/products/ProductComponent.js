import React from 'react'
import { ProductModalComponent } from './ProductModalComponent'

export const ProductComponent = () => {
  return (
    <div className="products__productCardContainer pointer" data-bs-toggle="modal" data-bs-target="#exampleModal">
        <div className="products__productCardDiscount">-25%</div>
        <div className="products__productCardImage">
            <div className="products__productCardInfo">Nuevo</div>
            <div className="products_productCardIngredients"> avena, toronja, cafe. manzana, kiwi, fresa, bergamota, arandano  </div>
        </div>
        <div className="products__productCardData">
            <h5>Nombre del producto</h5>
            <div className="products__productCardPrice">
                <small className="products__productCardHighPrice">
                    $ 180.00
                </small>
                <p className="products__productCardLowPrice">
                    $ 152.00
                </p>
            </div>
        </div>

        <ProductModalComponent />
    </div>
  )
}
