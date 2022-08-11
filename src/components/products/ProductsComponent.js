// No se pone el titulo en el inicio ya que todo eso se va a obtener del state
import React, { useState } from 'react'
import { ProductComponent } from './ProductComponent'
import { ProductModalComponent } from './ProductModalComponent'

export const ProductsComponent = () => {

  const [openModal, setOpenModal] = useState( false ); 

  return (
    <div>
        <div className="products__imageBanner general__parallax"></div>

        <h1 className="products__titleProducts"> PRODUCTOS </h1>

        <div className="products__productsWrap">

            <ProductComponent />
            <ProductComponent />
            <ProductComponent />
            <ProductComponent />
            <ProductComponent />
            <ProductComponent />

            <ProductComponent />
            <ProductComponent />
            <ProductComponent />
            <ProductComponent />
            <ProductComponent />
            <ProductComponent />
            <ProductComponent />
            <ProductComponent />
            <ProductComponent />
            <ProductComponent />
            <ProductComponent />
            <ProductComponent />
            <ProductComponent />
            <ProductComponent />
            <ProductComponent />
            <ProductComponent />
            <ProductComponent />
            <ProductComponent />
            <ProductComponent />
            <ProductComponent />
            <ProductComponent />
            <ProductComponent />
            <ProductComponent />
            <ProductComponent />
            <ProductComponent />
            <ProductComponent />
            <ProductComponent />
            <ProductComponent />
            <ProductComponent />
            <ProductComponent />


        </div>

        <ProductModalComponent />


    </div>
  )
}
