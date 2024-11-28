import '../styles/CardEdificio.css'

import backGrey from '../assets/fb51434f75f4513fd43833fba4c4f2d6.jpg'
import { buscarImagem } from './buscarImagem'


const CardEdificio = () => {

    return (
    <div className='container-cardedificio'>
        <img src={buscarImagem('centralBuilding')} alt="" />
    </div> 
  )
}

export default CardEdificio