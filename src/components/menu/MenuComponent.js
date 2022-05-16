import React from 'react'
import { LogoComponent } from '../Logo/LogoComponent'

export const MenuComponent = () => {
  return (
    <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasWithBackdrop" aria-labelledby="offcanvasWithBackdropLabel">
      <div class="offcanvas-header">
        {/* <h5 class="offcanvas-title" id="offcanvasWithBackdropLabel"> */}
          <LogoComponent rotate="0" />
        {/* </h5> */}
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <p>.....</p>
      </div>
    </div>
  )
}
