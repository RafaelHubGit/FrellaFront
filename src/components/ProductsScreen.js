import React from 'react'
import { ProductsComponent } from './products/ProductsComponent'

export const ProductsScreen = () => {
  return (
    <div className="products__productsScreenContainer">
        <div className="products__envioGratis">
            Envio gratis a partir de $1000mx
        </div>
        <div>
            <ProductsComponent/>
        </div>

    </div>
  )
}
