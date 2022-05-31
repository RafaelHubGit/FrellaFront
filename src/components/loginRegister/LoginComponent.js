import React from 'react'

export const LoginComponent = () => {
  return (
    <div className="loginReg__LoginContainer">
        <div className="loginReg__LoginHeader">
            <h3> Inicio de sesión </h3>

            <div className="loginReg__LoginIconsSocial">
                <i className="fa-brands fa-google iconRed mx-2"></i>
                <i className="fa-brands fa-facebook-f iconBlue mx-2"></i>
            </div>
        </div>
        <div className="loginReg__formLoginContainer">
            <div className="input-group mb-3 loginReg__InputLogin">
                {/* <span className="input-group-text" id="basic-addon1">@</span> */}
                <input type="text" className="form-control" placeholder="Email o WhatsApp" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div className="input-group mb-3 loginReg__InputLogin">
                {/* <span className="input-group-text" id="basic-addon1">@</span> */}
                <input type="text" className="form-control" placeholder="Contraseña" aria-label="Username" aria-describedby="basic-addon1" />
            </div>

        </div>
        <div className="loginReg__iniciarLogin">
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                <label className="form-check-label" htmlFor="defaultCheck1">
                    Recordar mi contraseña
                </label>
            </div>
            <button>
                Iniciar sesión
            </button>
        </div>
        <div className="loginReg__LogincreateContainer">

            <h6 className="loginReg__crearCuenta">Crear Cuenta</h6>

            <h6> Olvidé mi contraseña </h6>

        </div>
    </div>
  )
}
