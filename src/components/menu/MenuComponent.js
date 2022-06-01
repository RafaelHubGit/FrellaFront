import React from 'react'
import { LogoComponent } from '../Logo/LogoComponent'

export const MenuComponent = () => {
  return (
    <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasWithBackdrop" aria-labelledby="offcanvasWithBackdropLabel">
      <div className="offcanvas-header">
        {/* <h5 class="offcanvas-title" id="offcanvasWithBackdropLabel"> */}
          <LogoComponent rotate="0" />
        {/* </h5> */}
        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="list-group list-group-flush">
          <li className="list-group-item list-group-item-action pointer">Inicio</li>
          <li className="list-group-item list-group-item-action pointer">Jabones</li>
          <li className="list-group-item list-group-item-action pointer">Capilar</li>
          <li className="list-group-item list-group-item-action pointer">Aceites</li>
          <li className="list-group-item list-group-item-action pointer">Mi cuenta</li>
        </ul>
      </div>
    </div>
  )
}
