// No se pone el titulo en el inicio ya que todo eso se va a obtener del state
import React from 'react'
import { ProductComponent } from './ProductComponent'

export const ProductsComponent = () => {
  return (
    <div>
        <div className="products__imageBanner general__parallax"></div>

        <h5> PRODUCTOS </h5>

        <div>

            <ProductComponent />

        </div>


    </div>
  )
}
