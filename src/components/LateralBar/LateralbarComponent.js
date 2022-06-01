import React, { useState } from 'react'
import { LoginRegisterModal } from '../loginRegister/LoginRegisterModal'
import { LogoComponent } from '../Logo/LogoComponent'
import { MenuComponent } from '../menu/MenuComponent'

export const LateralbarComponent = () => {

    const [openModal, setOpenModal] = useState(true);

    const handleCloseModal = () => {
        setOpenModal( false )
    }

    const handleOpenModal = () => {
        setOpenModal( true )
    }

    return (
        <div className="lateralbar__container">

            <div className="lateralbar__menuIcon">
                <span className="material-icons iconSize-35 colorTextPrimary pointer" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBackdrop" aria-controls="offcanvasWithBackdrop">
                    menu
                </span>
            </div>

            <div>
                <div onClick={ handleOpenModal }
                    className="lateralbar__iconTextContainer pointer">
                    <span className="material-icons-round iconSize-30 colorTextPrimary pointer">
                        login
                    </span>
                    <p className="colorTextPrimary">
                        Cuenta
                    </p>
                </div>

                <div className="lateralbar__iconTextContainer">
                    <div className="lateralbar__iconTextContainerNumber colorTextPrimary">
                        120
                    </div>
                    <span className="material-icons iconSize-25 colorTextPrimary pointer">
                        shopping_bag
                    </span>
                    <p className="colorTextPrimary pointer">
                        $ 80358.00
                    </p>
                </div>
            </div>


            <LogoComponent rotate="-90" />

            {/* <div className="lateralbar__frellaNatContainer">
                <div className="lateralbar__frellaNatWrapp">
                    <p className="lateralbar__frella">FRELLA</p>
                    <p className="lateralbar__natural">NATURAL</p>
                </div>
            </div> */}

            <div className="lateralbar__iconsSocial">
                <i className="fa-brands fa-facebook-f colorTextPrimary pointer"></i>
                <i className="fa-brands fa-instagram colorTextPrimary pointer"></i>
            </div>


            <MenuComponent />
            <LoginRegisterModal isOpen={ openModal } closeFnc={ handleCloseModal }/>

        </div>
    )
}
