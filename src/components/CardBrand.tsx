import React from 'react'

//Importação da imagem
import backGrey from '../assets/fb51434f75f4513fd43833fba4c4f2d6.jpg'

//Importção CSS
 import '../styles/CardBrand.css'

const CardBrand = () => {
  return (
    <div className='container-cardbrand'>
        <div className='container-limitador-cardbrand'>
            <div>
                <img src={backGrey} alt="" />
            </div>
            <div className='container-titulo-cardbrand'>
                <h1>Lorem ipsum dolor sit amet </h1>
            </div>
        </div>
    </div>
  )
}

export default CardBrand