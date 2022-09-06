import React from 'react'
import { UserDataComponent } from '../shared/UserDataComponent';

export const RegisterComponent = ({ selLogReg }) => {

    const changeLogReg = () => {
        selLogReg( 'log' );
    }

  return (
    <div className="loginReg__RegisterContainer">

        <div className="loginReg__RegisterHeader">
            <h3> Registro </h3>
        </div>

        <div>
            <UserDataComponent />
            <div className="loginReg__RegisterBtnWrap">
                <button> Registrarte </button>

                <h6 onClick={ changeLogReg } className="pointer"> ¿Ya tienes cuenta?</h6>
            </div>
        </div>

    </div>
  )
}
