import React from 'react'

//Estilo
import '../styles/CardSmartCities.css'
//img 
import backGrey from '../assets/fb51434f75f4513fd43833fba4c4f2d6.jpg'

const CardSmartCities = () => {
  return (
    <div className='container-cardsmartcities'>


        <div className='container-img-cardsmartcities'>
            <img src={backGrey} alt="" />
        </div>

        <div className='container-text-cardsmartcities'>
            
            <ul className='lista-smartcities'>
                <li id='titulo-lista-smartcities'><h1>SMART CITIES...</h1></li>
                <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate maxime placeat ut fugiat soluta assumenda aliquam dignissimos inventore? Commodi id recusandae odio, illo voluptatum maiores vitae ipsa! Sapiente, quasi esse! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo laudantium in illo culpa impedit accusamus necessitatibus omnis assumenda dicta delectus eaque optio atque perspiciatis nostrum obcaecati amet voluptatibus, maiores maxime.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, aliquid quos dolorum perspiciatis maxime eveniet aperiam reprehenderit repellendus quam pari</li>
                <li>Lorem ipsum dolor</li>
                <li>Lorem ipsum dolor</li>
                <li>Lorem ipsum dolor</li>
            </ul>
        </div>


    </div>
  )
}

export default CardSmartCities