import React from 'react'
import { GreenIconsComponent } from './GreenIconsComponent'

export const GreenBarIconsComponent = () => {
  return (
    <div className="greenBarIcons__Container">

        <div className="greenBarIcons__Wrap">
            <GreenIconsComponent icon="spa" text='No tóxico'/>
            <GreenIconsComponent icon="science" text="Libre de parabenos"/>
            <GreenIconsComponent icon="volunteer_activism" text="Hecho a mano" />
            <GreenIconsComponent icon="cruelty_free" text="Libre de crueldad animal" />
            <GreenIconsComponent icon="compost" text="Sustentable" />
        </div>

    </div>
  )
}

