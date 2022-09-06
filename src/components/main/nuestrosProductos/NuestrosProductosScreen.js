import React from 'react'
import { OurProductsCardComponent } from './OurProductsCardComponent'

export const NuestrosProductosScreen = () => {
  return (
    <div className="ourProducts__ScreenContainer">
        <h3> NUESTROS PRODUCTOS </h3>

        <div className="ourProducts__ourProductsContainer">
          <OurProductsCardComponent 
              position='left'
              title='JABONES'
              text='im a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.'
              image='https://firebasestorage.googleapis.com/v0/b/prueba-32329.appspot.com/o/aceites.jpeg?alt=media&token=37e7473d-62c7-47c5-9f07-53e91c1600fd'
          />
          <OurProductsCardComponent 
              position='right'
              title='CAPILAR'
              text='im a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.'
              image='https://firebasestorage.googleapis.com/v0/b/prueba-32329.appspot.com/o/aceites.jpeg?alt=media&token=37e7473d-62c7-47c5-9f07-53e91c1600fd'
          />
          <OurProductsCardComponent 
              position='left'
              title='ACEITES'
              text='im a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.'
              image='https://firebasestorage.googleapis.com/v0/b/prueba-32329.appspot.com/o/aceites.jpeg?alt=media&token=37e7473d-62c7-47c5-9f07-53e91c1600fd'
          />
        </div>
    </div>
  )
}
