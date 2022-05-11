import React from 'react'
import { LateralbarComponent } from './LateralBar/LateralbarComponent'
import { MainScreen } from './MainScreen'


export const MainComponent = () => {
    return (
        <div className="general__container">
            <LateralbarComponent />
            <MainScreen />
        </div>
    )
}
