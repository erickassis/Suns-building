import React from 'react'

//CSS
import '../styles/CardIcones.css';


import backGrey from '../assets/fb51434f75f4513fd43833fba4c4f2d6.jpg'

const CardIcones = () => {
  return (
    <div className='container-cardicones'>
        <div className='container-img-cardicones'>
            <img src={backGrey} alt="" id='background-img-cardicones'/>

            <ul className='list-cardicones'>
                <li>
                    <img src={backGrey} alt="" />
                </li>
                <li>
                    <img src={backGrey} alt="" />
                </li>
                <li>
                    <img src={backGrey} alt="" />
                </li>
                <li>
                    <img src={backGrey} alt="" />
                </li>
            </ul>
        </div>

    </div>
  )
}

export default CardIcones