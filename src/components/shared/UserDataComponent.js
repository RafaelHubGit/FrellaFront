import React from 'react'

export const UserDataComponent = () => {
  return (
    <div>
        <div>
            <div className="input-group input-group-sm mb-3">
                {/* <span className="input-group-text" id="basic-addon1">Nombre</span> */}
                <input type="text" className="form-control" placeholder="Nombre" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div className="input-group input-group-sm mb-3">
                {/* <span className="input-group-text" id="basic-addon1">WhatsApp</span> */}
                <input type="text" className="form-control" placeholder="WhatsApp" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div className="input-group input-group-sm mb-3">
                {/* <span className="input-group-text" id="basic-addon1">Email</span> */}
                <input type="text" className="form-control" placeholder="Email" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div className="input-group input-group-sm mb-3">
                {/* <span className="input-group-text" id="basic-addon1">Usuario</span> */}
                <input type="text" className="form-control" placeholder="Contraseña" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
        </div>

        <div>
            <h6> Fecha de Nacimiento </h6>
            <div className="general__birthdayWrap">
                <select className="form-select form-select-sm" aria-label="Default select example">
                    <option value="0">Enero</option>
                    <option value="1">Febrero</option>
                    <option value="2">Marzo</option>
                    <option value="3">Abril</option>
                </select>
                <select className="form-select form-select-sm" aria-label="Default select example">
                    <option value="0">1</option>
                    <option value="1">2</option>
                    <option value="2">3</option>
                    <option value="3">4</option>
                </select>
                <select className="form-select form-select-sm" aria-label="Default select example">
                    <option value="0">2022</option>
                    <option value="1">2021</option>
                    <option value="2">2019</option>
                    <option value="3">2018</option>
                </select>
            </div>
        </div>

        <div className="general__sexoContainer">
            <h6> Sexo </h6>

            <div className="general__sexoWrap">
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="sexo" id="sexo1" value="Mujer" />
                    <label className="form-check-label" htmlFor="sexo1">Mujer</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="sexo" id="sexo2" value="Hombre" />
                    <label className="form-check-label" htmlFor="sexo2">Hombre</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="sexo" id="sexo3" value="Otro" />
                    <label className="form-check-label" htmlFor="sexo3">Otro</label>
                </div>
            </div>
        </div>
    </div>
  )
}
