import React from 'react'
import { LogoComponent } from '../Logo/LogoComponent'
import { FooterData } from './FooterData'

export const FooterScreen = () => {
  return (
    <div>
        <div className="footer__contentContainer">
            <div>
                <LogoComponent rotate="0" />
            </div>
            <div>
                <FooterData 
                    titulo="PRODUCTOS"
                    items={["Aceites", "Jabones", "Capilar"]}
                />
                <FooterData 
                    titulo="AYUDA"
                    items={["Terminos y Condiciones", "Aviso de Privacidad", "Envios y Devoluciones"]}
                />
            </div>
            <div>
                <FooterData 
                    titulo="FRELLA"
                    items={["Nuestra Historia", "Preguntas Frecuentes"]}
                />
                <FooterData 
                    titulo="CONTACTANOS"
                    items={["55-12-34-56-78"]}
                />
            </div>
        </div>
        <div className="footer__lastTextContainer">
            <p>© 2023 por Frella Natural. Creado por Rafael Nava</p>
        </div>
    </div>
  )
}
