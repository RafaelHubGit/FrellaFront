import React from 'react'

export const FooterData = ({ titulo, items }) => {
  return (
    <div className="footer__footerDataContainer">
        <h5> { titulo } </h5>
        <div>
            <ul>
                {
                    items.map((item, idx) =>
                        <li key={idx} >
                            { item }
                        </li>
                    )
                }
                {/* <li>Aceites</li>
                <li>Jabones</li>
                <li>Capilar</li> */}
            </ul>
        </div>
    </div>
  )
}
