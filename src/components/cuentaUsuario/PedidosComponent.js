import React from 'react'

export const PedidosComponent = () => {
  return (
    <div className=" cuentaUser__pedidoContainer">

        <div className="input-group mb-3 cuentaUser__searchInput">
            <input type="text" className="form-control" placeholder="Busqueda . . ." aria-label="Recipient's username" aria-describedby="button-addon2" />
            {/* <div class="btn btn-outline-secondary" type="" id="button-addon2">Button</div> */}
        </div>


        <div className="table-responsive-sm">
            <table className="table table-hover table-striped text-center ">
                <thead>
                    <tr>
                        <th scope="col">N° ticket</th>
                        <th scope="col">Fecha pedido</th>
                        <th scope="col">Descripción</th>
                        <th scope="col"># Productos</th>
                        <th scope="col">Total</th>
                        <th scope="col">Estatus</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="pointer">
                        <th className="tdHeight" >1</th>
                        <td className="cuentaUser__tdFecha tdHeight">
                            <div className="cuentaUser__fechaWrap">
                                <small className="cuentaUser__fechaText">Realizado : </small>
                                <small className="cuentaUser__fechaDate"> 01/Enero/2022 </small>
                            </div>
                            <div className="cuentaUser__fechaWrap mt-1">
                                <small className="cuentaUser__fechaText">Entregado : </small>
                                <small className="cuentaUser__fechaDate" > 01/Enero/2022 </small>
                            </div>
                        </td>
                        <td className="tdHeight">
                            <div className="cuentaUser__productosWrap">
                                <small> trexa</small>
                                <small> javiera </small>
                                <small> rodrigo</small>
                                <small> eli</small>
                                <small> flor</small>
                                <small> mantequilla</small>
                                <small> plusvalia</small>
                            </div>
                        </td>
                        <td className="tdHeight"> 45 </td>
                        <td className="tdHeight"> $ 1200.45 </td>
                        <td className="tdHeight"> Entregado </td>
                    </tr>
                    {/* <tr>
                        <th >2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th >3</th>
                        <td >Larry the Bird</td>
                        <td>@twitter</td>
                    </tr> */}
                </tbody>
            </table>
        </div>
    </div>
  )
}
