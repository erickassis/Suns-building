import '../styles/CardsTopicos.css';
import { buscarImagem } from './buscarImagem'

const CardsTopicos = () => {
  return (
    <>
        <div className='container-cardstopicos'> 
            <div className='conatainer-img-cardstopicos'>
                <h2>Bioarquitetura</h2>
                <img src={buscarImagem('bioArchitecture')} alt="" className='img-cardstopicos'/>
            </div>
            <div className='conatainer-img-cardstopicos'>
                <h2>Smart-cities</h2>
                <img src={buscarImagem('smartCity2')} alt="" className='img-cardstopicos'/>
            </div>
            <div className='conatainer-img-cardstopicos'>
                <h2>Energíes Renováveis</h2>
                <img src={buscarImagem('renewableEnergies')} alt="" className='img-cardstopicos'/>
          </div>
        </div>
    </> 
  )
};

export default CardsTopicos;