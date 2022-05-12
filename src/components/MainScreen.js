import React from 'react'
import { CarouselComponent } from './carousel/CarouselComponent'
import { FrellaIconComponent } from './main/frellaBigLogo/FrellaIconComponent'
import { GreenBarIconsComponent } from './main/greenBarIcons/GreenBarIconsComponent'
import { NuestrosProductosScreen } from './main/nuestrosProductos/NuestrosProductosScreen'

export const MainScreen = () => {
  return (
    <div>
        <div className="mainScreen__carouselContainer">
            <CarouselComponent />
            <GreenBarIconsComponent />
            <FrellaIconComponent />

            <NuestrosProductosScreen />
        </div>
    </div>
  )
}
