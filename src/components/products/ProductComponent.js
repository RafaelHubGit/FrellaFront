import React from 'react';
import { useDispatch } from 'react-redux';
import { prodOpenModal, productSelected } from '../../actions/product';

export const ProductComponent = ({ producto }) => {

    const imageStyle = {
        backgroundImage: `url(${ producto.urlImagen })`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
    };

    const dispatch = useDispatch();

    const openModalFn = () => {
        dispatch( prodOpenModal() );
        dispatch( productSelected( producto ) );
    }

  return (
    <div 
        className="products__productCardContainer pointer" 
        onClick={ openModalFn }
    >
        <div className="products__productCardDiscount">-{ producto.descuento }</div>
        <div className="products__productCardImage" style={ imageStyle }>
            <div className="products__productCardInfo">{ producto.etiqueta }</div>
            <div className="products_productCardIngredients"> { producto.productosPrincipales } </div>
        </div>
        <div className="products__productCardData">
            <h5> { producto.nombre } </h5>
            <div className="products__productCardPrice">
                <small className="products__productCardHighPrice">
                    $ { producto.precioBase }
                </small>
                <p className="products__productCardLowPrice">
                    $ { producto.precioBase - (producto.precioBase * producto.descuento / 100) }
                </p>
            </div>
        </div>

    </div>
  )
}
