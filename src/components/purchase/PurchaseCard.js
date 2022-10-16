import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addProdToPurchaseStart, removeProdToPurchaseStart } from '../../actions/product';

export const PurchaseCard = ({ producto }) => {

  const imageUrl = {
    backgroundImage: `url(${ producto.data.urlImagen })`
  }

  const dispatch = useDispatch();
  const [precio, setPrecio] =  useState( 0 );
  const [cantidad, setCantidad] = useState( 0 );

  useEffect(() => {
    setPrecio( producto.data.precioBase - ( producto.data.precioBase * producto.data.descuento / 100 ) );

    setCantidad( producto.cantidad );

  }, [producto])

  const addOne = () => {
    const prod = {...producto};
    delete prod.data;
    prod.cantidad = ++prod.cantidad;
    console.log('el prod aDD : ', prod);
    dispatch( addProdToPurchaseStart( prod ) );
  }
  const delOne = () => {
    const prod = {...producto};
    delete prod.data;
    prod.cantidad = --prod.cantidad;
    dispatch( addProdToPurchaseStart( prod ) );
  }

  const handleRemoveProd = () => {

    dispatch( removeProdToPurchaseStart( producto.id ) );

  }

  return (
    <div className="purchase__productCardContainer">
      <div className="purchase__productImage" style={ imageUrl }></div>
      <div className="purchase__dataWrap">
        <div className="purchase__productName">
          { producto.data.nombre }
        </div>
        <div className="purchase__prices">
          <small className="purchase__HighPrice"> $ { producto.data.precioBase.toFixed(2) } </small>
          <small className="purchase__LowPrice"> $ { precio.toFixed(2) } </small>
        </div>
        <div className="purchase__plusminus">
          <button 
            onClick={ delOne }
            className="purchase__btnPlusMinus"> - </button>
          <div className="purchase__quantity"> { cantidad } </div>
          <button 
            onClick={ addOne }
            className="purchase__btnPlusMinus"> + </button>
        </div>
      </div>
      <div className="purchase__FinalPriceContainer">

        <button 
          onClick={ handleRemoveProd }
          className="purchase__delProduct">X</button>

        <div className="purchase__FinalPrice">
          $ { (precio * cantidad).toFixed(2) }
        </div>
      </div>
    </div>
  )
}
