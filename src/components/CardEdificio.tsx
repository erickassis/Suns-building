import '../styles/CardEdificio.css'
import { buscarImagem } from './buscarImagem'


const CardEdificio = () => {

    return (
    <div className='container-cardedificio'>
        <img src={buscarImagem('centralBuilding')} alt="" />
    </div> 
  )
}

export default CardEdificio;