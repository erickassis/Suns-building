import '../styles/CardsTopicos.css';
import { buscarImagem } from './buscarImagem'

const CardsTopicos = () => {
  return (
    <>
      <p className='descricaoSite'>Nosso Objetivo</p>
      <p className='descricaoSite'>Sun's Building é uma plataforma interativa, onde os usuários poderão acessar informações relevantes e dados sobre urbanização sustentável. Ao fazer isso, esperamos contribuir para a conscientização e a adoção de práticas que promovam o desenvolvimento de cidades mais verdes, resilientes e sustentáveis.
      </p>
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