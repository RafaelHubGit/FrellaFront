import React from 'react'

export const OurProductsCardComponent = ({ position = 'right', title, text, image}) => {
  return (
    // <div className="ourProducts__CardContainer">
    <div className={` ${position !== 'left' ? 'ourProducts__CardContainer' : 'ourProducts__CardContainerReverse'} `}>
        <div className="ourProducts__CardtextContainer">

            <h3 className={`${ position!=='left'? 'textRight' : 'textLeft'}`}> { title } </h3>
            <p> { text } </p>
            <div>
                <button> Ver más...</button>
            </div>

        </div>
        <div className="ourProducts__CardimageContainer">
            {/* <img src="https://firebasestorage.googleapis.com/v0/b/prueba-32329.appspot.com/o/aceites.jpeg?alt=media&token=37e7473d-62c7-47c5-9f07-53e91c1600fd"></img> */}
            {/* <div className="ourProducts__rectangle"></div> */}
            <div className="ourProducts__CardImage" style={{backgroundImage: `url(${ image })`}}></div>
        </div>
    </div>
  )
}
