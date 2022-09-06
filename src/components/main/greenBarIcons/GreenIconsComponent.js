import React from 'react'

export const GreenIconsComponent = ({ icon, text }) => {
  return (
    <div className="greenBarIcons__ContainerIcons">
        <div className="greenBarIcons__iconCircle">
            <span className="material-icons-outlined iconSize-40">
                { icon }
            </span>
        </div>
        <div className="greenBarIcons__textIconContainer">
            <div className="greenBarIcons__whiteLine"></div>
            <p> { text } </p>

        </div>
    </div>
  )
}
