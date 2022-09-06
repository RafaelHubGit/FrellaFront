import React from 'react'

import { CarouselComponent } from './carousel/CarouselComponent'
import { FooterScreen } from './footer/FooterScreen'
import { FrellaIconComponent } from './main/frellaBigLogo/FrellaIconComponent'
import { GreenBarIconsComponent } from './main/greenBarIcons/GreenBarIconsComponent'
import { NuestrosProductosScreen } from './main/nuestrosProductos/NuestrosProductosScreen'
// import { MostPopularScreen } from './mostPopular/MostPopularScreen'
import { PrallaxComponent } from './Parallax/PrallaxComponent'

export const MainScreen = () => {

  return (
    <div className="mainScreen__ContainerGeneral">
        <div className="mainScreen__carouselContainer">
            <CarouselComponent />
        </div>
        <GreenBarIconsComponent />
        <FrellaIconComponent />

        <NuestrosProductosScreen />
        {/* <MostPopularScreen /> */}

        <div className="mainScreen__parallaxContainer">
          <PrallaxComponent 
            image="https://firebasestorage.googleapis.com/v0/b/prueba-32329.appspot.com/o/aceite2.jpg?alt=media&token=234a3e18-6e93-4f0a-9c2a-0ad83de6719b"
          />
        </div>

        <FooterScreen />
    </div>
  )
}
