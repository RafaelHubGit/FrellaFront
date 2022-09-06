// No se pone el titulo en el inicio ya que todo eso se va a obtener del state
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { loadProductsStart, loadCuidadosUsoStart, loadIngredientesStart } from '../../actions/product';
import { ProductComponent } from './ProductComponent'
import { ProductModalComponent } from './ProductModalComponent'

export const ProductsComponent = () => {

  const dispatch = useDispatch();
  // const [openModal, setOpenModal] = useState( false ); 
  const { productos, uso, cuidados, ingredientes } = useSelector( state => state.product );

  
  useEffect( () => {
    if ( productos.lenght !== 0 ){
      dispatch( loadProductsStart() );
    }

    if ( uso.lenght !== 0 || cuidados.lenght !== 0 ){
      dispatch( loadCuidadosUsoStart() );
    }

    if ( ingredientes.lenght !== 0 ){
      dispatch( loadIngredientesStart() );
    }
  }, [dispatch]); 

  return (
    <div>
        <div className="products__imageBanner general__parallax"></div>

        <h1 className="products__titleProducts"> PRODUCTOS </h1>

        <div className="products__productsWrap">

          {
            productos.map( ( product, idx ) => (
              <ProductComponent 
              key={idx}
                producto={ product.data }
              />
            ))
          }

            {/* <ProductComponent />
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
            <ProductComponent /> */}


        </div>

        <ProductModalComponent />


    </div>
  )
}
