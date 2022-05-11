import React from 'react'
import { CarouselComponent } from './carousel/CarouselComponent'
import { GreenBarIconsComponent } from './greenBarIcons/GreenBarIconsComponent'

export const MainScreen = () => {
  return (
    <div>
        <div className="mainScreen__carouselContainer">
            <CarouselComponent />
            <GreenBarIconsComponent />
        </div>
    </div>
  )
}
