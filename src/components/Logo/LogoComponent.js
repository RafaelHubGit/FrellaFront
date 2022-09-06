import React from 'react'

export const LogoComponent = ({ rotate=0 }) => {
  return (
    <div className="general__frellaNatContainer">
        <div className="general__frellaNatWrapp" style={{transform: `rotate(${rotate}deg)`}}>
            <p className="general__frella">FRELLA</p>
            <p className="general__natural">NATURAL</p>
        </div>
    </div>
  )
}