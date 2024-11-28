import '../styles/CardsTopicos.css';
import { buscarImagem } from './buscarImagem'

const CardsTopicos = () => {
  return (
    <div className='container-cardstopicos'>
        <div className='conatainer-img-cardstopicos'>
            <h2>Bioarquitetura</h2>
            <img src={buscarImagem('building')} alt="" className='img-cardstopicos'/>
        </div>
        <div className='conatainer-img-cardstopicos'>
            <h2>Smart-cities</h2>
            <img src={buscarImagem('smartcity')} alt="" className='img-cardstopicos'/>
        </div>
        <div className='conatainer-img-cardstopicos'>
            <h2>Energíes Renováveis</h2>
            <img src={buscarImagem('turbinaEolica')} alt="" className='img-cardstopicos'/>
        </div>

    </div>
  )
}

export default CardsTopicos