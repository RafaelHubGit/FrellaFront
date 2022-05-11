import React from 'react'

export const CarouselComponent = () => {

    const data = [
        {
            image: "https://firebasestorage.googleapis.com/v0/b/prueba-32329.appspot.com/o/aceite2.jpg?alt=media&token=234a3e18-6e93-4f0a-9c2a-0ad83de6719b",
            title: "",
            text: "",
            link: ''
        },
        {
            image: "https://firebasestorage.googleapis.com/v0/b/prueba-32329.appspot.com/o/aceites.jpeg?alt=media&token=37e7473d-62c7-47c5-9f07-53e91c1600fd",
            title: "Segundo titulo",
            text: "Texto :D",
            link: ''
        },
        {
            image: "https://firebasestorage.googleapis.com/v0/b/prueba-32329.appspot.com/o/tipos-de-frutas-1.jpg?alt=media&token=8379d6c0-a604-405e-bc56-ec4c49275924",
            title: "Tercer titulo",
            text: "Texto :D",
            link: ''
        }
    ]

  return (
    <div id="carouselExampleDark" className="carousel  slide general__carouselContainer" data-bs-ride="carousel">
        <div className="carousel-indicators">
            {
                data.map( (data, idx) => 
                    <button key={ idx } 
                        type="button" 
                        data-bs-target="#carouselExampleDark" 
                        data-bs-slide-to={ idx } 
                        className={` ${ idx === 0 ? "active" : ''} `} 
                        aria-current="true" 
                        aria-label={`Slide ${ idx + 1} `}>
                        </button> 
                )
            }

        </div>
        <div className="carousel-inner">

            {
                data.map((data, idx) =>
                    <div key={ idx } className={`carousel-item ${ idx === 0 ? 'active' : '' }`} data-bs-interval="4000">
                        <div className="general__CarouselImg" style={{backgroundImage: `url( ${ data.image } )`}}></div>
                        <div className="carousel-caption d-none d-md-block">
                            {
                                data.title !== '' ? 
                                    <h2> { data.title } </h2>
                                    : ''

                            }
                            {
                                data.text !== '' ?
                                    <p> { data.text } </p>
                                    : ''

                            }
                        </div>
                    </div>

                )
            }

        </div>
        {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button> */}
    </div>
  )
}
