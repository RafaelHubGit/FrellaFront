import React from 'react'
import { PurchaseComponent } from './purchase/PurchaseComponent'
import { FooterScreen } from './footer/FooterScreen';

export const PurchaseScreen = () => {
    return (
        <div className="purchase__purchaseScreenContainer">
            <div className="purchase__imgHeader general__parallax">

            </div>
            <div>
                <PurchaseComponent />
            </div>
            <FooterScreen />
        </div>
    )
}
