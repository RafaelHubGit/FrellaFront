import React from 'react'

export const LateralbarComponent = () => {
    return (
        <div className="lateralbar__container">

            <div className="lateralbar__menuIcon">
                <span className="material-icons md-40 colorTextPrimary">
                    menu
                </span>
            </div>

            <div>
                <div className="lateralbar__iconTextContainer">
                    <span className="material-icons-round md-30 colorTextPrimary">
                        login
                    </span>
                    <p className="colorTextPrimary">
                        LogIn
                    </p>
                </div>

                <div className="lateralbar__iconTextContainer">
                    <div className="lateralbar__iconTextContainerNumber colorTextPrimary">
                        120
                    </div>
                    <span className="material-icons md-33 colorTextPrimary">
                        shopping_bag
                    </span>
                    <p className="colorTextPrimary">
                        $ 9500.00
                    </p>
                </div>
            </div>


            <div className="lateralbar__frellaNatContainer">
                <div className="lateralbar__frellaNatWrapp">
                    <p className="lateralbar__frella">FRELLA</p>
                    <p className="lateralbar__natural">NATURAL</p>
                </div>
            </div>

            <div className="lateralbar__iconsSocial">
                <i className="fa-brands fa-facebook-f colorTextPrimary"></i>
                <i className="fa-brands fa-instagram colorTextPrimary"></i>
            </div>

        </div>
    )
}
