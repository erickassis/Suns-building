import React from 'react'

//imagem

import backGrey from '../assets/fb51434f75f4513fd43833fba4c4f2d6.jpg'

//Estilo
import '../styles/CardsTopicos.css';

const CardsTopicos = () => {
  return (
    <div className='container-cardstopicos'>
        <div className='conatainer-img-cardstopicos'>
            <h2>Bioarquitetura</h2>
            <img src={backGrey} alt="" className='img-cardstopicos'/>
        </div>
        <div className='conatainer-img-cardstopicos'>
            <h2>Smart-cities</h2>
            <img src={backGrey} alt="" className='img-cardstopicos'/>
        </div>
        <div className='conatainer-img-cardstopicos'>
            <h2>Energíes Renováveis</h2>
            <img src={backGrey} alt="" className='img-cardstopicos'/>
        </div>

    </div>
  )
}

export default CardsTopicos