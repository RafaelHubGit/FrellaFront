import React from 'react';
import { useDispatch } from 'react-redux';
import { prodOpenModal } from '../../actions/product';

export const ProductComponent = () => {

    const dispatch = useDispatch();

    const openModalFn = () => {
        dispatch( prodOpenModal() );
    }

  return (
    <div 
        className="products__productCardContainer pointer" 
        onClick={ openModalFn }
    >
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

    </div>
  )
}
