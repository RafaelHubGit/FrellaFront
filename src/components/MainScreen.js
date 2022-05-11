import React from 'react'
import { CarouselComponent } from './carousel/CarouselComponent'

export const MainScreen = () => {
  return (
    <div>
        <div className="mainScreen__carouselContainer">
            <CarouselComponent />
        </div>
    </div>
  )
}
