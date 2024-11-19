import React from 'react'

//Estilo
import '../styles/CardBioArquitetura.css'
//img 
import backGrey from '../assets/fb51434f75f4513fd43833fba4c4f2d6.jpg'

const CardBioArquitetura = () => {
  return (
    <div className='container-cardbioarquitetura'>
        <div className='container-text-cardbioarquitetura'>
            
            <ul className='lista-bioarquitetura'>
                <li id='titulo-lista-bioarquitetura'><h1>BIO-ARQUITETURA...</h1></li>
                <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate maxime placeat ut fugiat soluta assumenda aliquam dignissimos inventore? Commodi id recusandae odio, illo voluptatum maiores vitae ipsa! Sapiente, quasi esse! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo laudantium in illo culpa impedit accusamus necessitatibus omnis assumenda dicta delectus eaque optio atque perspiciatis nostrum obcaecati amet voluptatibus, maiores maxime.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, aliquid quos dolorum perspiciatis maxime eveniet aperiam reprehenderit repellendus quam pari</li>
                <li>Lorem ipsum dolor</li>
                <li>Lorem ipsum dolor</li>
                <li>Lorem ipsum dolor</li>
            </ul>
        </div>

        <div className='container-img-cardbioarquitetura'>
            <img src={backGrey} alt="" />
        </div>
    </div>
  )
}

export default CardBioArquitetura