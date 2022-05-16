import React from 'react'

export const PrallaxComponent = ({ image }) => {
  return (
    <div className="general__parallax" style={{backgroundImage: `url( ${ image } )`}}>

    </div>
  )
}